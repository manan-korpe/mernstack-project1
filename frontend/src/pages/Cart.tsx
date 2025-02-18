import Cart_product from "../component/cart_product.tsx"
import CardSummery from "../component/cartSummery.tsx";

function Cart(){
    return(
        <main className="container-md px-4 px-md-5">
           <div className="row align-items-start">
                <section className="col col-12 col-lg-9">
                    <h3 className="text-center mb-5 bg-primary p-3 rounded text-light">Cart Poduct</h3>
                    <Cart_product/>
                    <Cart_product/>
                    <Cart_product/>
                    <Cart_product/>
                </section>
                <aside className="cart col col-lg-3  shadow bg-primary p-3 mb-4 text-white rounded">
                    <CardSummery navto="/checkout/1" name="Check Out" />
                </aside>
            </div>
        </main>
    )
}
export default Cart;