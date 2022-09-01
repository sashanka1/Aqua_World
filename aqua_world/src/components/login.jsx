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
    const handleclick = async()=>{
        console.log(logindata)
        let resp = await fetch("https://backend-api-sss.herokuapp.com/login", {
        method:"post",
        body:JSON.stringify({
            email: logindata.email,
            password:logindata.password,
             // adding  product to cart

        }),
        headers:{
            "content-Type":"application/json",
        },
        
    }).then((res) => {
        return res.json();
        });
        console.log( "login_resp",resp)
        if(resp.user){
            alert("login success")
            localStorage.setItem("user",JSON.stringify(resp))
            window.location.reload()
        }


    }
    return(
        <div className="login">
            <input type="text" name = "email" value={logindata.email} placeholder="enter email" onChange={handlechange}/>
            <input type="password" placeholder="enter password" name = "password" value={logindata.password} onChange={handlechange} />
             <button  onClick={()=>{handleclick()}}>login</button>
        </div>
    )
}

export{Login}