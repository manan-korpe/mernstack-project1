import { Link, Outlet } from "react-router-dom"
import Productcart from "../component/car.tsx";
import s1 from "../assets/s1.png";
import {StarRatedComponent} from "../component/star.tsx";

function Profile(){
    return(
        <main className="container-fluid px-4">
            <section className="row g-3 justify-content-evenly">
                <div className="col-md-2 bg-primary  shadow-sm p-2 rounded">
                    <div className="d-flex flex-column py-3">
                        <Link to="/profile/" className="text-white p-2 p-md-3 rounded  mb-4 bg-warning">Profile</Link>
                        <Link to="/profile/order" className="text-white p-2 p-md-3 rounded  mb-4 bg-warning">Orders</Link>
                        <Link to="" className="text-white p-2 p-md-3 rounded  mb-4 bg-warning">Liked</Link>
                        <Link to="/profile/ratting" className="text-white p-2 p-md-3 rounded  mb-4 bg-warning">Ratting</Link>
                    </div>
                </div>

                <Outlet/>

                {/* liked product */}
                {/* <div className="col-md-8 col-12 col-md-10 px-md-4 p-2">
                    <div className="row">
                    <Productcart/>
                    <Productcart/>
                    <Productcart/>
                    <Productcart/>
                    <Productcart/>
                    <Productcart/>
                    </div>
                </div> */}
                
            </section>
        </main>
    )
}

export default Profile