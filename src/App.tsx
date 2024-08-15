import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import NavPanel from "./Navpanel";

function App() {
  return (
    <>
      <div>
        <Header />

        <main>
          <NavPanel />
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
