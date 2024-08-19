import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import NavPanel from "./Navpanel";
import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import VendorCreate from "./vendors/VendorCreate";
import VendorEdit from "./vendors/VendorEdit";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function App() {
  



  return (
    <BrowserRouter>
      <>
        <Header />
        <main>
          <Toaster
            toastOptions={{
              success: {
                iconTheme: {
                  primary: "#0d6efd",
                  secondary: "white",
                },
              },
              style: {
                maxWidth: 500,
              },
            }}
          />
        
          <NavPanel />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="/vendor/create" element={<VendorCreate />} />
            <Route path={`vendor/edit/:id`} element={<VendorEdit />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
