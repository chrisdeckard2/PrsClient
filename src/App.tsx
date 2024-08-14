import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
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
              <div className="dropdown">
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
              </div>
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
            <h2>Purchase Request System</h2>
            <hr />
            <p>This application will allow you to make purchase Requests</p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
