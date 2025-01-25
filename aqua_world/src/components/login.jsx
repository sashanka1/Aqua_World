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
     
          
      
        <div className="grid grid-cols-1 gap-4 w-2/5 min-w-80 border-2 p-6 rounded-md shadow-lg shadow-lime-500">
            <input className="p-2 focus:border-blue-600 hover:bg-blue-300 rounded-md border-4 border-blue-600 placeholder:text-blue-600 font-bold" type="text" name = "email" value={logindata.email} placeholder="Email" onChange={handlechange}/>
            <input className="p-2 hover:bg-blue-300 rounded-md border-4 border-blue-600   placeholder:text-blue-600 font-bold" type="password" placeholder="Password" name = "password" value={logindata.password} onChange={handlechange} />
             <button className="p-2 mt-4 hover:bg-blue-700 shadow-lg shadow-green-600 border w-3/5 mx-auto rounded-md font-bold bg-blue-800 text-white" onClick={()=>{handleclick()}}>SignIn</button>
        </div>
       
    )
}

export{Login}