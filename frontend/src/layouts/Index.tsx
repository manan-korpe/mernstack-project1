import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Loader from "../components/Loader.tsx";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function MainOutlet() {
  return (
    <>
      <Header />
      <div className="w-100 mb-5 p-3"></div>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
export default MainOutlet;
