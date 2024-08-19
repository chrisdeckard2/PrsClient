import { useState, useEffect, SyntheticEvent } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorAPI";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";

function VendorList() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [busy, setBusy] = useState(false);

  async function getVendors() {
    setBusy(true);
    let data = await vendorAPI.list();
    setVendors(data);
    setBusy(false);
  }

  useEffect(() => {
    getVendors();
  }, []);

  async function remove(vendor: Vendor) {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      await vendorAPI.delete(vendor.id);
      let updatedVendors = vendors.filter((v) => v.id !== vendor.id);
      setVendors(updatedVendors);
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
        {vendors.map((vendor) => (
          <div key={vendor.id} className="card mt-" style={{ width: "18rem" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">{vendor.name}</h5>
                  <span className="badge text-bg-primary">{vendor.code}</span>
                </div>
                <div className="btn-group dropend">
                  <Dropdown aria-expanded="false">
                    <Dropdown.Toggle variant="" className="no-caret">
                      <svg className="text-primary" width={20} height={20} fill="currentColor">
                        <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-dropdown">
                      <li>
                        <NavLink to={`/vendor/edit/${vendor.id}`} className="dropdown-item">
                          Edit
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="#"
                          className="dropdown-item"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={(event: SyntheticEvent) => {
                            event.preventDefault();
                            remove(vendor);
                          }}
                        >
                          Delete
                        </NavLink>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <section>
                <p className="card-text text-secondary mt-2 mb-0">{vendor.address}</p> {/* Added margin-top (mt-2) */}
                <p className="text-secondary m-0 p-0">{vendor.phone}</p>
                <p className="text-secondary m-0 p-0">{vendor.email}</p>
              </section>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default VendorList;
