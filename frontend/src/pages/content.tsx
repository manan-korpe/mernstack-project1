import product from "../assets/s1.png";
import {useState} from "react";

type contectForm= {
    fullname?:string,
    email?:string,
    comment?:string,
}
function Content(){
    const [contect,setContect] = useState<contectForm>({
        fullname:"",
        email:"",
        comment:""
    });
    const [error,setError] = useState<contectForm>({});
    const [isDisable, seIsDisable] = useState<boolean>(false);

    function setInput(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void{
        setContect({
            ...contect,
            [e.target.name]:e.target.value
        });
    }
    function SubmitForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        seIsDisable(true);

        let tempError ={};

        if(!(/^[a-zA-Z]{3,}$/).test(contect.fullname || "")){
            tempError = {...tempError,["fullname"]:"field is requied"}
        }
        
        if(!(/^[a-zA-Z0-9]{3,10}\@[a-z]{2,}\.(com|in)$/).test(contect.email || "")){
            
            tempError = {...tempError,["email"]:"Enter valid Email"}
        }
        if(!(/^[a-zA-Z]{3,}$/).test(contect.comment || "")){
            tempError = {...tempError,["comment"]:"field is requied"}
        }

        setError(tempError)
        console.log(error)
        seIsDisable(false);

    }
    return(
        <div className="container-md  px-4 fade-in-animation">
            <section className="row text-white justify-content-center align-items-center" style={{height:"85vh"}}>
                <div className="col-4 h-75 d-none d-md-block rounded">
                    <img src={product} className="w-100 h-100 object-fit-cover"></img>
                </div>
                
                <form onSubmit={SubmitForm} className=" col-8 col-md-6 bg-primary px-4 py-3 rounded ">
                <h3 className=" text-center mb-3">ContectUS</h3>
                    <div className="form-group mb-3">
                        <label className="form-label" htmlFor="fullname">Full Name</label>
                        <input onChange={setInput} type="text" className={error.fullname ? "is-invalid form-control" :"form-control"} name="fullname" value={contect.fullname}></input>
                        {error.fullname && (<span className="text-danger">{error.fullname}</span>)}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input onChange={setInput} type="text" className={error.fullname ? "is-invalid form-control" :"form-control"} name="email" value={contect.email}></input>
                        {error.email && (<span className="text-danger">{error.email}</span>)}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="comment">Comment your message</label>
                        <textarea onChange={setInput} className={error.fullname ? "is-invalid form-control" :"form-control"} name="comment" rows={4} style={{resize:"none"}} value={contect.comment}></textarea>
                        {error.comment && (<span className="text-danger">{error.comment}</span>)}
                    </div>
                    <button className="btn btn-warning mt-3 d-block mx-auto text-white w-50" disabled={isDisable}>{isDisable ? (<div className="spinner-border"><span className="sn-only"></span></div> ) : "Send Response"}</button>
                </form>
            </section>
            <section className=" my-5 row rounded text-white  text-center justify-content-center gap-1 ">
                <div className="col-md-4 row col-8 rounded bg-warning align-items-center">
                    <h4 className="col-2 py-4 col-md-12 py-md-1 ">@</h4>
                    <div className="col py-4  fw-bold ">manankorpe@gmail.com</div>
                </div>
                <div className="col-md-4 row col-8 bg-warning rounded align-items-center">
                    <h4 className="col-2 col-md-12 py-md-1 py-4" py-md-2>@</h4>
                    <div className="col py-4 fw-bold ">manankorpe@gmail.com</div>
                </div>
                <div className="col-md-4 row col-8 bg-warning rounded align-items-center">
                    <h4 className="col-2 py-4 col-md-12 py-md-1 ">@</h4>
                    <div className="col py-4 fw-bold">manankorpe@gmail.com</div>
                </div>
            </section>
        </div>
    )
}
export default Content;