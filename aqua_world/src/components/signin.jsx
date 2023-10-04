import { useState } from "react";
import "./css/signin.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [formdata, setFromdata] = useState({
    username: "",
    email: "",
    password: "",
    conform_password: "",
    state: "",
    dist: "",
    areaPin: "",
    landmark: "",
    mobileNo: "",
  });
  const navigateToTheLogin = useNavigate();
  const handlechange = (e) => {
    
      setFromdata({ ...formdata, [e.target.name]: e.target.value });
    
  
    
  };
  const submit = async() => {
    // console.log(formdata);
    if(formdata.username.length >0 && formdata.email.includes("@") && formdata.password.length>3 && formdata.conform_password===formdata.password &&
    formdata.state.length>0 && formdata.areaPin>=6 && formdata.landmark.length>10 && formdata.mobileNo.length>=10){
      
      let resp = await fetch("https://backendserver-vgix.onrender.com/register", {
        method:"post",
        body:JSON.stringify({
            username: formdata.username,
            email: formdata.email,
            password: formdata.password,
            adresses:[
                {
                    name:formdata.username,
                    state:formdata.state,
                    dist: formdata.dist,
                    areaPin: formdata.areaPin,
                    landmark: formdata.landmark,
                    mobileNo: formdata.mobileNo,
                },
            ]
             // adding  product to cart

        }),
        headers:{
            "content-Type":"application/json",
        },
        
    }).then((res) => {
        return res.json();
        });
        console.log( "resp",resp)
        
          if(resp.token){
            alert("register successful")
            navigateToTheLogin("/login")
          }
    }
    else{
      alert("invalid details")
    }

     



  };
  return (
    <div className="signinCont">
      <input
        type="text"
        name="username"
        value={formdata.username}
        placeholder="enter your name"
        required
        onChange={handlechange}
      />
      <input
        type="email"
        name="email"
        value={formdata.email}
        placeholder="enter your email"
        required
        onChange={handlechange}
      />
      <input
        type="password"
        name="password"
        value={formdata.password}
        placeholder="enter password"
        required
        onChange={handlechange}
      />
      <input
        type="password"
        name="conform_password"
        value={formdata.conform_password}
        placeholder="conform password"
        required
        onChange={handlechange}
      />
      <input
        type="text"
        name="state"
        value={formdata.state}
        placeholder="state"
        required
        onChange={handlechange}
      />
      <input
        type="text"
        name="dist"
        value={formdata.dist}
        placeholder="dist"
        required
        onChange={handlechange}
      />
      <input
        type="text"
        name="areaPin"
        value={formdata.areaPin}
        placeholder="area pin code"
        required
        onChange={handlechange}
      />
      <input
        type="text"
        name="landmark"
        value={formdata.landmark}
        placeholder="landmark"
        required
        onChange={handlechange}
      />
      <input
        type="text"
        name="mobileNo"
        value={formdata.mobileNo}
        placeholder="mobile no"
        required
        onChange={handlechange}
      />
      <button onClick={submit}>singin</button>
    </div>
  );
}

export { Signin };
