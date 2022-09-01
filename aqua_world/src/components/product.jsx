
import {CatagoryContect} from "../context/catagorycontext"

import { useContext, useEffect, useState } from "react";
import{Showproduct} from "./showproduct";
import "./css/product.css"
function Product(){
    const {catagory} = useContext(CatagoryContect)
    
// const [va, setval]= useState()
const [productlist, setProductlist]= useState([]);


const getdata = async()=>{
    let data = await fetch(`https://backend-api-sss.herokuapp.com/aquap?pr_ca=${catagory}`)
    let res = await data.json();
    setProductlist([...res])
    console.log(res);
}
useEffect(()=>{
getdata();
},[])

return(
    <>
    <h1 className="catagoryofp">{catagory}</h1>
    <div  className="cards">
   
    <Showproduct data={productlist}/>
    </div>
    </>
)
}

export{Product}