import { Link, NavLink } from "react-router-dom";
import RequestList from "./RequestList";

function RequestsPage() {
  return (
    <section className="mt-4 container-fluid mx-5">
      <div className="border-bottom d-flex justify-content-between p-3 mb-4">
        <h3>Requests</h3>
        <Link className="btn btn-primary" to="/request/create">
          Create Request
        </Link>
      </div>
      {/* Everything in the body goes here */}
      <RequestList />
    </section>
  );
}

export default RequestsPage;
