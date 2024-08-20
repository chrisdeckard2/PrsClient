import ProductForm from "./ProductForm";

function ProductCreate() {
  return (
    <>
      <div className="container-fluid p-3">
        <h2 className="ms-5">Create Product</h2>
        <hr />

        <div className="container-fluid p-3">
          <ProductForm />
        </div>
      </div>
    </>
  );
}
export default ProductCreate;
