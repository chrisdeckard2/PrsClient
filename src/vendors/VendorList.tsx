import { useState, useEffect, SyntheticEvent } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorAPI";
import { Link, NavLink } from "react-router-dom";

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
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      // Assuming there's a delete method in vendorAPI
      await vendorAPI.remove(vendor.id);
      setVendors(vendors.filter(v => v.id !== vendor.id));
    }
  }

  return (
    <div className="container-fluid list d-flex flex-wrap justify-content-center bg-body-tertiary p-3">
      <section className="d-flex flex-wrap gap-4 list">
      {vendors.map((vendor) => (


        


        <div className="card mt-" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className=" d-flex justify-content-between  ">
            <div>
              <h5 className="card-title">{vendor.name}</h5>
              <span className="badge text-bg-secondary">{vendor.code}</span>
            </div>
            <div className="btn-group dropend">
              <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="text-primary fw-semibold ">
                  <svg className="bi m-2" width={30} height={20} fill="currentColor">
                    <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/edit" className="dropdown-item">
                    Edit
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="delete">
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <section>
            <p className="card-text text-secondary m-0 p-0">{vendor.address}</p>
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
