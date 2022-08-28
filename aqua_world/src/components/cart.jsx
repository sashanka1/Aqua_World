import { useEffect, useState, useContext } from "react";

import {CartCountContext} from  "../context/cart_count_context"
import{Cartitm} from "./showCartitom"
import "./css/cart.css"
function Cart(){
     const {updateCartCount} = useContext(CartCountContext)
    const[cartitm, Setcartitm] = useState([]);

    const cartdata = async()=>{
        console.log("the cartdata of the user");
        var userdetalis = JSON.parse(localStorage.getItem("user"))|| []
        let data = await fetch(`http://localhost:5400/cartp?theuser=${userdetalis.user._id}`);
        let res = await data.json();
        console.log("the cartdata of the user" ,res);
        Setcartitm([...res]);
        updateCartCount(res.length)
    }
    useEffect(()=>{
        cartdata();
    },[])
    return(
        <div className="cartmain">
 <Cartitm data= {{cartitm, cartdata}}/>
        </div>
    )
}
 export{Cart}