import product from "../assets/s1.png";
import {useState} from "react";

function cart_product(){
    const [qty,setQty] = useState<number>(1);

    return (
        <div className="row align-items-center  gap-4 mb-4 shadow p-2">
            <img className="col-2 img-fluid rounded" src={product} alt="productIMAGE"  loading="lazy" style={{height:"5rem",width:"5rem"}}></img>
            <div className="col-7 d-flex align-items-center justify-content-between  flex-wrap ms-2">
                <div className="row align-items-center me-3">
                    <h5 className="col-12 col-md-6" style={{fontSize:"1.2rem"}}>Name</h5>
                    <h6 className="col-12 col-md-6">$202020</h6>
                </div>
                <div className="d-flex justify-content-between gap-3 ">
                    <button onClick={()=>setQty(qty-1>0 ? qty-1:1)} className="btn btn-warning" style={{height:"100%",width:"40px"}}>-</button>
                    <input type="number" className="form-control border-2 border-warning text-center" min="{1}" value={qty}style={{height:"100%",width:"50px"}}></input>
                    <button onClick={()=>setQty(qty+1)} className="btn btn-warning" style={{height:"100%",width:"40px"}}>+</button>
                </div>
            </div>
            
        </div>
    )
}
export default cart_product