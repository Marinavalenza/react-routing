import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "./routes/error.jsx";
import Locations from "./routes/locations/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/welcome",
        element: <h1>Home</h1>,
      },
      // // {
      // //   path: "/about",
      // //   element: <About />,
      // // },
      // {
      //   path: "/contacts",
      //   element: <Contacts />,
      // },
      {
        path: "/locations",
        element: <Locations />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
