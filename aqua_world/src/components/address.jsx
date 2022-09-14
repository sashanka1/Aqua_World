import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { IsuserContext } from "../context/isoth.context";
import { Showaddress } from "./showAddress";
import { useNavigate } from "react-router-dom";

function Adress() {
  const navigate = useNavigate();
  const { islogedin } = useContext(IsuserContext);
  const [adress, setAdress] = useState([]);
  const getadress = async () => {
    if (islogedin === true) {
      let user = JSON.parse(localStorage.getItem("user")) || [];

      let theUserId = user.user._id;
      // let allAdress = data.user.adresses;
      // console.log("user adress",allAdress)
      // setAdress([...allAdress])
      // console.log("the user in the adress page", theUserId)

      // let data = await fetch(`https://backend-api-sss.herokuapp.com/userdata/${theUserId}`);
      let data = await fetch(
        `https://backend-api-sss.herokuapp.com/userdata/${theUserId}`
      );
      let res = await data.json();
      // console.log(res,"the all address")
      let allAdress = res[0].adresses;

      setAdress([...allAdress]);
    }
  };

  const navigateToAddAddressPage = () => {
    // navigate function to navigate to the add address page
    localStorage.removeItem("address");
    localStorage.removeItem("id");
    navigate("/Modifyaddress");
  };
  useEffect(() => {
    getadress();
  }, [islogedin]);
  return (
    <>
      <div className="adresscont">
        Address
        <Showaddress data={{ adress, getadress }} />
      </div>

      <button
        className="addNewaddress"
        onClick={() => {
          navigateToAddAddressPage();
        }}
      >
        add newAddress
      </button>
    </>
  );
}

export { Adress };
