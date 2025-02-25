import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import CheckOut from "../pages/Checkout.tsx";
import ProductDetails from "../pages/ProductDetails.tsx";

//layout
const MainLayout = lazy(()=>import("../layouts/Index.tsx"))
const ProfileLayout = lazy(()=>import("../layouts/Profile.tsx"));

//pages
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
    <Suspense fallback={"loading...."}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="blogs" element={<BlogList />} />

          <Route path="Profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="order" element={<OrderHistory />} />
            <Route path="ratting" element={<Ratting />} />
          </Route>
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout/1" element={<CheckOut/>}/>
          <Route path="product/1" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default MainRoute;
