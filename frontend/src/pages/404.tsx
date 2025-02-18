import {Link} from "react-router-dom"
function PageNotFound(){
    return(
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center bg-primary text-white border" style={{height:"100vh"}}>
                <div className="cart w-50 bg-warning rounded p-5 d-flex flex-column gap-3 text-center">
                    <h1 style={{fontSize:"7rem"}}>404</h1>
                    <h3>Oops! The page you're looking for doesn't exist.</h3>
                    <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
                </div>
            </div>
        </>
    )
}
export default PageNotFound;