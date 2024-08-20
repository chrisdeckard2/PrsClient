import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

function VendorForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const vendorId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vendor>({
    defaultValues: async () => {
      if (!vendorId) {
        return Promise.resolve(new Vendor());
      } else {
        return await vendorAPI.find(vendorId);
      }
    },
  });

  const save: SubmitHandler<Vendor> = async (vendor) => {
    try {
      if (vendor.isNew) {
        await vendorAPI.post(vendor);
      } else {
        await vendorAPI.put(vendor);
      }

      toast.success("Successfully saved vendor");
      navigate("/vendors");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-1 align-left">
      
      <form className="row g-4 needs-validation" onSubmit={handleSubmit(save)} noValidate>
        <div className="col-md-4">
          <label htmlFor="vc" className="form-label">
            Vendor Code
          </label>
          <input
            type="text"
            id="vc"
            {...register("code", {
              required: "Vendor Code is Required",
            })}
            className={`form-control ${errors.code && "is-invalid"}`}
            placeholder="Enter short vendor code"
          />
          <div className="invalid-feedback">{errors?.code?.message}</div>
        </div>

        <div className="col-md-8">
          <label htmlFor="name" className="form-label">
            Vendor Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter vendor name"
            className={`form-control ${errors.name && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="inputAddress"
            {...register("address", {
              required: "Address is required",
            })}
            placeholder="Enter vendor's address"
            className={`form-control ${errors.address && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors?.address?.message}</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
            placeholder="Enter city"
            className={`form-control ${errors.city && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors?.city?.message}</div>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            {...register("state", { required: "State Required" })}
            className={`form-control ${errors.state && "is-invalid"}`}
          >
            <option value="">Select state...</option>
            <option value="OH">OH</option>
            <option value="KY">KY</option>
          </select>
          <div className="invalid-feedback">{errors?.state?.message}</div>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            {...register("zip", { required: "Zipcode is Required" })}
            className={`form-control ${errors.zip && "is-invalid"}`}
            id="inputZip"
            placeholder="Enter zip code"
          />
          <div className="invalid-feedback">{errors?.zip?.message}</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            {...register("phone")}
            className="form-control"
            placeholder="Enter phone number"
            id="phone"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email")}
            className="form-control"
            placeholder="Enter email address"
            id="email"
          />
        </div>

        <div className="col-12 d-flex justify-content-end">
          <NavLink to="/vendors" className="btn btn-outline-primary me-2">
            Cancel
          </NavLink>
          <button className="btn btn-primary">
            <svg className="me-1" width={0} height={23} fill="currentColor">
              <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
            </svg>
            Save Vendor
          </button>
        </div>
      </form>
    </div>
  );
}

export default VendorForm;
