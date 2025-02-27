import {NavLink, Link} from "react-router-dom";
import {useState} from "react";

// import {useSelector} from "react-redux";
function Header(){
    // const {isAuthenticated} = useSelector(state=>state.auth);

    //dorpdown toggler
    const [show,setShow] = useState<boolean>(false);
    function toggleHandler(e:React.MouseEvent<HTMLDivElement, MouseEvent>):void{
        if(e?.target.tagName === "A"){
            setShow(!show);

        }
    }

    return(
        <>
            <header className="container-fluid ">
                <nav className="navbar navbar-dark fixed-top  px-3 rounded-bottom  bg-primary navbar-expand-md text-white shadow-sm">
                    <a className="navbar-brand text-warning">LOGO</a>
                    <button className="navbar-toggler bg-warning bordered-none" type="button" onClick={()=>setShow(!show)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div onClick={toggleHandler} className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav nav-underline mx-auto">
                            <li className="nav-item text-white">
                                <NavLink className="nav-link test text-white"  to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="/products">product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="blogs">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white  text-white" to="contactus">Contact</NavLink>
                            </li>
                        </ul>
                        <div>
                        {true ?(
                            <>
                                <Link to="/profile" className="text-white ">
                                    <i className="fa-solid fa-user me-3"></i>
                                </Link>
                                
                                <Link to="cart" className="text-white ">
                                    <i className="fa-solid fa-cart-shopping me-3 position-relative">
                                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </i>
                                </Link>
                            </>
                        )
                        : <NavLink className="btn btn-sm text-white btn-warning" to="/login">Login</NavLink>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header