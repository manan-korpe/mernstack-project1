import Cart from "../components/car.tsx";

function Product(){
    
    return(
        <>
            <main className="container">
                <div className="row  g-4 g-md-3 justify-content-center">
                    
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                </div>
                
            </main>
        </>
    )
}
export default Product