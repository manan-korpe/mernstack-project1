import {useState} from "react"
import product from "../assets/sproduct.png";
import {StarRatedComponent} from "../component/star.tsx";

function Cart(){
    const [ratting,setRatting] = useState<number>(4.5);
    return(
        <div className="col col-5 col-lg-4 mb-4 ">
            <div className="cart shadow p-2 rounded">
                <img className="card-img-top rounded" src={product} loading="lazy"></img>
                <div className="card-body mt-3">
                    <h4 className="card-title">Product</h4>
                    <p className="card-text">
                    <small className="text-warning"> 
                        <StarRatedComponent count={5} starValue={ratting}/>
                    </small>
                    </p>
                    <a className=" btn btn-sm btn-primary">Show</a>
                </div>

            </div>
        </div>
        
    )
}
export default Cart