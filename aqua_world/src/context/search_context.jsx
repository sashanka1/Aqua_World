import { useState,createContext} from "react";

export  const searchContext = createContext();

const SearchContextProvider = ({children})=>{
    const [recomendData, Setrecombeddata] = useState([]);
    const setdata = (v)=>{
        Setrecombeddata([...v])
    }

    return <searchContext.Provider value = {{recomendData,setdata}}>{children}</searchContext.Provider>
    
}

export{SearchContextProvider}