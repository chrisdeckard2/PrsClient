// import { useState, useEffect, SyntheticEvent } from "react";
// import { Request } from "./Requests";
// import { requestAPI } from "./RequestsAPI";
// import { Link, NavLink } from "react-router-dom";
// import { Dropdown, Spinner } from "react-bootstrap";
// import { toast } from "react-hot-toast";

// function RequestList() {
//   const [requests, setRequests] = useState<Request[]>([]);
//   const [busy, setBusy] = useState(false);

//   async function getRequests() {
//     setBusy(true);
//     let data = await requestAPI.list();
//     setRequests(data);
//     setBusy(false);
//   }

//   useEffect(() => {
//     getRequests();
//   }, []);

//   async function remove(request: Request) {
//     if (window.confirm("Are you sure you want to delete this request?")) {
//       await requestAPI.delete(requests.id);
//       let updatedRequests = requests.filter((v) => v.id !== request.id);
//       setRequests(updatedRequests);
//       toast.success("Successfully deleted.");
//     }
//   }

//   return (
//     <div className="container-fluid list d-flex flex-wrap justify-content-center bg-body-tertiary p-3">
//       <section className="d-flex flex-wrap gap-4 list">
//         {busy && (
//           <div className="loading-indicator">
//             <Spinner animation="border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </Spinner>
//           </div>
//         )}
//         {requests.map((request) => (
//           <div key={request.id} className="card mt-" style={{ width: "18rem" }}>
//             <div className="card-body">
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <h5 className="card-title">{request.description}</h5>
//                   <span className="badge text-bg-primary">{request.code}</span>
//                 </div>
//                 <div className="btn-group dropend">
//                   <Dropdown aria-expanded="false">
//                     <Dropdown.Toggle variant="" className="no-caret">
//                       <svg className="text-primary" width={20} height={20} fill="currentColor">
//                         <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
//                       </svg>
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu className="custom-dropdown">
//                       <li>
//                         <NavLink to={`/request/edit/${request.id}`} className="dropdown-item">
//                           Edit
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="#"
//                           className="dropdown-item"
//                           style={{ textDecoration: "none", cursor: "pointer" }}
//                           onClick={(event: SyntheticEvent) => {
//                             event.preventDefault();
//                             remove(request);
//                           }}
//                         >
//                           Delete
//                         </NavLink>
//                       </li>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>
//               </div>
//               <section>
//                 <p className="card-text text-secondary mt-2 mb-0">{request.address}</p> {/* Added margin-top (mt-2) */}
//                 <p className="text-secondary m-0 p-0">{request.phone}</p>
//                 <p className="text-secondary m-0 p-0">{request.email}</p>
//               </section>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }



// {/* <table>
//   <thead>
//   <tr>
//     <th>Description</th>
//     <th>Status</th>
//     <th>Total</th>
//     <th>Requested By</th>
//   </tr>
//   </thead>
//   <tbody>
//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>
//   <tr>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//   </tr>
//   </tbody>
// </table> */}

  

// export default RequestList;


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
                  {/* <small className="text-muted">{request.additionalInfo}</small> */}
                </td>
                <td>
                  <span className={`badge text-bg-${request.statusColor} text-dark`}>
                    {request.status}
                  </span>
                </td>
                <td>${request.total}</td>
                <td>
                  <div>{request.requestedBy}</div>
                  <small className="text-muted">{request.deliveryType}</small>
                </td>
                <td className="text-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="link" className="text-dark p-0">
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
      )}
    </div>
  );
}

export default RequestList;

