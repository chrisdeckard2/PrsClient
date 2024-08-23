import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../users/User";
import { userAPI } from "../users/UserAPI";
import { useUserContext } from "../users/UserContext";

interface IAccount {
  username: string;
  password: string;
}

let emptyAccount = {
  username: "",
  password: "",
};

function persistUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

function SignInPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccount>({
    defaultValues: async () => {
      return emptyAccount;
    },
  });
  const { setUser } = useUserContext();

  const signin: SubmitHandler<IAccount> = async (account) => {
    try {
      const user = await userAPI.findByAccount(account.username, account.password);
      persistUser(user);
      setUser(user);

      navigate("/requests");
    } catch (error: any) {
      toast.error("Unsuccessful sign in. Please try again.");
    }
  };

  return (
    <section className="mt-4 container-fluid mx-5">
      <h4 className="card-title">Sign in</h4>
      <form className="d-flex flex-column w-25" onSubmit={handleSubmit(signin)}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            className={`form-control ${errors?.username && "is-invalid"}`}
          />
          <div className="invalid-feedback">{errors?.username?.message}</div>
        </div>
        <div className="mb-1">
          <label className="form-label">Password</label>
          <input
            {...register("password", { required: "Password is Required" })}
            type="password"
            className={`form-control ${errors?.username && "is-invalid"}`}
          />
        </div>
        <div className="mb-4 form-text">
          <a>Forgot It?</a>
        </div>
        <div className="mb-3 d-grid gap-2">
          <button className="btn btn-lg btn-primary">Sign in</button>
        </div>
      </form>
    </section>
  );
}

export default SignInPage;
