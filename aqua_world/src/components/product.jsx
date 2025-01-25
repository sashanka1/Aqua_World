
import {CatagoryContect} from "../context/catagorycontext"
import { SerchThis } from "../context/search_this_product.context";
import {Circles} from "react-loader-spinner"
import { useContext, useEffect, useState } from "react";
import{Showproduct} from "./showproduct";

import "./css/loder.css"
function Product(){
    const {catagory} = useContext(CatagoryContect);
    const {thePName} = useContext(SerchThis);
    
// const [va, setval]= useState()
const [productlist, setProductlist]= useState([]);
const [loder,Setloder]= useState(true);


const getdata = async()=>{
     //`http://localhost:5400/aquap?pName=${thePName}`
     //`https://backend-api-sss.herokuapp.com/aquap?pName=${thePName}`
    let data = await fetch( thePName!=="no" && thePName !== undefined ?
    `https://backendserver-vgix.onrender.com/aquap?pName=${thePName}`
     : `https://backendserver-vgix.onrender.com/aquap?pr_ca=${catagory}`)
    let res = await data.json();
    setProductlist([...res])
    //console.log(res);
    Setloder(false);
}
useEffect(()=>{
getdata();
},[])

return(
    <span className="  w-full flex flex-col items-center justify-center">
        
    
  
    <h1 className=" shadow-2xl m-4 font-bold text-2xl w-2/12 rounded-sm p-1 text-center bg-gradient-to-r from-green-800 to-green-200">{catagory}</h1>
    <div  className=" w-80 h-full grid grid-cols-1 gap-6">
        {
            loder ? 

            <Circles
            height="80"
            width="80"
            color="#136f64"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="position"
            visible={true}
          />

          :

          <Showproduct data={productlist}/>
        }
   
    
    </div>
    </span>
)
}

export{Product}