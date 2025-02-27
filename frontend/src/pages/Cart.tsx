import Cart_product from "../components/cart_product.tsx";
import CardSummery from "../components/cartSummery.tsx";

function Cart() {
  return (
    <main className="container-fluid px-4 px-md-5">
      <div className="row align-items-start">
        <section className="col col-12 col-md-8 ">
          <h3 className="text-center mb-3 bg-primary p-2  rounded text-light">
            Cart Poduct
          </h3>
          <table className="table table-borderless">
            <Cart_product />
            <Cart_product />
            <Cart_product />
            <Cart_product />
            <Cart_product />
            <Cart_product />
          </table>
        </section>
        <aside className="cart col col-md-4  shadow bg-primary p-3 mb-4 text-white rounded">
          <CardSummery navto="/checkout/1" name="Check Out" />
        </aside>
      </div>
    </main>
  );
}
export default Cart;
