// import RequestlineForm from "./RequestLinesForm";

// function RequestlineCreatePage() {
//   return (
//     <>
//     <div className="container-fluid ">
//       <nav className="">
//         <h4 className="ms-5 mt-3">New Request</h4>
//       </nav>
//       <hr />
//       <RequestlineForm />
//     </div>
//     </>
//   );
// }

// export default RequestlineCreatePage;

import React, { useState } from "react";
import RequestlineForm from "./RequestLinesForm";

// function RequestlineForm() {
//   const [product, setProduct] = useState('Tasty Soft Chair');
//   const [price, setPrice] = useState(36.00);
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   return (
//     <div className="card mt-3 mx-5">
//       <div className="card-body">
//         <h5 className="card-title">Item</h5>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="product" className="form-label">Product</label>
//             <select
//               id="product"
//               className="form-select"
//               value={product}
//               onChange={(e) => setProduct(e.target.value)}
//             >
//               <option value="Tasty Soft Chair">Tasty Soft Chair</option>
//               <option value="Another Product">Another Product</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="price" className="form-label">Price</label>
//             <input
//               type="text"
//               className="form-control"
//               id="price"
//               value={`$${price.toFixed(2)}`}
//               readOnly
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="quantity" className="form-label">Quantity</label>
//             <input
//               type="number"
//               className="form-control"
//               id="quantity"
//               value={quantity}
//               onChange={handleQuantityChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="amount" className="form-label">Amount</label>
//             <input
//               type="text"
//               className="form-control"
//               id="amount"
//               value={`$${(price * quantity).toFixed(2)}`}
//               readOnly
//             />
//           </div>
//           <button type="button" className="btn btn-secondary me-2">Cancel</button>
//           <button type="submit" className="btn btn-primary">Save line</button>
//         </form>
//       </div>
//     </div>
//   );
// }

function RequestlineCreatePage() {
  return (
    <>
      <div className="container-fluid">
        <div>
          <h4 className="ms-5 mt-3">New Request Line</h4>
        </div>
        <hr />
        <RequestlineForm />
      </div>
    </>
  );
}

export default RequestlineCreatePage;
