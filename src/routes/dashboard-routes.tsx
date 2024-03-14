import AddProduct from "../Pages/dashboard/AddProduct";
import Products from "../Pages/dashboard/Products";

const PREFIX = "/dashboard";
export const dahboarRoutes = [
  {
    element: <Products />,
    path: `${PREFIX}/products`,
  },
  {
    element: <AddProduct />,
    path: `${PREFIX}/products/add`,
  },
];
