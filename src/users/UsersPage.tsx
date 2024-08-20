import { Link } from "react-router-dom";
import UsersList from "./UserList";
import "bootstrap/dist/css/bootstrap.min.css";

function UsersPage() {
  return (
    <>
      
      <section className="mt-4 container-fluid mx-5">
      <div className="border-bottom d-flex justify-content-between p-3 mb-4">
        <h3>Users</h3>
        <Link className="btn btn-primary" to="/users/create">
          Create User
        </Link>
      </div>
      {/* Everything in the body goes here */}
      <UsersList />
    </section>
    </>
  );
}

export default UsersPage;
