import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

<div>
  function VendorsCreate() {"{"}
  return( &lt;&gt;
  <div>
    <header className="container-fluid justify-content-between d-flex">
      <div>
        <svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            className="ccustom"
            fill="#312ECB"
          />
        </svg>
        <span className="logo-text">Purchase Request System</span>
      </div>
      <a className="btn btn-primary d-flex align-items-center mt-2" href="signin.html">
        Sign In
      </a>
    </header>
    <main>
      <nav>
        <ul className="nav flex-column p-4">
          <div className="dropdown" />
          <a
            className="btn createnewbtn"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className />
            Create new
          </a>
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
            <a className="nav-link active" aria-current="page" href="#">
              Purchases
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Requests
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Products
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Vendors
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Lists
            </a>
          </li>
        </ul>
      </nav>
      <section className="container fluid mx-5 my-2 py-4">
        <h2>New Vendor</h2>
        <hr />
        <form className="row g-3 needs-validation is-invalid" noValidate>
          <div className="col-md-3">
            <label htmlFor="validationCustom01" className="form-label">
              Vendor Code
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationCustom01"
              placeholder="Enter short vendor code"
              required
            />
            <div className="invalid-feedback">Code is required.</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Vendor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter vendor name"
              required
            />
            <div className="invalid-feedback">Name is required.</div>
          </div>
          <div className="col-md-9">
            <label htmlFor="validationCustom06" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationCustom06"
              placeholder="Enter vendor's address"
              required
            />
            <div className="invalid-feedback">Address is required.</div>
          </div>
          <div className="col-md-5">
            <label htmlFor="validationCustom03" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="Enter city" required />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationCustom04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value>
                Select state...
              </option>
              <option>...</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-md-2">
            <label htmlFor="validationCustom05" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="validationCustom05" placeholder="Enter zip code" required />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div className="col-md-5">
            <label htmlFor="validationCustom06" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom06"
              placeholder="Enter phone number"
              required
              style={{ width: 300 }}
            />
            <div className="invalid-feedback">Please provide a valid phone number.</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom07" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationCustom07"
              placeholder="Enter email address"
              required
            />
            <div className="form-control is-invalid">Please provide a valid email address.</div>
          </div>
          <div className="col-md-4 offset-md-7 mt-3">
            <button className="btn btn-outline-primary mt-4" type="button">
              Cancel
            </button>
            <button className="btn btn-primary mt-4" type="submit">
              Save vendor
            </button>
          </div>
        </form>
      </section>
    </main>
  </div>
  {"}"}
</div>;
