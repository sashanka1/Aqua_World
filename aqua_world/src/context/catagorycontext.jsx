import { useState } from "react";
import { createContext } from "react";
// import { useNavigate } from "react-router-dom";
export const CatagoryContect = createContext();

const CatagoryContextProvider = ({children})=>{
    // let navigate = useNavigate();
    const [catagory, setCatagory] = useState()
    const handlecatagory = (v)=>{
    setCatagory(v)

//  navigate("/product")
    }
    return <CatagoryContect.Provider value={{catagory,handlecatagory}}></CatagoryContect.Provider>
}

export{CatagoryContextProvider}