import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import ClickAwayListener from "react-click-away-listener";
import { useNavigate } from "react-router-dom";
import { CartCountContext } from "../context/cart_count_context";
import { IsuserContext } from "../context/isoth.context";
import {SearchContext} from "../context/search_context"
import { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {Serchbounce} from "./search"
function Navbar() {
  let navigate = useNavigate();
  const navigateToserch = useNavigate();
  const { cartcount } = useContext(CartCountContext);
  const { updateCartCount } = useContext(CartCountContext);
  const { islogedin } = useContext(IsuserContext);
  const { verifylogdin } = useContext(IsuserContext); 
  const {setdata}= useContext(SearchContext)
  const [popup, setPopup] = useState(false);
  const [previous, Setprevious] = useState(0)
  const [theProductNames,SetProductNames] = useState([]);
  const [serchValue,SetSerchValue] = useState("") // value of the serch field
  const [filterField,SetFilterField] = useState([])

  const productName = async()=>{ // function to get all product names
    let data = await fetch("https://backendserver-vgix.onrender.com/aquap").then((res)=>{
     
      return res.json();
    });
    //console.log(data)
    let PName = data.map((e)=>{
      return e.name;
    })
    SetProductNames([...PName]) // setting the name of all products in a state to use for debouncing
    // console.log(PName,"thepname")
    
  }


  const handlechange = (e)=>{
  
    SetSerchValue(e.target.value);
    // console.log(serchValue)

    let filteredData =  theProductNames.filter((elem)=>{ // filtering the data and setting the debouncing data
      if(elem.includes(e.target.value.toLowerCase())){
        return elem;
    }
    })
    SetFilterField([...filteredData]) // setting the filtered preduct names;
    //recomendData,setdata
    setdata(filterField) // calling the function of search context and passing the filtered data

    
  }


  const cartPCount = async () => {
    var res = verifylogdin();
    // console.log("islogedin",res)

    if (res === true) {
      //  console.log("inside count in nav")
      var userdetalis = JSON.parse(localStorage.getItem("user")) || [];
      let data = await fetch(
        `https://backendserver-vgix.onrender.com/cartp?theuser=${userdetalis.user._id}`
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
  //adding throutling to the serch button
  const throttle = (funofde,delay)=>{
    return(...args)=>{
      let currentTime = new Date().getTime();
      let def = currentTime-previous;
      console.log(def,delay);
      if(def>delay){
        Setprevious(currentTime);
        return funofde(...args)
      }
    }
  }
    const serch = throttle(()=>{
      console.log("button clicked",filterField)
    },3000)
  //end of serch function
  useEffect(() => {
    productName();
    cartPCount();
  }, []);
  

  return (
  
      <nav className="h-20 z-40  min-w-full bg-sky-500 flex justify-between items-center fixed">
     
          <div className=" pl-3 font-bold text-cyan-950 text-3xl">
            <Link to="/">Aqua World</Link>
          </div>
         

          <div className="w-2/4 hover:border-sky-800 border-4 p-0.5 rounded-md border-sky-950 flex justify-center ">
            <input className="w-full focus:bg-teal-700  text-white rounded-sm bg-black p-1" type="text" onClick={()=>{navigateToserch("/Serchbounce")}}  placeholder="search" name="serchValue" value={serchValue} onChange={handlechange}/>
            {/* <button onClick={()=>{serch()}}>search</button> */}
          </div>
           
          <div className="mr-3  flex justify-around w-1/6 ">
            <button className=" flex items-center font-bold"
              onClick={() => {
                {
                  showCartOrNot();
                }
              }}
            >
              <BsFillCartCheckFill />
             : {cartcount}
            </button>
            {/* <button><Link to="/login">login</Link></button>
       <button><Link to="/signin">signin</Link></button> */}
            <button onClick={() => setPopup(true)}>
              <AiFillSetting />
            </button>
            {/*rem */}
            {popup && (
              <ClickAwayListener onClickAway={() => setPopup(false)}>
                <div className="absolute bg-sky-400 rounded-md font-bold top-24 p-4 grid grid-cols-1 text-center text-sm mr-4 gap-4 ">
                  <ul className=" p-1 border rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:border-pink-600">
                    <Link className = "" to="/login">Login</Link>
                  </ul>
                  <ul className="p-1 border rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:border-pink-600">
                    <Link to="/signin">Signup</Link>
                  </ul>
                  <ul className="p-1 border rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:border-pink-600">
                    <Link to="/adress">Address</Link>
                  </ul>
                  <ul className="p-1 border rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:border-pink-600">Profile</ul>
                  <ul className="p-1 border rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:border-pink-600"><Link to="/Order">Orders</Link></ul>
                  <ul className=" p-1 border cursor-pointer rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-pink-600" onClick={()=>{logoutUser()}}>Logout</ul>
                </div>
              </ClickAwayListener>
            )}
            <Link to="/"></Link>
          </div>
       
    
      </nav>
 
  );
}
export { Navbar };
