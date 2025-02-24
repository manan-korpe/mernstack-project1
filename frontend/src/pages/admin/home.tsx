import { Outlet } from "react-router-dom"

function Home(){
    return(
        <main className="container-fluid ">
            <nav className="navbar w-100  navbar-expand g-body-tertiary bg-primary p-2 my-1 rounded">
                <div className="w-100">
                    <div className="row g-0 justify-content-between align-items-center">
                        <div className="text-white fw-bolder col-3">Ecommerce
                        </div>
                        <form className="d-flex col-9 justify-content-end">
                            <input className="form-control me-2 w-50" type="search" placeholder="Search..." />
                            <button className="btn btn-warning text-white" type="submit">Search</button>
                        </form>
                    </div>
                    
                </div>
            </nav>
            <section className="row m-1 align-items-stretch" style={{height:"90vh"}}>
                <aside className="col-12 col-md-2 bg-primary rounded p-2 " >
                <ul className="list-group list-group-flush rounded mt-5">
                    <li className="list-group-item bg-warning text-white py-2 py-md-3">dashbord</li>
                    <li className="list-group-item bg-warning text-white py-2 py-md-3">User</li>
                    <li className="list-group-item bg-warning text-white py-2 py-md-3">Product</li>
                    <li className="list-group-item bg-warning text-white py-2 py-md-3">Category</li>
                    <li className="list-group-item bg-warning text-white py-2 py-md-3">Order</li>
                    <li className="list-group-item bg-warning text-white py-2 py-md-3">Blog</li>
                </ul>
                </aside>
                <section className="col-12 col-md-10">
                    <Outlet/>
                </section>
            </section>
        </main>
    )
}
export default Home