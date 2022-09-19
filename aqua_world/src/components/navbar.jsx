import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import ClickAwayListener from "react-click-away-listener";
import { useNavigate } from "react-router-dom";
import { CartCountContext } from "../context/cart_count_context";
import { IsuserContext } from "../context/isoth.context";
import { useContext, useState, useEffect } from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  const { cartcount } = useContext(CartCountContext);
  const { updateCartCount } = useContext(CartCountContext);
  const { islogedin } = useContext(IsuserContext);
  const { verifylogdin } = useContext(IsuserContext);
  const [popup, setPopup] = useState(false);
  const cartPCount = async () => {
    var res = verifylogdin();
    // console.log("islogedin",res)

    if (res === true) {
      //  console.log("inside count in nav")
      var userdetalis = JSON.parse(localStorage.getItem("user")) || [];
      let data = await fetch(
        `https://backend-api-sss.herokuapp.com/cartp?theuser=${userdetalis.user._id}`
      );
      let res = await data.json();
      //console.log(res);

      updateCartCount(res.length);
    }
  };

  const showCartOrNot = () => {
    const UserLogindinOrNOt = verifylogdin();
    if (UserLogindinOrNOt === true) {
      navigate("/cart");
    } else {
      alert("please logedin to continue");
    }
  };
  // logout the user from the application
  const logoutUser = ()=>{
    localStorage.removeItem("user")
    window.location.reload(true);
  }
  useEffect(() => {
    cartPCount();
  }, []);

  return (
    <>
      <nav>
        <div className="navdiv" style={{ height: "40px", width: "99vw" }}>
          <div className="left_div">
            <Link to="/">Aqua World</Link>
          </div>
          <div className="right_div">
            <button
              onClick={() => {
                {
                  showCartOrNot();
                }
              }}
            >
              <BsFillCartCheckFill />
              {cartcount}
            </button>
            {/* <button><Link to="/login">login</Link></button>
       <button><Link to="/signin">signin</Link></button> */}
            <button onClick={() => setPopup(true)}>
              <AiFillSetting />
            </button>
            {/*rem */}
            {popup && (
              <ClickAwayListener onClickAway={() => setPopup(false)}>
                <div className={"popup"}>
                  <ul>
                    <Link to="/login">Login</Link>
                  </ul>
                  <ul>
                    <Link to="/signin">Signin</Link>
                  </ul>
                  <ul>
                    <Link to="/adress">Address</Link>
                  </ul>
                  <ul>Profile</ul>
                  <ul>Orders</ul>
                  <ul onClick={()=>{logoutUser()}}>Logout</ul>
                </div>
              </ClickAwayListener>
            )}
            <Link to="/"></Link>
          </div>
        </div>
        <div className="filter_by_reating"></div>
      </nav>
    </>
  );
}
export { Navbar };
