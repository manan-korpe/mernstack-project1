import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect,lazy,Suspense} from "react";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import "./App.css";

//redux action 
import {useDispatch} from "react-redux";
import {logIn} from "./redux/user.tsx";
import {Auth} from "./apis/user.ts";
// import {useQuery} from "@tanstack/react-query";

//Pages
const HFOutlet = lazy(()=>import("./component/HF.Outlet.tsx"))

const Login = lazy(()=>import("./pages/login.tsx"));
const Register = lazy(()=>import("./pages/Register.tsx"));

const Authorization = lazy(()=>import( "./component/Authorization.tsx"));
const PageNotFound = lazy(()=>import("./pages/404.tsx"));  
const Home = lazy(()=>import("./pages/Home.tsx"));  
const Product = lazy(()=>import("./pages/Product.tsx")); 
const Cart = lazy(()=>import("./pages/Cart.tsx")) ;
const Content = lazy(()=>import("./pages/content.tsx"));  
const Blog = lazy(()=>import("./pages/Blog.tsx"))  ;
const ProductDetails = lazy(()=>import("./pages/productDetail.tsx")); 
const CheckOut = lazy(()=>import("./pages/CheckOut.tsx")) ; 

//Admin
import AdminHome from "./pages/admin/home.tsx"
// import List from "./component/ADMIN/List.tsx";
import UI from "./pages/testUI.tsx";
const ProfileMain = lazy(()=>import("./pages/Profile.tsx")) ;
const Profile = lazy(()=>import("./component/profile/profile.tsx")) ; 
const Order = lazy(()=>import("./component/profile/OrderHistory.tsx")) ; 
const Ratting = lazy(()=>import("./component/profile/ratting.tsx")) ; 
import { Helmet } from "react-helmet-async";

const queryClint = new QueryClient();

function App(){
  const dispatch = useDispatch();

  useEffect(()=>{
      (async()=>{
        const data =await Auth();
        dispatch(logIn(data))
      })()
      
  },[]);

  return(

    <BrowserRouter>
      <Helmet>
        <title>project1</title>
      </Helmet>
      <Suspense fallback={<Loader/>}>
        <QueryClientProvider client={queryClint}>
        <Routes>
          <Route path="/" element={<HFOutlet/>}>
            <Route index element={<Home/>} />
            <Route path="Product" element={<Product/>}/>
            <Route path="content" element={<Content/>}/>
            <Route path="blog" element={<Blog/>}></Route>
            <Route path="Product/:id" element={<ProductDetails/>}/>
            <Route element={<Authorization/>}>
              <Route path="checkout/:id" element={<CheckOut/>}/>
              <Route path="Cart" element={<Cart/>}/>

              <Route path="Profile" element={<ProfileMain/>}>
                <Route index element={<Profile/>}/>
                <Route path="order" element={<Order/>} />
                <Route path="ratting" element={<Ratting/>}/>
              </Route>

            </Route>  
          </Route>

          <Route path="/admin" element={<AdminHome/>}>
            {/* <Route index element={<List/>} /> */}
          </Route>

          <Route path="TESTUI" element={<UI/>}></Route>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  )
}

function Loader(){
  return (
    <>
      <div className="bg-secondary position-relative d-flex align-items-center justify-content-center" style={{width:"100vw",height:"100vh"}}>
      <div className="spinner-border text-primary">
              <span className="sn-only "></span>
      </div>
      </div>
    </>
  )
}
export default App;