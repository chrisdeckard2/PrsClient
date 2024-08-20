import { Link, NavLink } from "react-router-dom";
import ProductList from "./ProductList";

function ProductsPage() {
  return (
    <section className="mt-4 container-fluid mx-5">
      <div className="border-bottom d-flex justify-content-between p-3 mb-4">
        <h3>Products</h3>
        <Link className="btn btn-primary" to="/product/create">
          Create Product
        </Link>
      </div>
      {/* Everything in the body goes here */}
      <ProductList />
    </section>
  );
}

export default ProductsPage;
