import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Adress } from "./address";
// import "./css/signin.css";

function Addnewaddress() {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    state: "",
    dist: "",
    areaPin: "",
    landmark: "",
    mobileNo: "",
  });
  const [editad, Seteditad] = useState(true);
  let addressToModify = JSON.parse(localStorage.getItem("address")) || false;
  if (addressToModify !== false && editad === true) {
    address.name = addressToModify.name;
    address.state = addressToModify.state;
    address.dist = addressToModify.dist;
    address.areaPin = addressToModify.areaPin;
    address.landmark = addressToModify.landmark;
    address.mobileNo = addressToModify.mobileNo;
    Seteditad(false);
  }
  const handlechange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const submit = async () => {
    // console.log(address);
    let userId = JSON.parse(localStorage.getItem("user"));
    let theid = userId.user._id;
    //  console.log(theid)
    if (
      address.name.length > 2 &&
      address.state.length > 2 &&
      address.dist.length > 2 &&
      address.areaPin.length === 6 &&
      address.mobileNo.length === 10 &&
      address.landmark.length > 10
    ) {
      await fetch(
        `https://backendserver-vgix.onrender.com/update_address?userId=${theid}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name: address.name,
            state: address.state,
            dist: address.dist,
            areaPin: address.areaPin,
            landmark: address.landmark,
            mobileNo: address.mobileNo,
          }),
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      Notification.requestPermission().then((PermissionStatus) => {
        if (PermissionStatus === "granted") {
          //console.log("done")
          const notification = new Notification("address created successful", {
            body: "your address is created successfully",
            tag: "congrats",
          });
        } else {
          alert("please give permission for notification ");
        }
      });
      navigate("/adress");
    } else {
      alert("invalid details");
    }
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
