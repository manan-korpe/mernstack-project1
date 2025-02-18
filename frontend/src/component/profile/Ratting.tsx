import {StarRatedComponent} from "../star.tsx";
import s1 from "../../assets/s1.png";

export default function Ratting(){
    return (
        <div className="col-md-8 col-12 col-md-10 px-md-4 p-2">
                    <h3>Rated Products</h3>
                    <div className="mt-4 p-4 shadow rounded">
                        <div className="row ">
                                    <div className="col-3" style={{height:"5rem",width:"5rem"}}>
                                        <img src={s1} className=" w-100  h-100 rounded object-fit-cover"  loading="lazy"></img>
                                    </div>
                                    <div className="col-4 ">
                                        product Name<br/>
                                        <a className="btn btn-sm text-white btn-warning mt-2 ">VIEW PRODUCT</a>
                                    </div>
                                    <div className="col-5 text-end">
                                        <small>Order ID</small>
                                        <h6>9228828282eueueuudhdhdhdhh</h6>
                                    </div>
                        </div>
                        <hr/>
                        <div className="mt-4">
                                    <div style={{fontSize:".9rem"}}>
                                        <small>Rated Date: 20/24/2023<span className="ms-3">Update Date: 20/24/2023</span></small>
                                    </div>
                                    <StarRatedComponent count={5} starValue={2}/>
                                    <textarea className="form-control mt-1" rows={3} name="comment" id="comment" style={{resize:"none"}}>
                                    Other top reasons users visit the order history page includes: 35% wants to initiate a order return, 32% wants to simply review the order history itself, 20% o
                                    Other top reasons users visit the order history page includes: 35% wants to initiate a order return, 32% wants to simply review the order history itself, 20% o
                                    Other top reasons users visit the order history page includes: 35% wants to initiate a order return, 32% wants to simply review the order history itself, 20% o
                                    
                                    </textarea> 
                                    <a className="text-end d-block mt-3 text-success"><i className="fa-solid fa-pen-to-square"></i></a>                                      
                        </div>
                    </div>
                    <div className="mt-4 p-4 shadow rounded ">
                        <div className="row ">
                                    <div className="col-3" style={{height:"5rem",width:"5rem"}}>
                                        <img src={s1} className=" w-100  h-100 rounded object-fit-cover"  loading="lazy"></img>
                                    </div>
                                    <div className="col-4 ">
                                        product Name<br/>
                                        <a className="btn btn-sm text-white btn-warning mt-2 ">VIEW PRODUCT</a>
                                    </div>
                                    <div className="col-5 text-end">
                                        <small>Order ID</small>
                                        <h6>9228828282eueueuudhdhdhdhh</h6>
                                    </div>
                        </div>
                        <hr/>
                        <div className="mt-4">
                                    <div style={{fontSize:".9rem"}}>
                                        <small>Rated Date: 20/24/2023<span className="ms-3">Update Date: 20/24/2023</span></small>
                                    </div>
                                    <StarRatedComponent count={5} starValue={2}/>
                                    <textarea className="form-control mt-1" rows={3} name="comment" id="comment" style={{resize:"none"}}>
                                    Other top reasons users visit the order history page includes: 35% wants to initiate a order return, 32% wants to simply review the order history itself, 20% o
                                    Other top reasons users visit the order history page includes: 35% wants to initiate a order return, 32% wants to simply review the order history itself, 20% o
                                    Other top reasons users visit the order history page includes: 35% wants to initiate a order return, 32% wants to simply review the order history itself, 20% o
                                    
                                    </textarea> 
                                    <a className="text-end d-block mt-3 text-success"><i className="fa-solid fa-pen-to-square"></i></a>                                      
                        </div>
                    </div>   
        </div>
    )
}