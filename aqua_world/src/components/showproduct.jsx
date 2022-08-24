 function Showproduct({data}){

    return data.map((e)=>(
        <div className="card">
        <img src={e.image} alt="" />
        <h3>{e.name}</h3>
        <h3>Price-₹ {e.price}</h3>
        <button>add to cart</button>
        </div>
    ))

    
 }
 export{Showproduct}