import { Link } from "react-router-dom";
import { Request } from "../requests/Requests";
import { Requestline } from "./RequestLines";

interface RequestlineTableProps {
  request: Request;
  onRemove: (requestLines: Requestline) => void;
}

function RequestLinesTable({ request, onRemove }: RequestlineTableProps) {
  return (
    <div className="border rounded-2 p-3">
      <div className="d-flex justify-content-between">
        <label htmlFor="table">
          <h4>Items</h4>
        </label>
        <Link className=" btn btn-primary" to="requestLines/create">
          + New Request Line
        </Link>
      </div>
      <table className="table table-light w-50 ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {request.requestLines?.map((requestline) => (
            <tr key={requestline.id}>
              <td>{requestline.products?.name}</td>
              <td>${requestline.products?.price}</td>
              <td>{requestline.quantity}</td>
              <td>${(requestline.products?.price ?? 0) * (requestline.quantity ?? 0)}</td>
              <td className="d-flex gap-2">
                <Link to={`/request/detail/${request.id}/requestline/edit/${requestline.id}`}>edit</Link>
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
    </div>
  );
}

export default RequestLinesTable;
