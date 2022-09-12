import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Adress } from "./address";
// import "./css/signin.css";

function Addnewaddress(){
   
    const navigate = useNavigate();
   
      const [address, setAddress] = useState({
        name: "",
        state: "",
        dist: "",
        areaPin: "",
        landmark: "",
        mobileNo: "",
      });
      const handlechange = (e) => {
        
        setAddress({ ...address, [e.target.name]: e.target.value });
        
      
        
      };
      const submit = async() => {
         console.log(address);
         let userId = JSON.parse(localStorage.getItem("user"))
         let theid = userId.user._id
        //  console.log(theid)

          await fetch(`https://backend-api-sss.herokuapp.com/update_address?userId=${theid}`, {
          method:"PATCH",
          body:JSON.stringify({
            name: address.name,
            state: address.state,
            dist: address.dist,
            areaPin:address.areaPin,
            landmark:address.landmark,
            mobileNo:address.mobileNo,
  
          }),
          headers:{
              "content-Type":"application/json",
          },
          
      })
        
         
    
    
    
      };
      return (
        <div className="signinCont">
          <input
            type="text"
            name="name"
            value={address.name}
            placeholder="enter your name"
            required
            onChange={handlechange}
          />
         
          <input
            type="text"
            name="state"
            value={address.state}
            placeholder="state"
            required
            onChange={handlechange}
          />
          <input
            type="text"
            name="dist"
            value={address.dist}
            placeholder="dist"
            required
            onChange={handlechange}
          />
          <input
            type="text"
            name="areaPin"
            value={address.areaPin}
            placeholder="area pin code"
            required
            onChange={handlechange}
          />
          <input
            type="text"
            name="landmark"
            value={address.landmark}
            placeholder="landmark"
            required
            onChange={handlechange}
          />
          <input
            type="text"
            name="mobileNo"
            value={address.mobileNo}
            placeholder="mobile no"
            required
            onChange={handlechange}
          />
          <button onClick={submit}>add</button>
        </div>
      );
    
    

    
}
export { Addnewaddress };