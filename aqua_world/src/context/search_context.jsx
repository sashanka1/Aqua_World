import { useState,createContext} from "react";

export  const SearchContext = createContext();

const SearchContextProvider = ({children})=>{
    const [recomendData, Setrecombeddata] = useState([]);
    const setdata = (v)=>{
        Setrecombeddata([...v])
    }

    return <SearchContext.Provider value = {{recomendData,setdata}}>{children}</SearchContext.Provider>
    
}

export{SearchContextProvider}