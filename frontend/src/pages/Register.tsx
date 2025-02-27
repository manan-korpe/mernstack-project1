// import {useState} from "react";
import loginimg from "../assets/login.svg";
// import {RegisterUser} from "../apis/user.ts";
import nullvalidation from "../utils/validations/nullValidation.ts";
import {charValidation, emailValidation} from "../utils/validations/multiValidations";

import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
// import {useMutation} from "@tanstack/react-query";
import Toast from "../components/ToastMessage.tsx";

type userInfo ={
  first_name:string,
  last_name:string,
  email:string,
  password:string,
  confirmpassword:string,
}
type errorInfo ={
  first_name?:string,
  last_name?:string,
  email?:string,
  password?:string,
}

function Register() {
  const [toastShow,setToastShow] = useState<boolean>(false);
  const [toastError,setToastError] = useState<string>("");

//   const mutation = useMutation({
//     mutationFn:RegisterUser,
//     onSuccess:()=>{
//       navigate("/login");
//     },
//     onError:(err)=>{
//       setToastError(err.response?.data?.message)
//       setToastShow(true);
      
//       setTimeout(()=>{
//         setToastError("")
//         setToastShow(false);
//       },3000)
//     }
//   })

//   const navigate = useNavigate();
  const [isSubmit,setIsSubmit] = useState<boolean>(false);
  const [register,setRegister] = useState<userInfo>({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirmpassword:""
  });
  const [error,setError] = useState<errorInfo>({});


  //form value set to register object
  function setValues(e:React.ChangeEvent<HTMLInputElement>):void{
    const {name,value} = e.target;
    setRegister({
      ...register,
      [name]:value
    })
  }

  //form submittion with validation
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    
    e.preventDefault();
    setIsSubmit(true);  //button disable

    const userData:userInfo = register;
    let hasError:errorInfo; //temp error object

    //empty field validtion
    hasError = nullvalidation(userData);
    //rgex validtion check
    Object.assign(hasError,charValidation(["first_name",userData.first_name],"Enter valid name"));
    Object.assign(hasError,charValidation(["last_name",userData.last_name],"Enter valid last name"));
    Object.assign(hasError,emailValidation(["email",userData.email]));

    if(userData.password !== userData.confirmpassword){
      Object.assign(hasError,{password:"password is diffrent from confirm password"})
      
    }

    setError(hasError);
    //successful submit form
    if(Object.keys(hasError).length == 0){
    //   mutation.mutate({
    //     name:register.first_name,
    //     lastname:register.last_name,
    //     email:register.email,
    //     password:register.password
    //   })      
    alert("submited")
    }
    setIsSubmit(false);
    console.log("wokring",hasError)
  }
  
  return(
    <>
      <div className="container-fluid bg-primary d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
        <div className="row w-75 ">
          <img src={loginimg} className="img-fluid fade-ani-side-reverce col-md-6 d-none d-lg-block"></img>
          <form onSubmit={handleSubmit} className=" fade-ani-side shadow col-lg-5 ms-lg-5 bg-light rounded p-3 p-md-5" >
            <h2 className="text-primary mb-4 text-center">SignIn</h2>
            <div className="row g-1">
              <div className="form-floating mb-3 col-6">
                <input type="text" className={`form-control ${error.first_name && "is-invalid"}`} onChange={setValues} name="first_name" id="fname" placeholder="first name" value={register.first_name}/>
                <label htmlFor="lname">First Name</label>
                {error.first_name  && <small className="text-danger">{error.first_name}</small>}
              </div>
              <div className="form-floating mb-3 col-6 ">
                <input type="text" className={`form-control ${error.last_name && "is-invalid"}`}  onChange={setValues}name="last_name" id="lname" placeholder="last name" value={register.last_name} />
                <label htmlFor="floatingPassword">Last Name</label>
                {error.last_name  && <small className="text-danger">{error.last_name}</small>}
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className={`form-control ${error.email && "is-invalid"}`} onChange={setValues} name="email" id="email" placeholder="last name" value={register.email}/>
              <label htmlFor="email">Email</label>
              {error.email  && <small className="text-danger">{error.email}</small>}
            </div>
            <div className="form-floating mb-3">
              <input type="password" className={`form-control ${error.password && "is-invalid"}`} onChange={setValues} name="password" id="password" placeholder="password"  value={register.password}/>
              <label htmlFor="phone">Password</label>
              {error.password  && <small className="text-danger">{error.password}</small>}
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" onChange={setValues} name="confirmpassword" id="confirmpassword" placeholder="confirm password"  value={register.confirmpassword}/>
              <label htmlFor="phone">Confirm Password</label>
            </div>
            <div className="form-check my-3 mb-3 text-start">
              <input type="checkbox" className=" form-check-input  me-2" name="tandc" id="tandc"/>
              <label htmlFor="tandc" className="form-check-label">term and condition</label>
            </div>
            <Link to="/login" className=" link-underline link-underline-opacity-0  d-block text-end ">Login</Link>
            <button className="w-50 btn btn-primary mt-3 d-block mx-auto  " disabled={isSubmit}>{isSubmit ? (
              <div className="spinner-border">
                <span className="sn-only"></span>
              </div>
            ) : "Submit"}</button>
          </form>
        </div>
      </div>
      <Toast type={"danger"} show={toastShow} message={toastError}/>
    </>
  )
}

export default Register
