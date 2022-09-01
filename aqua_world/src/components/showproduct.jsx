 import {nanoid} from "nanoid";
 import {React, useContext} from "react"
 import {CartCountContext} from "../context/cart_count_context";
 function Showproduct({data}){
    const {updateCartCount} = useContext(CartCountContext);
    const {cartcount} = useContext(CartCountContext);
    const setcart= async(e)=>{
        console.log(e)
        var userdetalis = JSON.parse(localStorage.getItem("user"))|| []
        console.log("inside show product",userdetalis.user._id)
        await fetch("https://backend-api-sss.herokuapp.com/cartp", {
            method:"post",
            body:JSON.stringify({
                main_id:e._id,
                name:e.name,
                image:e.image,
                price:e.price,
                catagory:e.catagory,
                userId:userdetalis.user._id // adding  product to cart
    
            }),
            headers:{
                "content-Type":"application/json",
            },
            
        });
        updateCartCount(cartcount+1)
      }
//   catagory: "fish"
// image: "https://thumbs.dreamstime.com/b/neon-tetra-freshwater-aquarium-paracheirodon-innesi-142408408.jpg"
// name: "neon tetra"
// price: 40
// __v: 0
// _id: "62fbd9f179cc4f03c3eac39a"

    return data.map((e)=>(
        <div className="card" key={nanoid()}>
        <img src={e.image} alt="" />
        <h3>{e.name}</h3>
        <h3>Price-₹ {e.price}</h3>
        <button onClick={()=>{setcart(e)}}>add to cart</button>
        </div>
    ))

    
 }
 export{Showproduct}