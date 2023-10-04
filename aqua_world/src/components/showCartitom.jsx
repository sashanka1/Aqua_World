 

 import {nanoid} from "nanoid"

 
 function Cartitm({data}){
   
    let {cartitm} = data
    const {cartdata} = data;
     const remove_item  = async(e)=>{
        await fetch(`https://backendserver-vgix.onrender.com/cartp/${e._id}`,{
            method:"DELETE",
            headers:{
                "content-Type":"application/json" //delete items from the cart
            },
        });
        cartdata();
     };
    return cartitm.map((e)=>(
        <div className="cartitm" key = {nanoid()}>
             <img src={e.image} alt="" />
        <h3>{e.name}</h3>
        <h3>Price-₹ {e.price}</h3>
        <button onClick={()=>{remove_item(e)}}>remove</button>  {/* show the all cart product to the  cart */}
        </div>
    ))
 }

 export{Cartitm};