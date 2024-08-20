// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { Request } from "./Requests";
// import { requestAPI } from "./RequestsAPI";
// import { useForm, SubmitHandler } from "react-hook-form";
// import toast from "react-hot-toast";

// function RequestForm() {
//   const navigate = useNavigate();
//   const { id } = useParams<{ id: string }>();
//   const requestId = Number(id);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Request>({
//     defaultValues: async () => {
//       if (!requestId) {
//         return Promise.resolve(new Request());
//       } else {
//         return await requestAPI.find(requestId);
//       }
//     },
//   });

//   const save: SubmitHandler<Request> = async (request) => {
//     try {
//       if (request.isNew) {
//         await requestAPI.post(request);
//       } else {
//         await requestAPI.put(request);
//       }

//       toast.success("Successfully saved request");
//       navigate("/requests");
//     } catch (error: any) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container mt-1 align-left">
      
//       <form className="row g-4 needs-validation" onSubmit={handleSubmit(save)} noValidate>
//         <div className="col-md-4">
//           <label htmlFor="vc" className="form-label">
//             Request Code
//           </label>
//           <input
//             type="text"
//             id="vc"
//             {...register("code", {
//               required: "Request Code is Required",
//             })}
//             className={`form-control ${errors.code && "is-invalid"}`}
//             placeholder="Enter short request code"
//           />
//           <div className="invalid-feedback">{errors?.code?.message}</div>
//         </div>

//         <div className="col-md-8">
//           <label htmlFor="name" className="form-label">
//             Request Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             {...register("name", { required: "Name is required" })}
//             placeholder="Enter request name"
//             className={`form-control ${errors.name && "is-invalid"}`}
//           />
//           <div className="invalid-feedback">{errors?.name?.message}</div>
//         </div>

//         <div className="col-12">
//           <label htmlFor="inputAddress" className="form-label">
//             Address
//           </label>
//           <input
//             type="text"
//             id="inputAddress"
//             {...register("address", {
//               required: "Address is required",
//             })}
//             placeholder="Enter request's address"
//             className={`form-control ${errors.address && "is-invalid"}`}
//           />
//           <div className="invalid-feedback">{errors?.address?.message}</div>
//         </div>

//         <div className="col-md-4">
//           <label htmlFor="city" className="form-label">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             {...register("city", { required: "City is required" })}
//             placeholder="Enter city"
//             className={`form-control ${errors.city && "is-invalid"}`}
//           />
//           <div className="invalid-feedback">{errors?.city?.message}</div>
//         </div>

//         <div className="col-md-2">
//           <label htmlFor="inputState" className="form-label">
//             State
//           </label>
//           <select
//             id="inputState"
//             {...register("state", { required: "State Required" })}
//             className={`form-control ${errors.state && "is-invalid"}`}
//           >
//             <option value="">Select state...</option>
//             <option value="OH">OH</option>
//             <option value="KY">KY</option>
//           </select>
//           <div className="invalid-feedback">{errors?.state?.message}</div>
//         </div>

//         <div className="col-md-2">
//           <label htmlFor="inputZip" className="form-label">
//             Zip
//           </label>
//           <input
//             type="text"
//             {...register("zip", { required: "Zipcode is Required" })}
//             className={`form-control ${errors.zip && "is-invalid"}`}
//             id="inputZip"
//             placeholder="Enter zip code"
//           />
//           <div className="invalid-feedback">{errors?.zip?.message}</div>
//         </div>

//         <div className="col-md-4">
//           <label htmlFor="phone">Phone</label>
//           <input
//             type="text"
//             {...register("phone")}
//             className="form-control"
//             placeholder="Enter phone number"
//             id="phone"
//           />
//         </div>

//         <div className="col-md-4">
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             {...register("email")}
//             className="form-control"
//             placeholder="Enter email address"
//             id="email"
//           />
//         </div>

//         <div className="col-12 d-flex justify-content-end">
//           <NavLink to="/requests" className="btn btn-outline-primary me-2">
//             Cancel
//           </NavLink>
//           <button className="btn btn-primary">
//             <svg className="me-1" width={0} height={23} fill="currentColor">
//               <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
//             </svg>
//             Save Request
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default RequestForm;


import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Request } from "./Requests";
import { requestAPI } from "./RequestsAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

function RequestForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });

  const save: SubmitHandler<Request> = async (request) => {
    try {
      if (request.isNew) {
        await requestAPI.post(request);
      } else {
        await requestAPI.put(request);
      }

      toast.success("Successfully saved request");
      navigate("/requests");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      
      <form className="row g-3" onSubmit={handleSubmit(save)} noValidate>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: "Description is Required",
            })}
            className={`form-control ${errors.description && "is-invalid"}`}
            placeholder="Enter a brief description for your purchase request"
          />
          <div className="invalid-feedback">
            {errors?.description?.message}
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="justification" className="form-label">
            Justification
          </label>
          <input
            type="text"
            id="justification"
            {...register("justification", { required: "Justification is required" })}
            placeholder="Enter a justification for your purchase request"
            className={`form-control ${errors.justification && "is-invalid"}`}
          />
          <div className="invalid-feedback">
            {errors?.justification?.message}
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="deliveryMethod" className="form-label">
            Delivery Method
          </label>
          <select
            id="deliveryMethod"
            {...register("deliverymode", { required: "Delivery Method is required" })}
            className={`form-control ${errors.deliverymode && "is-invalid"}`}
          >
            <option value="">Select...</option>
            {"Pickup" && <option value="Pickup">Pickup</option>}
            {"Delivery" && <option value="Delivery">Delivery</option>}
            {"Signature Delivery" && <option value="Signature Delivery">Signature Delivery</option>}
            {"Santa Claus" && <option value="Santa Claus">Santa Claus</option>}
          </select>
          <div className="invalid-feedback">
            {errors?.deliverymode?.message}
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            {...register("status", { required: "Status is required" })}
            className={`form-control ${errors.status && "is-invalid"}`}
          >
            <option value="new">New</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <div className="invalid-feedback">
            {errors?.status?.message}
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="requestedBy" className="form-label">
            Requested By
          </label>
          <select
            id="requestedBy"
            {...register("requestedBy", { required: "Requested By is required" })}
            className={`form-control ${errors.requestedBy && "is-invalid"}`}
          >
            <option value="">Select...</option>
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Employee">Employee</option>
            <option value="Other">Other</option>
            <option value="Santa Claus">Santa Claus</option>
          </select>
          <div className="invalid-feedback">
            {errors?.requestedBy?.message}
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <NavLink to="/requests" className="btn btn-outline-primary me-2">
            Cancel
          </NavLink>
          <button className="btn btn-primary">
            Save Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;

