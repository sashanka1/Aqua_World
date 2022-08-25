import "./css/login.css"
import { useState } from "react"

function Login(){
    const [logindata, setLogindata]  = useState({
        email:"",
        password : ""
    })
    const handlechange = (e)=>{
        setLogindata({...logindata,[e.target.name]:e.target.value })
    }
    const handleclick = ()=>{
        console.log(logindata)
    }
    return(
        <div className="login">
            <input type="text" name = "email" value={logindata.email} placeholder="enter email" onChange={handlechange}/>
            <input type="text" placeholder="enter password" name = "password" value={logindata.password} onChange={handlechange} />
             <button  onClick={()=>{handleclick()}}>login</button>
        </div>
    )
}

export{Login}