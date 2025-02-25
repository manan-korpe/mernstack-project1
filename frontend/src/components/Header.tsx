import {NavLink, Link} from "react-router-dom";
// import {useSelector} from "react-redux";
function Header(){
    // const {isAuthenticated} = useSelector(state=>state.auth);
    
    return(
        <>
            <header className="container">
                <nav className="navbar fixed-top m-3 px-3 rounded  bg-primary navbar-expand-md text-white">
                    <a className="navbar-brand text-warning">LOGO</a>
                    <button className="navbar-toggler bg-warning bordered-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item text-white">
                                <NavLink className="nav-link test text-white active"  to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="/products">product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="blogs">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white  text-white" to="content">Contect</NavLink>
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