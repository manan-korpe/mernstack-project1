import s1 from "../../assets/s1.png";

// import {useSelector} from "react-redux";

export default function Profile() {
  // const {user,address} = useSelector(state=>state.auth);
  return (
    <div className="p-2">
      <div className="row g-1 gap-3 align-items-start justify-content-evenly">
        <div className="col-12 col-md-6">
          <div className="card">
            <img src={s1} className="card-img-top"></img>
            <div className="card-body py-4">
              <a className="btn w-100 text-end text-success">
                <i className="  fa-solid fa-pen-to-square"></i>
              </a>
              <div className="mb-4">
                <label className="form-label" htmlFor="fname">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={"user.name"}
                  readOnly
                />
              </div>
              <div>
                <label className="form-label" htmlFor="lname">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={"user.lastname"}
                  readOnly
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="  btn btn-danger text-white">Log Out</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 bg-warning p-3  rounded text-white">
          <h4 className="position-relative">
            Contact Details
            <a className="btn position-absolute end-0 text-end text-success">
              <i className="  fa-solid fa-pen-to-square"></i>
            </a>
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-white bg-warning py-3">
              <label className="form-label fw-bold">Phone Number</label>
              <input
                type="text"
                className="form-control-plaintext text-muted"
                value=""
              ></input>
            </li>
            <li className="list-group-item text-white bg-warning py-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control-plaintext text-muted"
                value={"user.email"}
              ></input>
            </li>
            <li className="list-group-item text-white bg-warning py-3">
              <label className="form-label fw-bold">Address</label>
              <textarea
                className="form-control-plaintext text-muted"
                style={{ resize: "none" }}
                value={"address"}
              ></textarea>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
