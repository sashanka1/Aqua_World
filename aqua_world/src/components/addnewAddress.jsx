import { useState } from "react";
import { useNavigate } from "react-router-dom";
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