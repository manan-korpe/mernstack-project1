import Header from "./header.tsx";
import Footer from "./Footer.tsx";


import {Outlet} from "react-router-dom";

function HFOutlet(){
    return(
        <>
            <Header/>
            <div className="w-100 p-5"></div>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default HFOutlet;