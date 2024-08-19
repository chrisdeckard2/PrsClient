import { User } from "./User";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";

interface UserCardProps {
  user: User;
  onRemove: (user: User) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
  return (
    <div
      className="d-flex align-items-center justify-content-between p-3 rounded bg-light shadow-sm mb-3"
      style={{ width: "25%", maxWidth: "600px" }}
    >
      <div className="d-flex align-items-center">
        <div
          style={{ width: "50px", height: "50px" }}
          className="d-flex bg-primary text-white fs-5 align-items-center justify-content-center rounded-circle me-3"
        >
          {user.firstname[0]}
          {user.lastname[0]}
        </div>
        <div>
          <h5 className="mb-0">
            {user.firstname} {user.lastname}
          </h5>
          <div className="text-muted">
            {user.isAdmin && "Admin"}
            {user.isAdmin && user.isReviewer && " | "}
            {user.isReviewer && "Reviewer"}
            {!user.isAdmin && !user.isReviewer && "No role assigned"}
          </div>
          <div className="text-muted">{user.phone}</div>
        </div>
      </div>
      <Dropdown className="" aria-expanded="false">
        <Dropdown.Toggle variant="" className="no-caret">
          <svg className="text-dark" width={20} height={20} fill="currentColor">
            <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <li>
            <NavLink to={`/users/edit/${user.id}`} className="dropdown-item">
              Edit
            </NavLink>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={(event: SyntheticEvent) => {
                event.preventDefault();
                onRemove(user);
              }}
            >
              Delete
            </a>
          </li>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserCard;
