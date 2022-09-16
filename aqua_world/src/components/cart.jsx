import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {CartCountContext} from  "../context/cart_count_context"
import{Cartitm} from "./showCartitom"
import {Circles} from "react-loader-spinner"
import "./css/cart.css"
function Cart(){
    const navigatetopayment = useNavigate();
    const [loder,Setloder]= useState(true);
     const {updateCartCount} = useContext(CartCountContext);
    const[cartitm, Setcartitm] = useState([]);
    const [totalamount , setTotalamount] = useState();
        const{cartcount} = useContext(CartCountContext);
    const cartdata = async()=>{
        console.log("the cartdata of the user");
        var userdetalis = JSON.parse(localStorage.getItem("user"))|| []
        let data = await fetch(`https://backend-api-sss.herokuapp.com/cartp?theuser=${userdetalis.user._id}`);
        let res = await data.json();
        console.log("the cartdata of the user" ,res);
        Setcartitm([...res]);
        updateCartCount(res.length)
    }
    const totalam = ()=>{
        let tota = cartitm.reduce(function(initial, itm){
            return initial+itm.price
        },0)
       
        setTotalamount(tota)
      
    }

    const gotopayment = ()=>{
        
        navigatetopayment("/cart/payment")
    }
    useEffect(()=>{
        totalam();
    },[cartitm])
    useEffect(()=>{
        cartdata();
    },[])
    return(
        <>
        
        <div className="cartmain">

 <Cartitm data= {{cartitm, cartdata}}/>
  
        </div>

<div className="paymentcont">
<p>ProductCount:- {cartcount}</p>
<p>Totalamount: {totalamount}₹</p>
<p>Discount:- 3%</p>
<p>Shipping charges:- 200₹</p>
<hr />
<p>Amount to pay:- {Math.floor(totalamount - ((totalamount/100)*3))+200}₹</p>
<button onClick={()=>{gotopayment()}}>checkout</button>
</div>
</>
    )
}
 export{Cart}