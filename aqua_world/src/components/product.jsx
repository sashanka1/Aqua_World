import { useState } from "react";
import {CatagoryContect} from "../context/catagorycontext"
import { useContext } from "react";
function Product(){
    const {catagory} = useContext(CatagoryContect)
// const [va, setval]= useState()


return(
    <>
    <h1>{catagory}val</h1>
    </>
)
}

export{Product}