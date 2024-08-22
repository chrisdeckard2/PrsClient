import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import { useState } from "react";
import { Product } from "../products/Product";
import { productAPI } from "../products/ProductAPI";
import { requestlineAPI } from "./RequestLinesAPI";
import { Requestline } from "./RequestLines";

function RequestlineForm() {
  const navigate = useNavigate();
  let { requestlineId: requestlineIdAsString } = useParams<{ requestlineId: string }>();
  let { Id: requestIdAsString } = useParams<{ Id: string }>();
  let requestlineId = Number(requestlineIdAsString);
  let requestId = Number(requestIdAsString);
  const [products, setProducts] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Requestline>({
    defaultValues: async () => {
      let productsData = await productAPI.list();
      setProducts(productsData);

      if (!requestlineId) {
        let newRequestline = new Requestline({ requestId: requestId });
        return Promise.resolve(newRequestline);
      } else {
        return await requestlineAPI.find(requestlineId);
      }
    },
  });

  const save: SubmitHandler<Requestline> = async (requestline: Requestline) => {
    try {
      if (requestline.isNew) {
        await requestlineAPI.post(requestline);
      } else {
        await requestlineAPI.put(requestline);
      }
      navigate(`/request/review/${requestId}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(save)} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="product">
          Product
        </label>
        <select
          {...register("productId", {
            required: "Product is required",
          })}
          className={`form-select ${errors.productId && "is-invalid"} `}
          id="product"
        >
          <option value="">Select...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errors?.quantity?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="role">
          Quantity
        </label>
        <input
          {...register("quantity", {
            required: "quantity is required",
          })}
          className="form-control"
          type="text"
          id="role"
        />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link className="btn btn-outline-secondary" to={`/requests/detail/${requestId}`}>
          Cancel
        </Link>
      </div>
    </form>
  );


//     <div className="card mt-3 mx-5">
//       <div className="card-body">
//         <h5 className="card-title">Item</h5>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="product" className="form-label">Product</label>
//             <select 
//               id="product" 
//               className="form-select" 
//               value={requestline.product} 
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
//   );
// }
        }
      

export default RequestlineForm;
