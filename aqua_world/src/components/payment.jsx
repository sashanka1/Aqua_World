import "./css/payment.css"
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IsuserContext } from "../context/isoth.context";

function Payment(){
    const {verifylogdin} = useContext(IsuserContext)
    const[getcard,setcard]=useState({
        card_no:"",                      // sate for the payment form
        card_name:"",
        card_expiry:"",
        card_CVV:"",
    })
  
        const navigarttootp =useNavigate(); 
    const Handleclick=async ()=>{ // trigger the function when user click on the checkout button
        console.log(getcard)
         
        if(getcard.card_no && getcard.card_name && getcard.card_expiry && getcard.card_CVV && getcard.card_no .length===16 && getcard.card_CVV.length===3 && isNaN(getcard.card_no)===false ){
            //navigate
            let verify = verifylogdin(); //chacking the user is loged in or not.

            if(verify){ // if return true the it will exicute inside code
                // url for product collection -http://localhost:5400/order

                // call the user and get the address 
                // take the user id 
                // call the cart rout with the user id to get all cart itom of that user and create a desired objest 
                // call the order rout and call a post requrst with user id ,address ,created order array
                // remove the itoms of the user from the user cart
                var userdetalis = JSON.parse(localStorage.getItem("user")) || [];
                let theuserId = userdetalis.user._id; // the id of the logedin user;
                  //get the address of the user
                        let user = await fetch(`https://backendserver-vgix.onrender.com/userdata/${theuserId}`).then((res)=>{
                            return res.json();
                        })
                     
                       
                            let UserOrderAddress = // creating a address object for the order;
                                {"name":user[0].adresses[0].name,"state":user[0].adresses[0].state,
                                    "dist":user[0].adresses[0].dist,
                                    "areaPin":user[0].adresses[0].areaPin,
                                    "landmark":user[0].adresses[0].landmark,
                                    "mobileNo":user[0].adresses[0].mobileNO}
                            
                        
                        // end
                        // get all cart items of the user ;
                        let cartdata = await fetch(`https://backendserver-vgix.onrender.com/cartp?theuser=${userdetalis._id}`);
                        let res = await cartdata.json();
                        
                        let filtereddata = res.map((e)=>{ // using map on cartdata to make array of object with specific data for order

                            let temp = {
                                catagory:e.catagory,
                                productImage:e.image,
                                productName:e.name,
                                productPrice:e.price
                            };
                              
                            return temp;
                        })
                       

                console.log(verify)
                            
                //setUserCartItomInUserOrder 
                postTheData(theuserId,UserOrderAddress,filtereddata) // calling the post order function with arguments;
               // console.log(theuserId,userAddress,productArr,"the post details")

              
                
               let respBack =  await fetch(`https://backendserver-vgix.onrender.com/cartp?all=${userdetalis.user._id}`,{
                    method:"DELETE",
                    headers:{
                        "content-Type":"application/json" // clearing the user cart;
                    },
                });
                 let respMassage = await respBack.json();
                //console.log(respMassage,"respMessage")
                alert(`${respMassage.message}`)

            }
            else{
                alert("logedin to continue")
            }

           
            navigarttootp("/cart/payment/conform")

            console.log("navigare to next")
        }
        else{
            alert("Invalid Details")
        }
    }
    
    const postTheData = async(theuserId,UserOrderAddress,filtereddata)=>{ // function to post the order;
        
        await fetch(`https://backendserver-vgix.onrender.com/order`,{
            method:"POST",
            body:JSON.stringify({
                theUserId:theuserId,
                date:new Date(),
                address:UserOrderAddress,
                orderArr:filtereddata,
                    
                
            }),
            headers:{
                "content-Type":"application/json"
            }
            
        }).then((res)=>console.log(res.json()))
    }

    const handleInput = (e) => {
       

        setcard({ ...getcard, [e.target.name]: e.target.value }); // form input handling on change in from input
        // console.log(getcard);
      };
    return(
        <div className="paymentcont">


      
         
{/*     
         <div className="middle_box">
            <span> <strong> Payment </strong> </span> 
            <strong><span className="pay">  pay </span></strong> 
        </div> */}

        <div className="forspaceinuppayment"></div>
        <div className="lower_box" >
            <div className="lower_box_left">
                <div className="active">&nbsp; DEBIT/CREDIT CARD </div>
                <hr />
                <div className="inactive"> WALLET </div>
                <hr />
                <div className="inactive"> UPI </div>
                <hr />
                <div className="inactive"> NET BANKING </div>
                <hr />
                <div className="inactive"> CASH ON DELIVERY </div>
                <p>Use online payment for safety and to avail <br /> attractive cashback offers.</p>
                <hr />
           </div>


            <div>
                <div className="lower_right_box">
                <div>
                   
                        <img width={"20px"} src="https://images.bewakoof.com/web/Add-card-icon-1600332484.png" alt="" />
                 
                    <span   style= {{marginLeft:"13px", fontSize:"12px", textAlign:"center", position:"relative"}}>Add New Card</span>
                </div>

                <div>
                    <div className="card_num">
                        <input type="number " value={getcard.card_no} autocomplete="new-password" name="card_no" onChange={handleInput} placeholder="XXXX XXXX XXXX XXXX"/>
                         <img style={{width: "24px", height: "17px"}} src="https://images.bewakoof.com/web/credit-card-1600689323.png" alt=""/>
                    </div>
                    
                    <div className="card_name">
                        <input type="text" value={getcard.card_name} name="card_name" onChange={handleInput} placeholder="Name On Card"/>
                    </div>

                    <div className="card_expiry_cvv">
                        <input type="date" value={getcard.card_expiry} name="card_expiry" onChange={handleInput} placeholder="Expiry(MM/YY)"/>
                        <input style={{marginLeft: "10px"}}type="password" value={getcard.card_CVV} onChange={handleInput} name="card_CVV" placeholder="CVV"/>
                    </div>

                    <div className="card_check_box">
                        <input type="checkbox" name="card_check"/>
                        <label for="card_check"> <strong> Securely save this card for faster payments. </strong> </label>
                    </div>
                </div>

                <div className="text" style={{fontSize: "10px", textAlign: "justify", opacity: "0.7", marginTop: "8px", marginBottom: "25px",letterSpacing: "0.7px"}}>
                    This transaction you make is totally secure. We don't save <br/> your CVV number.
                </div>

                <div>
                     < button className="payment" onClick={Handleclick} >PAY NOW</button>
                </div>


            </div>
        
        </div>

        </div>
    


        </div>

    
    )
}




export{Payment};