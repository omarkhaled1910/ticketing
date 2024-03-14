import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Pages/ContactUs";
import LandingPage from "../Pages/LandingPage";
import Todo from "../Pages/Todo";
import AppLayout from "../Components/AppLayout/AppLayout";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import AddProduct from "../Pages/dashboard/AddProduct";
import Products from "../Pages/Products";
import { dahboarRoutes } from "./dashboard-routes";
import ProducrDetails from "../Pages/ProducrDetails";
import Categories from "../Pages/Categories";

export const appRoutes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Todo />,
        path: "/todo",
      },
      {
        element: <ContactUs />,
        path: "/contact",
      },
      {
        element: <Products />,
        path: "/products",
      },
      {
        element: <Categories />,
        path: "/categories",
      },
      {
        element: <ProducrDetails />,
        path: "/product/:id",
      },
      {
        element: <AboutUs />,
        path: "/about-us",
      },
      {
        element: <Login />,
        path: "/login",
      },

      ...dahboarRoutes,
    ],
  },
  {
    element: <AppLayout isHome />,
    children: [
      {
        element: <LandingPage />,
        path: "/",
      },
    ],
  },
]);
