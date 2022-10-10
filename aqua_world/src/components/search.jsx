import { useContext, useState, useEffect } from "react";
import {SearchContext}  from "../context/search_context";
import { useNavigate } from "react-router-dom";
import {SerchThis} from "../context/search_this_product.context"
import {nanoid} from "nanoid"

function Serchbounce(){
    const navigateToProductPage = useNavigate();
   
    const {recomendData} = useContext(SearchContext)
    const {PNameFuncion} = useContext(SerchThis);
    const handleProductClick = (e)=>{
            PNameFuncion(e);
    }
//recomendData,setdata
    return(

        <div className="tabledata" style={{marginTop:"38px"}}>
            {
                recomendData.length===0 ?
                <p style={{color:"white",fontSize:"24px"}}>Not found</p>
                :
                recomendData.map((e)=>(
                    <p onClick={()=>{handleProductClick(e)}} style={{color:"white",fontSize:"24px",cursor: "pointer"}} key = {nanoid()}>{e}</p>
                ))
            }
        </div>
    )
}

export{Serchbounce}