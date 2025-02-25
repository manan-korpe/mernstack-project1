import CardSummery from "../components/cartSummery.tsx";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import nullvalidation from "../utils/validations/nullValidation.ts";
import {charValidation, telValidation, emailValidation} from "../utils/validations/multiValidations.ts";


type shipping={
    fname:string,
    lname:string,
    address:string,
    email:string,
    phone:string,
    payment:string
}

type err= Partial<shipping>

function CheckOut(){
    const navigate = useNavigate();
    const [show,setShow] = useState<boolean>(true);
    const [shippingData,setShippingData] = useState<shipping>({
        fname:"",
        lname:"",
        address:"",
        email:"",
        phone:"",
        payment:""
    })
    const [error,setError] = useState<err>({})
    
    function  setShippingDataCommun(e:React.ChangeEvent<HTMLInputElement>){
        setShippingData({...shippingData,[e.target.name]:e.target.value});
    };
     
    function shippingValidation(){
        
        const dataTemp = {...shippingData};
        delete dataTemp.payment;
        let hasError:err;

        hasError = nullvalidation(dataTemp);

        Object.assign(hasError,charValidation(["fname",dataTemp.fname],"Enter valid name"));
        Object.assign(hasError,charValidation(["lname",dataTemp.lname],"Enter valid last name"));
        Object.assign(hasError,telValidation(["phone",dataTemp.phone],"Enter valid phone number"));
        Object.assign(hasError,emailValidation(["email",dataTemp.email]));

        setError(hasError);

        console.log(error)
        if(Object.keys(hasError).length === 0){
            setShow(!show)
        }
    }

    function submitHandler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(shippingData.payment===""){
            setError({...error,"payment":"Select any one payment method"});
            return 0;
        }
        console.log("data good");
        navigate("/")
    }

    return(
        <main className="container">
            <section className="row px-2 align-items-start">
                <section className="col-12 col-lg-8 mb-4">
                    <form className={show ? "w-100 form row g-3": "w-100 d-none form row g-3" }>
                        <h3>Shipping address</h3>
                        <div className="form-floating col-6">
                            <input onChange={setShippingDataCommun} className={`form-control ${error.fname && "is-invalid"}`} type="text" name="fname" placeholder="first name" value={shippingData.fname}></input>
                            <label htmlFor="fname">Firast Name</label>
                            {error.fname  && <small className="text-danger">{error.fname}</small>}
                        </div>
                        <div className="form-floating col-6">
                            <input onChange={setShippingDataCommun} className={`form-control ${error.lname && "is-invalid"}`} type="text" name="lname" placeholder="last name" value={shippingData.lname}></input>
                            <label htmlFor="lname">Last Name</label>
                            {error.fname  && <small className="text-danger">{error.lname}</small>}
                        </div>
                        <div className="form-floating col-12">
                            <input onChange={setShippingDataCommun} className={`form-control ${error.address && "is-invalid"}`} type="text" name="address" placeholder="address" value={shippingData.address}></input>
                            <label htmlFor="address">Address</label>
                            {error.fname  && <small className="text-danger">{error.address}</small>}
                        </div>
                        <div className="form-floating col-12">
                            <input onChange={setShippingDataCommun} className={`form-control ${error.email && "is-invalid"}`} type="text" name="email" placeholder="email" value={shippingData.email}></input>
                            <label htmlFor="email">Email</label>
                            {error.fname  && <small className="text-danger">{error.email}</small>}
                        </div>
                        <div className="form-floating col-12">
                            <input onChange={setShippingDataCommun} className={`form-control ${error.phone && "is-invalid"}`} type="tel" name="phone" placeholder="phone" value={shippingData.phone}></input>
                            <label htmlFor="phone">Phone</label>
                            {error.fname  && <small className="text-danger">{error.phone}</small>}
                        </div>
                        <div className="col-12 mt-4">
                            <h3>Billing address</h3>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="bill"></input>
                                <label className="form-check-label" htmlFor="bill">Same as Shipping address</label>
                            </div>
                        </div>
                        <div onClick={shippingValidation} className="btn btn-lg  btn-warning col text-white">CONTINUE TO SHIPPING</div>
                    </form>
                    <form onSubmit={submitHandler} className={show ? "w-100 form d-none":"w-100 form"}>
                        <h3 className="mb-3">Payment</h3>
                        <ul className="list-group  mb-5 w-50">
                            <li className="form-check-inline list-group-item list-group-item-primary list-group-item-action py-3">
                                <input onChange={(e)=>setShippingData({...shippingData,["payment"]:e.target.value})}type="radio" className={error.payment ? "form-check-input is-invalid me-3" : "form-check-input me-3"} name="payment" id="cod" value="cod" checked={shippingData.payment === "cod"}></input>
                                <label className="form-check-label" htmlFor="cod">Cash On Delivery</label>
                            </li> 
                            <li className="form-check-inline list-group-item list-group-item-primary list-group-item-action py-3">
                                <input onChange={(e)=>setShippingData({...shippingData,["payment"]:e.target.value})}type="radio" className={error.payment ? "form-check-input is-invalid me-3" : "form-check-input me-3"} name="payment" id="debit" value="debit" checked={shippingData.payment === "debit"}></input>
                                <label className="form-check-label" htmlFor="debit">Debit Card</label>
                            </li>
                            <li className="form-check-inline list-group-item list-group-item-primary list-group-item-action py-3" >
                                <input onChange={(e)=>setShippingData({...shippingData,["payment"]:e.target.value})}type="radio" className={error.payment ? "form-check-input is-invalid me-3" : "form-check-input me-3"} name="payment" id="wallet" value="wallet" disabled checked={shippingData.payment === "wallet"}></input>
                                <label className="form-check-label" htmlFor="wallet">Wallet</label>
                            </li>
                        </ul>
                        <div className="mt-3">
                            <button type="button" className="btn btn-outline-danger  me-3"><i className="fa-solid fa-arrow-left me-2"></i>Back</button>
                            <button className="btn btn-warning text-white ">Order Now</button>
                        </div>
                        {error.payment  && <small className="text-danger">{error.payment}</small>}
                        </form>
                </section>
                <section className="col-12 col-lg-4 cart shadow bg-primary p-3 mb-4 text-white rounded">
                    <CardSummery navto="" name="PROCEED TO SHIPPING" />
                </section>
            </section>
        </main>
    )
}
export default CheckOut;