import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import NavPanel from "./Navpanel";
import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main>
          <NavPanel />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="vendors" element={<VendorsPage />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
