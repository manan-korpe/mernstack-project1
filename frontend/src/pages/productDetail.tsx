import i2 from "../assets/s2.png"
import i3 from "../assets/s3.png";
import i1 from "../assets/s1.png";

import Comment from "../component/Comment.tsx";
import {useState} from "react";

function ProductDetails(){
    const [main,setMain] = useState<string>(`${i1}`);

    function ChangeIMG(src:any){
        setMain(src)
    }
    return (
        <main className="container-md">
            <section className="row gap-3 mb-3">
                <div className="col-12 col-md-6">
                    <div className="row py-2">
                        <div className="col-3 d-flex flex-column gap-2 align-items-center ">
                            <img src={i1}  onClick={()=>ChangeIMG(i1)} id="img1" className="w-100 rounded" loading="lazy"></img>
                            <img src={i2}  onClick={()=>ChangeIMG(i2)} id="img2" className="w-100 rounded" loading="lazy"></img>
                            <img src={i3}  onClick={()=>ChangeIMG(i3)} id="img3" className="w-100 rounded" loading="lazy"></img>
                        </div>
                        <div className="col-9">
                            {/* <div className=" w-100 rounded" style={{height:"300px"}}> */}
                            <img src={main} id="mainImg " className="w-100 h-100 object-fit-cover rounded" loading="lazy"></img>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 px-3 ">
                        <div className="">
                            <h4 className="text-wrap">metro full panel favorate ankle jeggigs</h4>
                            <div>
                                <h4 className="text-success">$20302 <small className=" text-decoration-line-through text-danger">$3939</small></h4>
                                <small className="text-warning">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <br/>
                                    <small className="text-muted">(1,23333) Reviews</small>
                                </small>
                            </div>
                        </div>
                        <div className="mt-4">
                            <form className="d-flex gap-3 align-items-end w-100">
                                <div className="form-group">
                                    <small><label htmlFor="qty" className="form-label">Qty</label></small>
                                    <select name="qty" className="form-select">
                                        <option value="1">1</option>
                                        <option value="1">1</option>
                                        <option value="1">1</option>
                                        <option value="1">1</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                                <button className="btn btn-warning text-white">ADD TO BAG</button>
                            </form>
                            <div className="mt-4 border border-primary  rounded p-3 ">
                                <h6 className=""><i className="fa-solid fa-truck"></i> Free delivary</h6>
                                <small>Arrives by Mon,Apr 26</small>
                            </div>
                        </div>
                </div>
            </section>
            <section className="mt-4 p-3">
                <div className=" bg-warning text-white rounded">
                    <h5 className="py-3 px-2">Comments</h5>
                </div>
                    <ul className="list-group" >
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </ul>
            </section>
        </main>
    )
}

export default ProductDetails