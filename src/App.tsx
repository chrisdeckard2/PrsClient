import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";

import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import VendorCreate from "./vendors/VendorCreate";
import VendorEdit from "./vendors/VendorEdit";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import UserCreate from "./users/UserCreate";
import UserEdit from "./users/UserEdit";
import UsersPage from "./users/UsersPage";
import ProductCreate from "./products/ProductCreate";
import ProductEdit from "./products/ProductEdit";
import ProductsPage from "./products/ProductsPage";
import RequestCreate from "./requests/RequestCreate";
import RequestEdit from "./requests/RequestEdit";
import RequestsPage from "./requests/RequestPage";
import RequestDetails from "./requests/RequestDetails";
import RequestlineEditPage from "./requestlines/RequestLineEdit";
import RequestlineCreatePage from "./requestlines/RequestLinesCreatePage";
import NavPanel from "./NavPanel";
import SignInPage from "./account/SignInPage";
import { User } from "./users/User";
import { UserContext } from "./users/UserContext";


function getPersistedUser() {
  const userAsJSON = localStorage.getItem("user");
  if (!userAsJSON) return undefined;
  const user = JSON.parse(userAsJSON);
  return user;
}




function App() {
const [user, setUser] = useState<User | undefined>(getPersistedUser());


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
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
        <main>

          <NavPanel />
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<IndexPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path={`users/edit/:id`} element={<UserEdit />} />
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="/vendor/create" element={<VendorCreate />} />
            <Route path={`vendor/edit/:id`} element={<VendorEdit />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="/product/create" element={<ProductCreate />} />
            <Route path={`product/edit/:id`} element={<ProductEdit />} />
            <Route path="requests" element={<RequestsPage />} />
            <Route path="/request/create" element={<RequestCreate />} />
            <Route path={`request/edit/:id`} element={<RequestEdit />} />
            <Route path="/request/review/:Id" element={<RequestDetails />} />
            <Route path={`request/review/:Id/requestLines/create`} element={<RequestlineCreatePage />} />
            <Route path={`request/detail/:Id/requestline/edit/:requestlineId`} element={<RequestlineEditPage />} />
            <Route path={`requestlines/create/:requestid`} element={<RequestlineCreatePage />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
