import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import CheckOut from "../pages/Checkout.tsx";
import ProductDetails from "../pages/ProductDetails.tsx";
import Register from "../pages/Register.tsx";
import Loader from "../components/Loader.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";
import ContactUs from "../pages/ContactUs.tsx";

//layout
const MainLayout = lazy(()=>import("../layouts/Index.tsx"))
const ProfileLayout = lazy(()=>import("../layouts/Profile.tsx"));

//pages
const Login = lazy(()=>import("../pages/Login.tsx"));
const Home = lazy(()=>import("../pages/Home.js")) ;
const ProductList = lazy(()=>import("../pages/productList.tsx"));
const BlogList = lazy(()=>import("../pages/BlogList.tsx")) ;
const Cart = lazy(()=>import("../pages/Cart.tsx"));

//profile
const Profile =lazy(()=>import("../pages/profile/Profile.tsx"));
const OrderHistory = lazy(()=>import("../pages/profile/OrderHistory.tsx"));
const Ratting = lazy(()=>import("../pages/profile/Ratting.tsx"));

function MainRoute() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="contactus" element={<ContactUs/>}/> 
          <Route path="Profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="order" element={<OrderHistory />} />
            <Route path="ratting" element={<Ratting />} />
          </Route>

          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout/1" element={<CheckOut/>}/>
          <Route path="product/1" element={<ProductDetails/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Suspense>
  );
}

export default MainRoute;
