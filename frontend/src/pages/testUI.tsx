import {useState} from "react";

type starinfo = {
    count:number
    starValue:number,
    setStarVal:React.Dispatch<React.SetStateAction<number>>
}

function StarComponet({count,starValue,setStarVal}:starinfo){
    const [star,setStar] = useState<number>(0);
    function handleHover(point:number){
        setStarVal(point);
        setStar(point)
    }
    return(
        <>
            {[...Array.from({length:count})].map((_,i)=>(
                <i key={i} onClick={()=>setStarVal(i+1)} onMouseLeave={()=>setStar(0)}  onMouseEnter={()=>handleHover(i+1)} className={(star>=(i+1) || starValue>=(i+1)) ? "text-warning fa-solid fa-star" :"text-warning fa-regular fa-star"}></i>
            ))}
                
        </>
    )
}

function Footer(){
    return(
        <footer className="container-fluid bg-primary text-white p-5 rounded">
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
                <div className="mt-3">
                    <div className="text-warning">
                        <button className="btn btn-lg bg-white text-warning border border-warning border-2"><i className=" fa-solid fa-cart-arrow-down"></i></button>
                        <h1 className="d-inline ms-3">BUY NOW!</h1>
                    </div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;