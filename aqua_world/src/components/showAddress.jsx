import {nanoid} from "nanoid"
import "./css/address.css"
function Showaddress ({data}){
    
return data.map((e)=>(


    <div className="address_card" key ={nanoid()}>

    <table>
        <tbody>
<tr className="trow">

    <td>Name:{e.name}</td>
    <td>MobileNo:{e.mobileNo}</td>
    <td>State:{e.state}</td>
    <td>Dist:{e.dist}</td>
    <td>Landmark:{e.landmark}</td>
    <td>area Pin:{e.areaPin}</td>
    <td><button>edit</button></td>
    <td><button>delete</button></td>
</tr>
</tbody>
    </table>
    </div>
))


}

export{Showaddress}