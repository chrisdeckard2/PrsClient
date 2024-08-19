import { useState, useEffect, SyntheticEvent } from "react";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [busy, setBusy] = useState(false);

  async function getUsers() {
    setBusy(true);
    let data = await userAPI.list();
    setUsers(data);
    setBusy(false);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function remove(user: User) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await userAPI.delete(user.id);
      let updatedUsers = users.filter((v) => v.id !== user.id);
      setUsers(updatedUsers);
      toast.success("Successfully deleted.");
    }
  }

  return (
    <div className="container-fluid list d-flex flex-wrap justify-content-center bg-body-tertiary p-3">
      <section className="d-flex flex-wrap gap-4 list">
        {busy && (
          <div className="loading-indicator">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {users.map((user) => (
          <UserCard key={user.id} user={user} onRemove={remove} />

          // <div key={user.id} className="card mt-" style={{ width: "18rem" }}>
          //   <div className="card-body">
          //     <div className="d-flex justify-content-between">
          //       <div>
          //         <h5 className="card-title">{user.firstname, user.lastname}</h5>
          //         <span className="badge text-bg-secondary">{user.code}</span>
          //       </div>
          //       <div className="btn-group dropend">
          //         <Dropdown aria-expanded="false">
          //           <Dropdown.Toggle variant="" className="no-caret">
          //             <svg className="text-primary" width={20} height={20} fill="currentColor">
          //               <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
          //             </svg>
          //           </Dropdown.Toggle>
          //           <Dropdown.Menu className="custom-dropdown">
          //             <li>
          //               <NavLink to={`/users/edit/${user.id}`} className="dropdown-item">
          //                 Edit
          //               </NavLink>
          //             </li>
          //             <li>
          //               <NavLink
          //                 to="#"
          //                 className="dropdown-item"
          //                 style={{ textDecoration: "none", cursor: "pointer" }}
          //                 onClick={(event: SyntheticEvent) => {
          //                   event.preventDefault();
          //                   remove(user);
          //                 }}
          //               >
          //                 Delete
          //               </NavLink>
          //             </li>
          //           </Dropdown.Menu>
          //         </Dropdown>
          //       </div>
          //     </div>
          //     <section>
          //       <p className="card-text text-secondary mt-2 mb-0">{user.address}</p> {/* Added margin-top (mt-2) */}
          //       <p className="text-secondary m-0 p-0">{user.phone}</p>
          //       <p className="text-secondary m-0 p-0">{user.email}</p>
          //     </section>
          //   </div>
          // </div>
        ))}
      </section>
    </div>
  );
}

export default UserList;
