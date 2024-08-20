import ProductForm from "./ProductForm";

function ProductEdit() {

  return (
    <>

<div className="container-fluid p-3">
        <h2 className="ms-5">Edit Product</h2>
        <hr />
       
       <div className="ps-1">
      <ProductForm  />
       </div>
      </div>
    </>
  );
}

export default ProductEdit;