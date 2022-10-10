import { useState,createContext} from "react";
import { useNavigate } from "react-router-dom";
export const SerchThis = createContext()

const SerchThisContextProvider = ({children})=>{
    const navigateToProduct = useNavigate();
      const [thePName,SetPName] = useState("no")
      const PNameFuncion = (v)=>{
        SetPName(v)
        navigateToProduct("/product")
      }

      return(
        <SerchThis.Provider value = {{thePName,PNameFuncion}}>{children}</SerchThis.Provider>
      )
}

export {SerchThisContextProvider}