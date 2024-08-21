import { Link } from "react-router-dom";
import { Request } from "../requests/Requests";
import { Requestlines } from "./Requestlines";

interface RequestlineTableProps {
  request: Request;
  onRemove: (requestLines: RequestLines) => void;
}

function RequestlineTable({ request, onRemove }: RequestlineTableProps) {
  return (
    <table className="table table-hover table-light w-50">
      <thead>
        <tr>
          <th>Actor</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movie.requestlines?.map((requestline) => (
          <tr key={requestline.id}>
            <td>{requestline.actor?.name}</td>
            <td>{requestline.role}</td>
            <td className="d-flex gap-2">
              <Link to={`/movies/detail/${movie.id}/requestline/edit/${requestline.id}`}>edit</Link>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  onRemove(requestline);
                }}
              >
                delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RequestlinesTable;
