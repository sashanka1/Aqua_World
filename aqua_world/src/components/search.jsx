import { useContext, useState, useEffect } from "react";
import {SearchContext}  from "../context/search_context";
import {nanoid} from "nanoid"

function Serchbounce(){
    const {recomendData} = useContext(SearchContext)
//recomendData,setdata
    return(

        <div className="tabledata" style={{marginTop:"38px"}}>
            {
                recomendData.length===0 ?
                <p style={{color:"white",fontSize:"24px"}}>Not found</p>
                :
                recomendData.map((e)=>(
                    <p style={{color:"white",fontSize:"24px"}}>{e}</p>
                ))
            }
        </div>
    )
}

export{Serchbounce}