import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Product } from "./Product";
import { productAPI } from "./ProductAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Vendor } from "../vendors/Vendor";
import { useState } from "react";
import { vendorAPI } from "../vendors/VendorAPI";

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [vendors, setVendors] = useState<Vendor[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: async () => {
      let vendorData = await vendorAPI.list();
      setVendors(vendorData);

      if (!productId) {
        return Promise.resolve(new Product());
      } else {
        return await productAPI.find(productId);
      }
    },
  });

  const save: SubmitHandler<Product> = async (product) => {
    try {
      if (product.isNew) {
        await productAPI.post(product);
      } else {
        await productAPI.put(product);
      }

      toast.success("Successfully saved product");
      navigate("/products");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-1 align-left">
      <h2 className="ms-1">New Product</h2>
      <hr />
      <form className="row g-4 needs-validation" onSubmit={handleSubmit(save)} noValidate>
        <div className="col-md-4">
          <label htmlFor="vc" className="form-label">
            Product Code
          </label>
          <input
            type="text"
            id="vc"
            {...register("id", {
              required: "Product Code is Required",
            })}
            className={`form-control ${errors.id && "is-invalid"}`}
            placeholder="Enter short product code"
          />
          <div className="invalid-feedback">{errors?.id?.message}</div>
        </div>

        <div className="col-md-8">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Product Name is required" })}
            placeholder="Enter product name"
            className={`form-control ${errors.name && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <label htmlFor="inputAddress" className="form-label">
              Price
            </label>
            <input
              type="text"
              id="inputAddress"
              {...register("price", {
                required: "Price is required",
              })}
              placeholder="Enter product's price"
              className={`form-control ${errors.price && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.price?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              Units
            </label>
            <input
              type="text"
              id="city"
              {...register("unit", { required: "Unit # is required" })}
              placeholder="Enter # of units"
              className={`form-control ${errors.unit && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.unit?.message}</div>
          </div>

          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Vendor ID
            </label>
            <select
              id="vendorid"
              {...register("vendorid", { required: "Vendor Id Required" })}
              className={`form-control ${errors.vendorid && "is-invalid"}`}
            >
              <option value="">Select...</option>
              {/* enter vendor ids here */}
              {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{errors?.vendorid?.message}</div>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <NavLink to="/products" className="btn btn-outline-primary me-2 mt-4">
            Cancel
          </NavLink>
          <button className="btn btn-primary mt-4">
            <svg className="me-1" width={0} height={23} fill="currentColor">
              <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
            </svg>
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
