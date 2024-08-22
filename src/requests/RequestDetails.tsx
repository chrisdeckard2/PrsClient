// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { requestAPI } from "./RequestsAPI";
// import { Request } from "./Requests";
// import { useForm } from "react-hook-form";

// function RequestDetails() {
//   //  const [request, setRequest] =useState<Request>()
//   const { id } = useParams<{ id: string }>();
//   const requestId = Number(id);
//   const [request, setRequest] = useState<Request | undefined>(undefined);

//   useEffect(() => {
//     getId();
//   }, []);

//   async function getId() {
//     let foundRequest = await requestAPI.find(requestId);
//     setRequest(foundRequest);
//   }
//   const getBadgeClass = (status: string | undefined) => {
//     switch (status?.toLowerCase()) {
//       case "new":
//         return "badge bg-primary";
//       case "review":
//         return "badge bg-warning";
//       case "approved":
//         return "badge bg-success";
//       case "rejected":
//         return "badge bg-danger";
//     }
//   };

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

//   if (!request) return null;
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="">
//           <div className="d-flex justify-content-between pb-0">
//             <h2>Request </h2>
//             <button className="btn btn-primary">Send For Review</button>
//           </div>
//           <hr className="mt-2" />
//         </div>
//         <div className="container d-flex justify-content-between p-0 ">
//           <div>
//             <dl>
//               <dt>Description</dt>
//               <dd>{request?.description}</dd>
//               <dt>Justification</dt>
//               <dd>{request?.justification}</dd>
//             </dl>
//           </div>
//           <div>
//             <dl>
//               <dt>Delivery Method</dt>
//               <dd>{request?.deliverymode}</dd>
//               <dt>Status</dt>
//               <dd className={getBadgeClass(request?.status)}>{request?.status}</dd>
//             </dl>
//           </div>
//           <div>
//             <dl>
//               <dt>Requested By</dt>
//               <dd>
//                 {request?.user?.firstname} {request?.user?.lastname}
//               </dd>
//             </dl>
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </>
//   );
// }

// export default RequestDetails;

import { useState, useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import { requestAPI } from "./RequestsAPI";
import { Request } from "./Requests";
import { useForm } from "react-hook-form";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import toast from "react-hot-toast";
import { Requestline } from "../requestlines/RequestLines";
import { requestlineAPI } from "../requestlines/RequestLinesAPI";

function RequestDetails() {
  const { Id } = useParams<{ Id: string }>();
  const requestId = Number(Id);
  const [request, setRequest] = useState<Request | undefined>(undefined);

  useEffect(() => {
    getId();
  }, []);

  async function getId() {
    let foundRequest = await requestAPI.find(requestId);
    setRequest(foundRequest);
  }

  const getBadgeClass = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "badge bg-primary";
      case "review":
        return "badge bg-warning";
      case "approved":
        return "badge bg-success";
      case "rejected":
        return "badge bg-danger";
    }
  };

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

  async function removeRequestLine(requestLine: Requestline) {
    if (confirm("Do you really want to delete")) {
      if (requestLine.id) {
        await requestlineAPI.delete(requestLine.id);
        toast.success("Successfully deleted.");
        let updatedRequestlines = request?.requestLines?.filter((r) => r.id !== requestLine.id);
        if (request) {
          setRequest({ ...request, requestLines: updatedRequestlines } as Request);
        }
      }
    }
  }

  if (!request) return null;

  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="d-flex justify-content-between pb-0">
            <h2>Request</h2>
            <div>
              <button className="btn btn-primary me-2">Send For Review</button>
              <NavLink to={`/request/edit/${request?.users?.id}`} className="btn btn-primary">
                Edit
              </NavLink>
            </div>
          </div>
          <hr className="mt-2" />
        </div>
        <div className="container d-flex justify-content-between p-0">
          <div>
            <dl>
              <dt>Description</dt>
              <dd>{request?.description}</dd>
              <dt>Justification</dt>
              <dd>{request?.justification}</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Delivery Method</dt>
              <dd>{request?.deliverymode}</dd>
              <dt>Status</dt>
              <dd className={getBadgeClass(request?.status)}>{request?.status}</dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>Requested By</dt>
              <dd>
                {request?.users?.firstname} {request?.users?.lastname}
              </dd>
            </dl>
          </div>
        </div>

        {/* Making the items box longer and aligning fields to the left */}
        {/* <div className="card mt-5" style={{ width: "100%" }}>
          <div className="card-header">
            <h5 className="card-title mb-">Items</h5>
            <Link to={`/requestlines/create/${request?.id}`} className="btn btn-primary">
              New Request Line
            </Link>
          </div>
          <div className="card-body mb-5">
          </div>
          </div> */}
          <RequestLinesTable request={request} onRemove={removeRequestLine} />
      </div>
    </>
  );
}

export default RequestDetails;
