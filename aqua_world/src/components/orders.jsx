import { useEffect } from "react";
import {useContext, useState} from "react"
import { Showorder } from "./showorders";
import {IsuserContext}  from "../context/isoth.context"
import "./css/order.css";

function Order(){
const [orderArr,SetOrderArr] = useState([]);
const {verifylogdin} = useContext(IsuserContext)
const UserOrderedData = async()=>{
    let verify = verifylogdin();
    if(verify){
        var userdetalis = JSON.parse(localStorage.getItem("user")) || [];
        let theuserId = userdetalis.user._id; // the id of the logedin user;    
        let data = await fetch(`https://backend-api-sss.herokuapp.com/order?theuserid=${theuserId}`).then((res)=>{
           return res.json()
        });
       // let datavalue = data.json();
        console.log(data);
        SetOrderArr([...data])

       
    }  
}
useEffect(()=>{
UserOrderedData();
},[])

    return(
    <>
    <div className="forspace"></div>
        <div className="maincont">
      <Showorder data = {orderArr}/>
    

        </div>
    </>
    )
}

export{Order}