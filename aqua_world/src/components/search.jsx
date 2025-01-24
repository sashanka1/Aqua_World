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

        <div className=" bg-white font-bold text-black w-2/3 h-2/3 overflow-auto scroll-smooth no-scrollbar rounded-md" >
            {
                recomendData.length===0 ?
                <p>Not found</p>
                :
                recomendData.map((e)=>(
                    <p className=" cursor-pointer hover:bg-slate-400 text-lg border rounded-md border-gray-700 p-2 m-2" onClick={()=>{handleProductClick(e)}}  key = {nanoid()}>{e}</p>
                ))
            }
        </div>
    )
}

export{Serchbounce}