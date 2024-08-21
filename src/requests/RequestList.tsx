import { useState, useEffect, SyntheticEvent } from "react";
import { Request } from "./Requests";
import { requestAPI } from "./RequestsAPI";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";

function RequestList() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [busy, setBusy] = useState(false);

  async function getRequests() {
    setBusy(true);
    let data = await requestAPI.list();
    setRequests(data);
    setBusy(false);
  }

  useEffect(() => {
    getRequests();
  }, []);

  async function remove(request: Request) {
    if (window.confirm("Are you sure you want to delete this request?")) {
      await requestAPI.delete(request.id);
      let updatedRequests = requests.filter((v) => v.id !== request.id);
      setRequests(updatedRequests);
      toast.success("Successfully deleted.");
    }
  }

  return (
    <div className="container-fluid p-3">
      {busy && (
        <div className="loading-indicator text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {!busy && (
        <div style={{ maxWidth: "800px", marginLeft: "0 auto" }}>
          {" "}
          {/* Adjust maxWidth as needed */}
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Status</th>
                <th>Total</th>
                <th>Requested By</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div>{request.description}</div>
                  </td>
                  <td>
                    <span className={`badge text-bg-${request.statusColor} text-dark`}>{request.status}</span>
                  </td>
                  <td>${request.total}</td>
                  <td>
                    <div>{request.requestedBy}</div>
                    <small className="text-muted">{request.deliveryType}</small>
                  </td>
                  <td className="text-end">
                    <Dropdown>
                      <Dropdown.Toggle variant="link" className="text-dark p-0" bsPrefix="p-0">
                        <svg className="bi" width={20} height={20} fill="currentColor">
                          <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to={`/request/edit/${request.id}`}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={(event: SyntheticEvent) => {
                            event.preventDefault();
                            remove(request);
                          }}
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RequestList;
