import React from "react";
import "./css/nav.css"
import { Link } from "react-router-dom";
function Navbar(){



   return(

       <>
       <div className="navdiv" style={{height:"40px" , width : "99vw" ,}}>
        <div className="left_div">
         Aqua World
        </div>
        <div className="right_div">
        <button><Link to="/cart">cart:- 1</Link></button>
       <button><Link to="/login">login</Link></button>
       <button><Link to="/logout">logout</Link></button>

       <Link to="/"></Link>
        </div>
      
       </div>
       <div className="filter_by_reating">
       

           </div>       
       </>
   )
}
export{Navbar}