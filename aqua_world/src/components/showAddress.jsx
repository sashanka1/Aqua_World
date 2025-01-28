import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import "./css/address.css";
function Showaddress({ data }) {
  let { adress } = data;
  let { getadress } = data;
  const navigateToPage = useNavigate();

  const deleteaddress = async (e) => {
    // remove an address;
    //console.log(e);
    let user = JSON.parse(localStorage.getItem("user")) || [];

    let addressId = JSON.parse(localStorage.getItem("id"));
    if (addressId === undefined || addressId === null) {
      addressId = e._id;
    }
    let theUserId = user._id;
    // console.log("the address id of the user",addressId)
    await fetch(
      `https://backendserver-vgix.onrender.com/deleteaddress?idofuser=${theUserId}&addressId=${addressId}`,
      {
        method: "DELETE",
        headers: {
          "content-Type": "application/json", //remove an address of an user
        },
      }
    );
    getadress();
  };

  const editaddress = (e) => {
    // seting the address obj in local storage to access in the addaddress page to edit that;

    let addressToEdit = e;
    localStorage.setItem("address", JSON.stringify(addressToEdit));
    localStorage.setItem("id", JSON.stringify(e._id));
    deleteaddress();
    navigateToPage("/Modifyaddress");
  };
  return adress.map((e) => (
    <div className="address_card" key={nanoid()}>
      <table>
        <tbody>
          <tr className="trow">
            <td>Name:{e.name}</td>
            <td>MobileNo:{e.mobileNo}</td>
            <td>State:{e.state}</td>
            <td>Dist:{e.dist}</td>
            <td>Landmark:{e.landmark}</td>
            <td>area Pin:{e.areaPin}</td>
            <td>
              <button
                onClick={() => {
                  editaddress(e);
                }}
              >
                edit
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  deleteaddress(e);
                }}
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
}

export { Showaddress };
