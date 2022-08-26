import { useState } from "react";
import "./css/signin.css";

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
  const handlechange = (e) => {
    setFromdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const submit = async() => {
    // console.log(formdata);

     let resp = await fetch("http://localhost:5400/register", {
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



  };
  return (
    <div className="signinCont">
      <input
        type="text"
        name="username"
        value={formdata.username}
        placeholder="enter your name"
        onChange={handlechange}
      />
      <input
        type="email"
        name="email"
        value={formdata.email}
        placeholder="enter your email"
        onChange={handlechange}
      />
      <input
        type="password"
        name="password"
        value={formdata.password}
        placeholder="enter password"
        onChange={handlechange}
      />
      <input
        type="password"
        name="conform_password"
        value={formdata.conform_password}
        placeholder="conform password"
        onChange={handlechange}
      />
      <input
        type="text"
        name="state"
        value={formdata.state}
        placeholder="state"
        onChange={handlechange}
      />
      <input
        type="text"
        name="dist"
        value={formdata.dist}
        placeholder="dist"
        onChange={handlechange}
      />
      <input
        type="text"
        name="areaPin"
        value={formdata.areaPin}
        placeholder="area pin code"
        onChange={handlechange}
      />
      <input
        type="text"
        name="landmark"
        value={formdata.landmark}
        placeholder="landmark"
        onChange={handlechange}
      />
      <input
        type="text"
        name="mobileNo"
        value={formdata.mobileNo}
        placeholder="mobile no"
        onChange={handlechange}
      />
      <button onClick={submit}>singin</button>
    </div>
  );
}

export { Signin };
