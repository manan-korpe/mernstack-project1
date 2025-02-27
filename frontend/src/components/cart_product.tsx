import product from "../assets/s1.png";
import { useState } from "react";

function cart_product() {
  const [qty, setQty] = useState<number>(1);

  return (
    <tr >
      <td>
        <div className="card mb-2 border-0 shadow-sm">
          <div className="row g-2 align-items-center justify-content-between">
            <div className="col-4 col-sm-2 col-lg-2 align-self-stretch">
              <img
                className="w-100 h-100 object-fit-cover  rounded-start"
                src={product}
              ></img>
            </div>
            <div className="col-8 col-sm-4 col-md-5">
              <div className="card-body text-capitalize">
                <h5>productName</h5>
                <div>$20000</div>
                <small>qty:- <strong>2</strong></small>
              </div>
            </div>
            <div className="col-12 col-sm-3 col-lg-5 ">
              <div className="row p-2 gap-4 gap-lg-4 justify-content-center align-items-center">
                <div className=" col col-lg-4 p-0 btn-group">
                  <button className="btn btn-primary">+</button>
                  <input className="form-control rounded-0"></input>
                  <button className="btn btn-primary">-</button>
                </div>
                <div className="col col-lg-5 text-center btn btn-danger">Remove</div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
export default cart_product;
