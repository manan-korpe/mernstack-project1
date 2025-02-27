import Loader from "../components/Loader.tsx";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import {useLocation} from "react-router-dom";

function Profile() {
  const location = useLocation();
  return (
    <main className="container-fluid ">
      <section>
          <ul className="nav nav-tabs nav-fill mb-2">
            <li className="nav-item  ">
              <Link className={`nav-link ${location.pathname == "/profile" ? "active" : ""}`}  to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname == "/profile/order" ? "active" : ""}`}   to="order">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname == "/profile/liked" ? "active" : ""}`}   to="liked">Liked</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname == "/profile/ratting" ? "active" : ""}`}   to="ratting">Rating</Link>
            </li>
          </ul>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default Profile;
