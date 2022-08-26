import React from "react";
import {CartCountContext} from "../context/cart_count_context";
import{IsuserContext} from "../context/isoth.context";
import { useContext, useEffect } from "react";
import "./css/nav.css"
import { Link } from "react-router-dom";
function Navbar(){
  const {cartcount} = useContext(CartCountContext);
  const {updateCartCount} = useContext(CartCountContext);
  const {islogedin} = useContext(IsuserContext)
  const{verifylogdin} = useContext(IsuserContext)

  const cartPCount = async()=>{
      var res = verifylogdin();
     console.log("islogedin",res)
     
        if(res===true){
            console.log("inside count in nav")
            let data = await fetch("http://localhost:5400/cartp");
        let res = await data.json();
        //console.log(res);
       
        updateCartCount(res.length)
        }
     
   
    
}
useEffect(()=>{
    cartPCount();
},[])

   return(

       <>
       <div className="navdiv" style={{height:"40px" , width : "99vw" ,}}>
        <div className="left_div">
       
         <Link to="/">Aqua World</Link>
        </div>
        <div className="right_div">
        <button><Link to="/cart">cart: {cartcount}</Link></button>
       <button><Link to="/login">login</Link></button>
       <button><Link to="/signin">signin</Link></button>

       <Link to="/"></Link>
        </div>
      
       </div>
       <div className="filter_by_reating">
       

           </div>       
       </>
   )
}
export{Navbar}