
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: async () => {
      if (!userId) {
        return Promise.resolve(new User());
      } else {
        return await userAPI.find(userId);
      }
    },
  });

  const save: SubmitHandler<User> = async (user) => {
    try {
      if (user.isNew) {
        await userAPI.post(user);
      } else {
        await userAPI.put(user);
      }

      toast.success("Successfully saved user");
      navigate("/users");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid custom-margin-top">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Create User</h2>
      </div>
      <div>
        <form className="row g-md-4 needs-validation is-invalid" onSubmit={handleSubmit(save)} noValidate>
          <div className="col-md-4">
            <label htmlFor="vc" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="vc"
              {...register("username", {
                required: "Username is Required",
              })}
              className={`form-control ${errors.username && "is-invalid"} `}
              placeholder="Enter Username"
            />
            <div className="invalid-feedback">{errors?.username?.message}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="password"
              {...register("password", {
                required: "password is required",
              })}
              placeholder="Enter Password"
              className={`form-control ${errors.password && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                {...register("firstname", {
                  required: "First Name is required",
                })}
                placeholder="Enter Firstname"
                className={`form-control ${errors.firstname && "is-invalid"}`}
              />
              <div className="invalid-feedback">{errors?.firstname?.message}</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                {...register("lastname", {
                  required: "Last Name is required",
                })}
                placeholder="Enter Lastname"
                className={`form-control ${errors.lastname && "is-invalid"}`}
              />
              <div className="invalid-feedback">{errors?.lastname?.message}</div>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              {...register("phone")}
              className="form-control"
              placeholder="Enter Phone Number"
              id="phone"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              className="form-control"
              placeholder="Enter Email Address"
              id="email"
            />
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Role</label>
            <br />
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Reviewer</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Admin</label>
            </div>
          </div>
          <div className="offset-7">
            {/* <button type="reset" className="btn btn-outline-primary me-2 form-check">
              Cancel
            </button> */}
            <button className="btn btn-primary form-check">
              <svg className="me-1" width={5} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
