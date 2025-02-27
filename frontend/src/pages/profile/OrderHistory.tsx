export default function OrderHistory() {
  return (
    <div className="px-md-4 p-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item  shadow-sm rounded">
          <div className="row g-2 px-md-3">
            <div className="col-5">
              <small>Order ID</small>
              <h5 className="mt-2">xyziwhcdrefydtcd</h5>
            </div>
            <div className="col-7 text-end">
              <div className="row">
                <div className="col-6">
                  <small>ordered on</small>
                  <h5 className="mt-2">12 Dec 2025</h5>
                </div>
                <div className="col-6">
                  <small>Status</small>
                  <h5 className="text-success mt-2">Done</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 px-md-3">
            <div className="col-5">
              <div className="row py-2">
                <div className="col-6">
                  <small>package</small>
                  <h5 className="mt-2">12 pcs</h5>
                </div>
                <div className="col-6">
                  <small>No of packages</small>
                  <h5 className="mt-2">12</h5>
                </div>
              </div>
            </div>
            <div className="col-7 text-end">
              <div className="row py-2">
                <div className="col-4">
                  <small>peice</small>
                  <h5 className="mt-2">120000 $</h5>
                </div>
                <div className="col-3">
                  <small>Shipping</small>
                  <h5 className="mt-2">75 $</h5>
                </div>
                <div className="col-5">
                  <small>Price(+Shipping)</small>
                  <h5 className="text-bolder mt-2">2000003 $</h5>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted mt-4 py-1 text-end">
            Your order will be delivered by <strong>15 Dec 2015</strong>
          </p>
        </li>
      </ul>
    </div>
  );
}
