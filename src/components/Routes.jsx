import { useRoutes, Navigate } from "react-router";
import AllProducts from "../pages/AllProducts";
import AllUserCarts from "../pages/AllUserCarts";
import SingleProduct from "../pages/SingleProduct";

function Routes() {
  let element = useRoutes([
    { path: "products", element: <AllProducts /> },
    { path: "products/:id", element: <SingleProduct /> },
    { path: "carts", element: <AllUserCarts /> },
    { path: "*", element: <Navigate to={"products"} /> },
  ]);

  return element;
}

export default Routes;
