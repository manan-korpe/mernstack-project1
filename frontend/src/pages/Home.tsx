// import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
// import s3 from "../assets/s3.png";
import "../assets/home.css";
import ProductCard from "../components/car.tsx";

function Home() {
  return (
    <>
      <main className="px-3">
        <section className="container w-100">
          <div className="row g-2">
            <div className="col-md-8 col-12">
              <div className="row g-2 ">
                <div className="col-6 rounded ani1 ">
                  <div
                    className="rounded  position-relative"
                    style={{
                      height: "15rem",
                      backgroundImage: `url(${s2})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="w-100 h-100 position-absolute rounded top-0 left-0"
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    ></div>
                    <div
                      className="text-white position-absolute "
                      style={{ bottom: "10%", left: "10%" }}
                    >
                      <small className="text-capitalize">men's only</small>
                      <h4 className="text-uppercase mb-3">Collection</h4>
                      <button className="btn btn-outline-warning ">Show</button>
                    </div>
                  </div>
                </div>
                <div className="col-6 ani1">
                  <div
                    className="rounded position-relative"
                    style={{
                      height: "15rem",
                      backgroundImage: `url(${s2})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="w-100 h-100 position-absolute rounded top-0 left-0"
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    ></div>
                    <div
                      className="text-white position-absolute "
                      style={{ bottom: "10%", left: "10%" }}
                    >
                      <small className="text-capitalize">men's only</small>
                      <h4 className="text-uppercase mb-3">Collection</h4>
                      <button className="btn btn-outline-warning ">Show</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 ani1">
                  <div
                    className="rounded position-relative"
                    style={{
                      height: "15rem",
                      backgroundImage: `url(${s2})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="w-100 h-100 position-absolute rounded top-0 left-0"
                      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    ></div>
                    <div
                      className="text-white position-absolute "
                      style={{ bottom: "10%", left: "10%" }}
                    >
                      <small className="text-capitalize">men's only</small>
                      <h4 className="text-uppercase mb-3">Collection</h4>
                      <button className="btn btn-outline-warning ">Show</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 ani1">
              <div
                className="rounded position-relative"
                style={{
                  height: "30rem",
                  backgroundImage: `url(${s2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="w-100 h-100 position-absolute rounded top-0 left-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
                <div
                  className="text-white position-absolute "
                  style={{ bottom: "10%", left: "10%" }}
                >
                  <small className="text-capitalize">men's only</small>
                  <h4 className="text-uppercase mb-3">Collection</h4>
                  <button className="btn btn-outline-warning ">Show</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-5">
          <h3 className="py-2 mb-3 text-center">New Products</h3>
          <div className="row justify-content-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <section className="container">
          <h3 className="py-2 mb-3 text-center">News</h3>
          <div className="row g-2">
            <div className="col-md-6 col-12 ani1">
              <div
                className="rounded  position-relative"
                style={{
                  height: "20rem",
                  backgroundImage: `url(${s2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="w-100 h-100 position-absolute rounded top-0 left-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
                <div
                  className="text-white position-absolute "
                  style={{ bottom: "10%", left: "10%" }}
                >
                  <small className="text-capitalize">globle</small>
                  <h4 className="text-uppercase mb-3">News</h4>
                  <button className="btn btn-outline-warning ">View</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 ani1">
              <div
                className="rounded  position-relative"
                style={{
                  height: "20rem",
                  backgroundImage: `url(${s2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="w-100 h-100 position-absolute rounded top-0 left-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                ></div>
                <div
                  className="text-white position-absolute "
                  style={{ bottom: "10%", left: "10%" }}
                >
                  <small className="text-capitalize">men's only</small>
                  <h4 className="text-uppercase mb-3">News</h4>
                  <button className="btn btn-outline-warning ">View</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" container my-5 text-center bg-primary pt-4 pb-2 rounded text-white">
          <h4>Top Categories</h4>
          <p className="d-flex gap-4 justify-content-center my-4 py-2">
            <div>
              <div
                className="align-items-center d-flex justify-content-center bg-warning rounded-circle"
                style={{ width: "3rem", height: "3rem" }}
              >
                <i
                  className="fa-solid fa-tv"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>
              <small>Telivision</small>
            </div>
            <div>
              <div
                className="align-items-center d-flex justify-content-center bg-warning rounded-circle"
                style={{ width: "3rem", height: "3rem" }}
              >
                <i
                  className="fa-solid fa-laptop"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>
              <small>Laptop</small>
            </div>
            <div>
              <div
                className="align-items-center d-flex justify-content-center bg-warning rounded-circle"
                style={{ width: "3rem", height: "3rem" }}
              >
                <i
                  className="fa-solid fa-gamepad"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>
              <small>Games</small>
            </div>
            <div>
              <div
                className="align-items-center d-flex justify-content-center bg-warning rounded-circle"
                style={{ width: "3rem", height: "3rem" }}
              >
                <i
                  className="fa-solid fa-shirt"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>
              <small>Clothes</small>
            </div>
          </p>
          <button
            type="button"
            className="btn btn-outline-warning text-white mt-2"
          >
            VIEW ALL
          </button>
        </section>
      </main>
    </>
  );
}

export default Home;
