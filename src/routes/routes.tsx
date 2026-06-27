import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import { ProductListing } from "../pages/ProductListing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductListing />,
      },
      {
        path: "products",
        element: <ProductListing />,
      },
      // {
      //   path: "products/:id",
      //   element: <ProductPage />,
      // },
      { path: "*", element: <div>404</div> },
    ],
  },
]);
