import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { NavLink } from "react-router-dom";

function NavPanel() {
  return (
    <nav>
      <ul className="nav nav-pills flex-column p-4 ">
        {/* <div className="dropdown" />
        <a
          className="btn createnewbtn"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="" />
          Create new
        </a> */}
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              New Request
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              New Product
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="vendor-create.html">
              New Vendor
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              New User
            </a>
          </li>
        </ul>
        <li className="nav-item">
          <NavLink className="nav-link " to="/requests">
            Requests
          </NavLink>{" "}
          <NavLink className="nav-link " to="/vendors">
            Vendors
          </NavLink>{" "}
          <NavLink className="nav-link " to="/products">
            Products
          </NavLink>
          <NavLink className="nav-link " to="/users">
            Users
          </NavLink>
         
        </li>
      </ul>
    </nav>
  );
}

export default NavPanel;
