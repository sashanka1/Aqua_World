
 import './App.css';
import {Routes , Route} from "react-router-dom";
import {Navbar} from "./components/navbar"
import {Home} from "./components/home"
import {Product} from "./components/product"
import {Cart} from "./components/cart"
import {Login} from "./components/login"
import {Signin} from "./components/signin";
import{Payment} from "./components/payment";
import{Thanks} from "./components/conform";
import{Adress} from "./components/address";
import{Addnewaddress} from "./components/addnewAddress"
import{Serchbounce} from "./components/search"
import {Footer} from "./components/footer"
import {Order} from "./components/orders"
 
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path= {"/login"} element= {<Login/>}></Route>
      <Route path= {"/signin"} element= {<Signin/>}></Route>
      {/* <Route path = {"/product/:id"} element = {<Product/>}></Route> */}
      <Route path = "/" element= {<Home/>}></Route>
      <Route path = {"/product"} element = {<Product/>}></Route>
      <Route path = {"/cart"} element = {<Cart/>}></Route>
      <Route path = {"/cart/payment"} element = {<Payment/>}></Route>
      <Route path = {"/cart/payment/conform"} element = {<Thanks/>}></Route>
      <Route path = {"/adress"} element = {<Adress/>}></Route>
      <Route path = {"/Modifyaddress"} element = {<Addnewaddress/>}></Route>
      <Route path = {"/Serchbounce"} element = {<Serchbounce/>}></Route>
      <Route path = {"/Order"} element = {<Order/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
