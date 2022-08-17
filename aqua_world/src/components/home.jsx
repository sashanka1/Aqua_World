import "./css/home.css"
import {CatagoryContect} from "../context/catagorycontext"
import { useContext } from "react";

import { useNavigate } from "react-router-dom";




function Home(){
    // let navigate = useNavigate();
    // navigate("/product")
const {catagory} = useContext(CatagoryContect)
const {handlecatagory} = useContext(CatagoryContect)


// catagory,handlecatagory
   return(

       <>
       <div className="home">
<div className="catagory">
    <div onClick={()=>{handlecatagory("fish")}}> <img src="https://thumbs.dreamstime.com/b/goldfish-3621584.jpg" alt="fish" /></div>
    <div onClick={()=>{handlecatagory("plant")}}> <img src="https://media.istockphoto.com/photos/water-plants-picture-id176956989?k=20&m=176956989&s=612x612&w=0&h=269vYjYpxISojmxU6QaONY04qjUbKma1VF2DSnDtlh8=" alt="plant" /></div>
    <div onClick={()=>{handlecatagory("aquarium")}}> <img src="https://i.ebayimg.com/images/g/Vh0AAOSwYBRgriQe/s-l500.png" alt="aquarium" /></div>
    <div onClick={()=>{handlecatagory("accessories")}}> <img src="https://rukminim1.flixcart.com/image/612/612/kwxv98w0/aquarium-substrate/7/v/c/1-psp-sky-original-imag9gf4sfquzyjf.jpeg?q=70" alt="accessories" /></div>
    <div> <img src="https://i.ebayimg.com/images/g/Vh0AAOSwYBRgriQe/s-l500.png" alt="aquarium" /></div>
    <div> <img src="https://rukminim1.flixcart.com/image/612/612/kwxv98w0/aquarium-substrate/7/v/c/1-psp-sky-original-imag9gf4sfquzyjf.jpeg?q=70" alt="accessories" /></div>
    


</div>
        </div>      
       </>
   )
}
export{Home}