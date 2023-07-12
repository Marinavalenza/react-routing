import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./products/Home.jsx";
import Dashboard from "./Dashboard.jsx";
import Login from "../components/login/Login.jsx";
import Error from "./error.jsx";

import DefaultLayout from "../layouts/defaultLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>ABOUT</h1>} />
      <Route
        path="/who"
        element={
          <div>
            <iframe
              width="100%"
              height="600"
              src="https://edgemony.com"
            ></iframe>
          </div>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
