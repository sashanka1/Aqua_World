
import {CatagoryContect} from "../context/catagorycontext"
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";






function Home(){
  
const {handlecatagory} = useContext(CatagoryContect)

const [imglist,Setimglist] = useState([
    "https://images.unsplash.com/photo-1579967327980-2a4117da0e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnRlZCUyMGFxdWFyaXVtfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.squarespace-cdn.com/content/v1/5a6b9222d7bdce6c9dab4541/1594481245206-EF9SN0YMJCEF1T5IBA2Z/2017+07+10+Fluval+Spec+V+%2815+of+17%29+2.jpg?format=1000w"
])
const [displayImage,setDisplayimage] = useState("https://images.unsplash.com/photo-1579967327980-2a4117da0e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnRlZCUyMGFxdWFyaXVtfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
const [imgIndex,setImgindex] = useState(0);
    
    

useEffect(()=>{
   
   let x = setInterval(() => {
   
      setImgindex((prevvalue)=>{
        if(prevvalue ===2){
           return 0;
        }
        else{
            // console.log(prevvalue,"the index")
                    setDisplayimage(imglist[prevvalue])
            return prevvalue+1
        }
      })
   }, 2000);

   return ()=>{
    clearInterval(x)
   }
},[])
   return(

       <>
       <div className="w-full">
        {/* <div className="fristimgs">
            <img src={displayImage}  alt ="img"/>
        </div> */}
<div className=" grid grid-cols-2 gap-7 w-4/6 max-w-screen-md mx-auto ">
    <div className=" p-1 rounded-md mt-2 border-2 h-48" onClick={()=>{handlecatagory("fish")}}> <img className="h-full w-full rounded-sm cursor-pointer border-2 hover:border-blue-600" src="https://thumbs.dreamstime.com/b/goldfish-3621584.jpg" alt="fish" /></div>
    <div className="  p-1 rounded-md mt-2  border-2 h-48" onClick={()=>{handlecatagory("plant")}}> <img className="h-full w-full rounded-sm cursor-pointer border-2 hover:border-blue-600" src="https://media.istockphoto.com/photos/water-plants-picture-id176956989?k=20&m=176956989&s=612x612&w=0&h=269vYjYpxISojmxU6QaONY04qjUbKma1VF2DSnDtlh8=" alt="plant" /></div>
    <div className="  p-1  rounded-md border-2 h-48" onClick={()=>{handlecatagory("fish")}}> <img className="h-full w-full rounded-sm cursor-pointer border-2 hover:border-blue-600" src="https://4.imimg.com/data4/AI/KC/MY-30251834/aquarium-fish-500x500.jpg" alt="fish" /></div>
    {/* <div onClick={()=>{handlecatagory("aquarium")}}> <img src="https://i.ebayimg.com/images/g/Vh0AAOSwYBRgriQe/s-l500.png" alt="aquarium" /></div> */}
    <div className="  p-1 rounded-md  border-2 h-48" onClick={()=>{handlecatagory("accessories")}}> <img className="h-full w-full rounded-sm cursor-pointer border-2 hover:border-blue-600" src="https://rukminim1.flixcart.com/image/612/612/kwxv98w0/aquarium-substrate/7/v/c/1-psp-sky-original-imag9gf4sfquzyjf.jpeg?q=70" alt="accessories" /></div>
    {/* <div> <img onClick={()=>{handlecatagory("aquarium")}} src="https://i.ebayimg.com/images/g/Vh0AAOSwYBRgriQe/s-l500.png" alt="aquarium" /></div> */}
    <div className="   p-1 rounded-md border-2 h-48 mb-2" onClick={()=>{handlecatagory("plant")}}> <img className="h-full w-full rounded-sm cursor-pointer border-2 hover:border-blue-600" src="https://tropica.com/media/2562031/det-rigtige-akvarium-forside-1000px.jpg" alt="plant" /></div>
    <div className="   p-1 rounded-md border-2 h-48 mb-2"> <img className="h-full w-full rounded-sm cursor-pointer border-2 hover:border-blue-600" onClick={()=>{handlecatagory("accessories")}} src="https://m.media-amazon.com/images/I/81UNNm5x8nL._AC_UF894,1000_QL80_.jpg" alt="accessories" /></div>
    


</div>
        </div>      
       </>
   )
}
export{Home}