 import {nanoid} from "nanoid";
 import { IsuserContext } from "../context/isoth.context";
 import {React, useContext} from "react"
 import {CartCountContext} from "../context/cart_count_context";
 function Showproduct({data}){
    const {verifylogdin} = useContext(IsuserContext)
    const {updateCartCount} = useContext(CartCountContext);
    const {cartcount} = useContext(CartCountContext);
    const setcart= async(e)=>{
        const checkuser = verifylogdin();
        if(checkuser){ // checking the user is logind in or not
            // console.log(e) the data in form of object of the clicked product
        var userdetalis = JSON.parse(localStorage.getItem("user"))|| []
        // console.log("inside show product",userdetalis.user._id)
        await fetch("https://backendserver-vgix.onrender.com/cartp", {
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
        } else{
            alert("Please loged in to continue")
        }
        
      }
//   catagory: "fish"
// image: "https://thumbs.dreamstime.com/b/neon-tetra-freshwater-aquarium-paracheirodon-innesi-142408408.jpg"
// name: "neon tetra"
// price: 40
// __v: 0
// _id: "62fbd9f179cc4f03c3eac39a"

    return data.map((e)=>(
        <div className="hover:border-yellow-600 border h-28 grid grid-cols-12 rounded-md" key={nanoid()}>
         <div className="h-28 col-span-5">
        <img className ="p-1 rounded-lg h-28 w-full" src={e.image} alt="" />
        </div>
        <div className="col-span-7 flex flex-col items-center justify-center font-bold ">
        <h3>{e.name}</h3>
        <h3>Price-₹ {e.price}</h3>
        <button className=" hover:bg-blue-600 border p-1 m-1 rounded-md bg-blue-800 text-white" onClick={()=>{setcart(e)}}>add to cart</button>
        </div>
        </div>
    ))

    
 }
 export{Showproduct}