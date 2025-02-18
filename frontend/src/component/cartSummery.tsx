import { Link } from "react-router-dom"
import {memo} from "react"
interface props{
    navto:string,
    name:string
}

function CardSummery({navto,name}:props){
    return(
        <>
        <div className=" cart-header my-2">
                    <h3 className="card-title">Summary</h3></div>
                    <div className="cart-body mt-4">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Subtotal</span>
                                <strong>$120202</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tex</span>
                                <strong>$102</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Shipping</span>
                                <strong>$102</strong>
                            </li>
                            <li className="list-group-item list-group-item-warning d-flex justify-content-between">
                                <span >Total</span>
                                <strong>$120002</strong>
                            </li>
                        </ul>
                    
                    </div>
                    <div className="cart-footer mt-4 w-100 text-center">
                    {navto!="" && (<Link to={navto}>
                            <button className="btn btn-lg btn-warning text-white  w-75">{name}</button>
                        </Link>)
                    }   
                    
        </div>
        </>
    )
}
export default memo(CardSummery) 