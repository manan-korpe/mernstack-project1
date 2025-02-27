import loginimg from "../assets/login.svg";
// import {LoginUser} from "../apis/user.ts";
// import {logIn} from "../redux/user.tsx";
// import {getCart} from "../redux/cart.tsx";

import {useState} from "react";
// import {useDispatch} from "react-redux";
// import {useMutation} from "@tanstack/react-query";
import {useNavigate, Link} from "react-router-dom";
import Toast from "../components/ToastMessage.tsx";

type loginInfo = {
    email?:string,
    password?:string
}

const Login:React.FC = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    //toast error message
    const [toastShow,setToastShow] = useState<boolean>(false);
    const [toastError,setToastError] = useState<string>("");

    // const mutation = useMutation({
    //   mutationFn:LoginUser,
    //   onSuccess:(data)=>{
    //     console.log(data)
    //     dispatch(logIn(data));
    //     dispatch(getCart(data))
    //     navigate("/");
    //   },
    //   onError:(err)=>{
    //     console.log(err)
    //     setToastError(err.response?.data?.message || "plase try again");
    //     setToastShow(true);
    //     setTimeout(()=>{
    //       setToastError("");
    //       setToastShow(false);
    //     },3000)
    //   }
    // })
    const [login,setLogin] = useState<loginInfo>({
        email:"",
        password:""
    })
    const [error,setError] = useState<loginInfo>({});

    const [isSubmit,setIsSubmit] = useState<boolean>(false);
    const [show,setShow] = useState<boolean>(false);    //password show or hide

     //form value set to register object
  function setValues(e:React.ChangeEvent<HTMLInputElement>):void{
    console.log("wokring");
    setLogin({
        ...login,
        [e.target.name]:e.target.value
    })
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setIsSubmit(true); 
    let hasError:loginInfo={}; //temp error object

    function checkNull(value:string):boolean{
        value = value.trim();
        if(value == ""){
          return true;
        }
          return false;
      } 

    for(let [key,value] of Object.entries(login)){
      if(checkNull(value)){
        hasError = {...hasError,[key]:"field is requied"}
      }
    }

    if(!(/^[a-zA-Z0-9]{3,50}\@[a-z]{2,}\.(com|in)$/).test(login.email as string) && !hasError.email){
        hasError = {...hasError,"email":"Enter valid email"}
      }
    setError(hasError);
    
    if(Object.keys(hasError).length == 0){
    //   mutation.mutate({
    //     email:login.email,
    //     password:login.password
    //   });
    alert("wokring");
      setError({});
      }

    setIsSubmit(false);
  }
    return (
        <>
        <div className=" container-fluid bg-primary d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
        <div className="row w-75 align-items-center ">
          <img src={loginimg} className="img-fluid col-md-6 d-none d-lg-block fade-ani-side-reverce"></img>
          <form onSubmit={handleSubmit} className="shadow col-lg-5 ms-lg-5 bg-light rounded p-3 p-md-5 fade-ani-side" >
          <h2 className="text-primary mb-4 text-center">Login</h2>
          <div className="form-floating mb-3 col ">
            <input type="text" className={`form-control ${error.email && "is-invalid"}`} onChange={setValues} name="email" id="email" placeholder="email" value={login.email}/>
            <label htmlFor="lname">Email</label>
            {error.email  && <small className="text-danger">{error.email}</small>}
            
          </div>
          <div className="form-floating mb-3">
            <input type={show ? "text" : "password"} className={`form-control ${error.password && "is-invalid"}`}  onChange={setValues}name="password" id="password" placeholder="password" value={login.password} />
            <label htmlFor="floatingPassword"> Password</label>
            <div className="position-absolute top-50 end-0 me-3 translate-middle-y text-primary">
                {show ?
                    (<i className="fa-solid fa-eye-slash" onClick={()=>setShow(!show)}></i>):
                    (<i className="fa-solid fa-eye " onClick={()=>setShow(!show)}></i>)
                }
            
            </div>
            {error.password  && <small className="text-danger">{error.password}</small>}
          </div>
          <Link to="/register" className=" link-underline link-underline-opacity-0  d-block text-end ">Register</Link>
          <button className="w-50 btn btn-primary mt-3 d-block mx-auto  " disabled={isSubmit}>{isSubmit ? (
            <div className="spinner-border">
              <span className="sn-only"></span>
            </div>
          ) : "Login"}</button>
          
          </form>
        </div>
      </div>
          <Toast type={"danger"} show={toastShow} message={toastError}/>
        </>
    )
}

export default Login