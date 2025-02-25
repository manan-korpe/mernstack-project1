function Footer(){
    return(
        <footer className="container-fluid bg-primary text-white mt-4 p-3 p-md-5 pb-md-1 pb-1 rounded">
            <div className="row g-3 gap-3 px-4">
                <h5 className="text-warning">Find Your Pages ..</h5>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className=" col-4  col-md-3  d-flex flex-column gap-1">
                            <small>Tv</small>
                            <small>AC</small>
                            <small>Phone</small>
                        </div>
                        <div className=" col-4  col-md-3 d-flex flex-column gap-1">
                            <small>Products</small>
                            <small>News</small>
                            <small>AboutUs</small>
                        </div>
                        <div className=" col-4 col-md-3  d-flex flex-column gap-1">
                            <small>Contact Us</small>
                            <small>Orders</small>
                            <small>Profile</small>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 offset-md-2">
                    <h5><small>Buy your Products</small></h5>
                    <h1 className="text-warning" style={{fontSize:"3rem"}}>Let's Explor</h1>
                </div>
            </div>
            <hr className="" style={{border:"2px dashed white"}} />
            <div className="mt-2 p-4">
                <div className="d-flex gap-4">
                    <small>Cookies Policy</small>
                    <small>Legal Terms</small>
                    <small>Privacy Policy</small>
                </div>
                <div className="row mt-3 align-items-center gap-3 ">
                    <div className=" col-12 col-md-6 text-warning">
                        <button className="btn btn-lg bg-white text-warning border border-warning border-2"><i className=" fa-solid fa-cart-arrow-down"></i></button>
                        <h1 className="d-inline ms-3">BUY NOW!</h1>
                    </div>
                    <div className="col-12 col-md-3 offset-md-2">
                        <h6><small>Social Media</small></h6>
                     <i className=" p-2 bg-warning rounded ms-1 fa-brands fa-facebook"></i>
                     <i className=" p-2 bg-warning rounded ms-1 fa-brands fa-instagram"></i>
                     <i className=" p-2 bg-warning rounded ms-1 fa-brands fa-twitter"></i>
                     <i className=" p-2 bg-warning rounded ms-1 fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <h5 className="text-center"><small>All rights reserved &copy; CopyRight</small></h5>
        </footer>
    )
}
export default Footer;