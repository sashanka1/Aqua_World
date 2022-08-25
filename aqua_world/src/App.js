
// import './App.css';
import {Routes , Route} from "react-router-dom";
import {Navbar} from "./components/navbar"
import {Home} from "./components/home"
import {Product} from "./components/product"
import {Cart} from "./components/cart"
import {Login} from "./components/login"

function App() {
  return (
    <div className="App">
      <Navbar/>
     

      <Routes>
      <Route path= {"/login"} element= {<Login/>}></Route>
      {/* <Route path = {"/product/:id"} element = {<Product/>}></Route> */}
      <Route path = "/" element= {<Home/>}></Route>
      <Route path = {"/product"} element = {<Product/>}></Route>
      <Route path = {"/cart"} element = {<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
