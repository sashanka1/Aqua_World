import { createContext, useState  } from "react";

export const IsuserContext = createContext();

const  IsuserContextProvider = ({children})=>{
const [islogedin , setLogdin] = useState(false)

const verifylogdin = ()=>{

var user = JSON.parse(localStorage.getItem("user"))|| [];
console.log("user in nav", user)
if(user.length===0){
    setLogdin(false);
}
else{
    setLogdin(true);
    return true
}

}
return(
    <IsuserContext.Provider value={{islogedin, verifylogdin}}>{children}</IsuserContext.Provider>
)
}


export{IsuserContextProvider}