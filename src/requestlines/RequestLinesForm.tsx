import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Requestline } from "./Requestline";
import toast from "react-hot-toast";
import { requestlineAPI } from "./RequestlineAPI";
import { useState } from "react";
import { Actor } from "../actors/Actor";
import { actorAPI } from "../actors/ActorAPI";

function RequestlineForm() {
  const navigate = useNavigate();
  let { requestlineId: requestlineIdAsString } = useParams<{ requestlineId: string }>();
  let { movieId: movieIdAsString } = useParams<{ movieId: string }>();
  let requestlineId = Number(requestlineIdAsString);
  let movieId = Number(movieIdAsString);
  const [actors, setActors] = useState<Actor[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Requestline>({
    defaultValues: async () => {
      let actorsData = await actorAPI.list();
      setActors(actorsData);

      if (!requestlineId) {
        let newRequestline = new Requestline({ movieId: movieId });
        return Promise.resolve(newRequestline);
      } else {
        return await requestlineAPI.find(requestlineId);
      }
    },
  });

  const save: SubmitHandler<Requestline> = async (requestline) => {
    try {
      if (requestline.isNew) {
        await requestlineAPI.post(requestline);
      } else {
        await requestlineAPI.put(requestline);
      }
      navigate(`/movies/detail/${movieId}?lastUpdated=${Date.now()}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(save)} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="actor">
          Actor
        </label>
        <select
          {...register("actorId", {
            required: "Actor is required",
          })}
          className={`form-select ${errors.actorId && "is-invalid"} `}
          id="actor"
        >
          <option value="">Select...</option>
          {actors.map((actor) => (
            <option key={actor.id} value={actor.id}>
              {actor.name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errors?.actorId?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="role">
          Role
        </label>
        <input
          {...register("role", {
            required: "Role is required",
          })}
          className="form-control"
          type="text"
          id="role"
        />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link
          className="btn btn-outline-secondary"
          to={`/movies/detail/${movieId}`}
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default RequestlineForm;
