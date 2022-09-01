import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react"
import{IsuserContext} from "../context/isoth.context";
import {Showaddress} from "./showAddress"
import { useNavigate } from "react-router-dom";

function Adress(){
    const navigate  = useNavigate();
    const {islogedin}  = useContext(IsuserContext);
    const [adress , setAdress] = useState([])
    const getadress = ()=>{
        if(islogedin===true){
            let data = JSON.parse(localStorage.getItem("user"))|| [];
            let allAdress = data.user.adresses;
            console.log("user adress",allAdress)
            setAdress([...allAdress])
        }
    }

    const navigateToAddAddressPage = ()=>{ // navigate function to navigate to the add address page
 navigate("/Modifyaddress")
    }
        useEffect(()=>{
            getadress()
        },[islogedin])
        return(
        <>


        <div className="adresscont">
                Address
                <Showaddress data = {adress}/>
        </div>

        <button className="addNewaddress" onClick={()=>{navigateToAddAddressPage()}}>add newAddress</button>
        </>
    )
}

export{Adress}