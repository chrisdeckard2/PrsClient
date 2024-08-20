import { useState, useEffect, SyntheticEvent } from "react";
import { Product } from "./Product";
import { productAPI } from "./ProductAPI";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [busy, setBusy] = useState(false);

  async function getProducts() {
    setBusy(true);
    let data = await productAPI.list();
    setProducts(data);
    setBusy(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function remove(product: Product) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await productAPI.delete(product.id);
      let updatedProducts = products.filter((v) => v.id !== product.id);
      setProducts(updatedProducts);
      toast.success("Successfully deleted.");
    }
  }

  return (
    <div className="container-fluid list d-flex flex-wrap justify-content-center bg-body-tertiary p-3">
      <section className="d-flex flex-wrap gap-4 list">
        {busy && (
          <div className="loading-indicator">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {products.map((product) => (
          <div key={product.id} className="card mt-" style={{ width: "18rem" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">{product.name}</h5>
                  <span className="badge text-bg-primary">{product.code}</span>
                </div>
                <div className="btn-group dropend">
                  <Dropdown aria-expanded="false">
                    <Dropdown.Toggle variant="" className="no-caret">
                      <svg className="text-primary" width={20} height={20} fill="currentColor">
                        <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-dropdown">
                      <li>
                        <NavLink to={`/product/edit/${product.id}`} className="dropdown-item">
                          Edit
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="#"
                          className="dropdown-item"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={(event: SyntheticEvent) => {
                            event.preventDefault();
                            remove(product);
                          }}
                        >
                          Delete
                        </NavLink>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <section>
                <p className="card-text text-secondary mt-2 mb-0">{product.address}</p> {/* Added margin-top (mt-2) */}
                <p className="text-secondary m-0 p-0">{product.phone}</p>
                <p className="text-secondary m-0 p-0">{product.email}</p>
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;
