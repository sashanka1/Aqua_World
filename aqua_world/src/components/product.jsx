
import {CatagoryContect} from "../context/catagorycontext"
import {Circles} from "react-loader-spinner"
import { useContext, useEffect, useState } from "react";
import{Showproduct} from "./showproduct";
import "./css/product.css"
import "./css/loder.css"
function Product(){
    const {catagory} = useContext(CatagoryContect)
    
// const [va, setval]= useState()
const [productlist, setProductlist]= useState([]);
const [loder,Setloder]= useState(true);


const getdata = async()=>{
    let data = await fetch(`https://backend-api-sss.herokuapp.com/aquap?pr_ca=${catagory}`)
    let res = await data.json();
    setProductlist([...res])
    //console.log(res);
    Setloder(false);
}
useEffect(()=>{
getdata();
},[])

return(
    <>
        
    
  
    <h1 className="catagoryofp">{catagory}</h1>
    <div  className="cards">
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
    </>
)
}

export{Product}