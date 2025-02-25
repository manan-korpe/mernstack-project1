import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

function Profile() {
  return (
    <main className="container-fluid px-4">
      <section className="row g-3 justify-content-evenly">
        <div className="col-md-2 bg-primary  shadow-sm p-2 rounded">
          <div className="d-flex flex-column py-3">
            <Link
              to="/profile/"
              className="text-white p-2 p-md-3 rounded  mb-4 bg-warning"
            >
              Profile
            </Link>
            <Link
              to="/profile/order"
              className="text-white p-2 p-md-3 rounded  mb-4 bg-warning"
            >
              Orders
            </Link>
            <Link
              to=""
              className="text-white p-2 p-md-3 rounded  mb-4 bg-warning"
            >
              Liked
            </Link>
            <Link
              to="/profile/ratting"
              className="text-white p-2 p-md-3 rounded  mb-4 bg-warning"
            >
              Ratting
            </Link>
          </div>
        </div>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
}

export default Profile;
