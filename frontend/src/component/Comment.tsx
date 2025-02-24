import i1 from "../assets/s2.png"


function Comment(){
    return(
        <li className="list-group-item">
            <div className="row g-0 align-items-center">
                <div className="col-2" style={{width:"3rem",height:"3rem"}}>
                    <img src={i1} className="w-100 h-100 object-fit-cover rounded-circle col-2" loading="lazy"></img>
                </div>
            
                <div className=" offset-1 col-9">
                    <strong>MANAN KORPE</strong><br/>
                    <small className="text-warning">
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i> (5.0)
                    </small>
                    <p className="mt-2">metro full panel favorate ankle jeggigs
                    metro full panel favorate ankle jeggigs
                    metro full panel favorate ankle jeggigs
                    </p>
                </div>
            </div>
        </li>
    )
}
export default Comment;