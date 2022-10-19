import {nanoid} from "nanoid"

function Showorder({data}){
return data.map((e)=>(
    <>
    <div className="theordercard" key={nanoid()}>
        <div className="address">
            <p>{e.address.name},</p>
            <p>{e.address.state},</p>
            <p>{e.address.dist},</p>
            <p>{e.address.areaPin},</p>
            <p>{e.address.landmark},</p>
            <p>Date- {e.date}</p>
        </div>
        <div className="pcards">
            
                {
                    e.orderArr.map((el)=>(
                      <>
                      <div className="shallcards" key={nanoid()}>
                      {/* <p>{el.catagory}</p> */}
                      <img src={el.productImage} alt="img" />
                      <p>Name- {el.productName}</p>
                      <p>Price- {el.productPrice}₹</p>
                      </div>
                      </>  
                    ))
                }
            {/* </div> */}
        </div>
    </div>
    </>
))

}

export{Showorder}