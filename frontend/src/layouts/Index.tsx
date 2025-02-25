import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function MainOutlet() {
  return (
    <>
      <Header />
      <div className="w-100 p-5"></div>
      <Suspense fallback="loading..">
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
export default MainOutlet;
