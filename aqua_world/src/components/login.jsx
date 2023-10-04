import "./css/login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";



function Login(){
    const navigateToHome = useNavigate();
    
    const [logindata, setLogindata]  = useState({
        email:"",
        password : ""
    })
    const handlechange = (e)=>{
        setLogindata({...logindata,[e.target.name]:e.target.value })
    }
    const handleclick = async()=>{
        //console.log(logindata)
        let resp = await fetch("https://backendserver-vgix.onrender.com/login", { 
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
        //console.log( "login_resp",resp)
        if(resp.user){
            alert("login success")
            localStorage.setItem("user",JSON.stringify(resp))
            // window.location.reload()
            navigateToHome("/")
        }
        else{
            console.log(resp,"response")
            alert("Invalid details")
        }


    }
    return(
        <div className="logincontner">
            <img src="https://t4.ftcdn.net/jpg/01/22/71/95/360_F_122719584_A863mvJEcEAnqmGQ4ky6RbXEhsHKw95x.jpg" alt="" />
      
        <div className="login">
            <input type="text" name = "email" value={logindata.email} placeholder="enter email" onChange={handlechange}/>
            <input type="password" placeholder="enter password" name = "password" value={logindata.password} onChange={handlechange} />
             <button  onClick={()=>{handleclick()}}>login</button>
        </div>
        </div>
    )
}

export{Login}