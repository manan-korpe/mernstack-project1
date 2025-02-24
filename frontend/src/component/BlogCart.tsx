import dI from "../assets/s1.png";
import { Link } from "react-router-dom";
function BlogCart(){
    return(
        <div className="col-12 col-lg-4 mb-5 pb-5">
            <img src={dI} alt="ar1" className=" rounded w-100" loading="lazy"></img>
            <div className='position-relative'>
                <div className="card shadow position-absolute start-50 translate-middle" style={{width:"90%"}}>
                    <div className="card-body ">
                        <h5 className="card-title">Blog 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <Link to="/" className="card-link text-center">Read More <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  BlogCart;