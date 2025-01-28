import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {CartCountContext} from  "../context/cart_count_context"
import{Cartitm} from "./showCartitom"
import { IsuserContext } from "../context/isoth.context";
import {Circles} from "react-loader-spinner"
import "./css/cart.css"
function Cart(){
    // const isuser = verifylogdin();
    // if(isuser){
        
    // }
    const {verifylogdin} = useContext(IsuserContext);
    const navigatetopayment = useNavigate();
    const [loder,Setloder]= useState(true);
     const {updateCartCount} = useContext(CartCountContext);
    const[cartitm, Setcartitm] = useState([]);
    const [totalamount , setTotalamount] = useState();
        const{cartcount} = useContext(CartCountContext);
        const [shwocart,setShowcart] = useState(true)
    const cartdata = async()=>{
        console.log("the cartdata of the user");
        var userdetalis = JSON.parse(localStorage.getItem("user"))|| []
        
       if(verifylogdin()) {
        let data = await fetch(`https://backendserver-vgix.onrender.com/cartp?theuser=${userdetalis._id}`);
        let res = await data.json();
        console.log("the cartdata of the user" ,res);
        Setcartitm([...res]); // seting the cart products of the user in a state
        updateCartCount(res.length)
        if(res.length>0){
            setShowcart(false);
        }
        else{
            setShowcart(true);
        }
       }
        // let data = await fetch(`https://backend-api-sss.herokuapp.com/cartp?theuser=${userdetalis.user._id}`);
        // let res = await data.json();
        // console.log("the cartdata of the user" ,res);
        // Setcartitm([...res]);
        // updateCartCount(res.length)
        // if(res.length>0){
        //     setShowcart(false);
        // }
        // else{
        //     setShowcart(true);
        // }
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
        
        {
            
            shwocart ? 
            <>
            <img className="emptyCartimg" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png" alt="empty cart" />
            </>

            :
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
          
        }
        
      
</>

    )
}
 export{Cart}