import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Pages/ContactUs";
import LandingPage from "../Pages/LandingPage";
import Todo from "../Pages/Todo";
import AppLayout from "../Components/AppLayout/AppLayout";
import Products from "../Pages/Products";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";

export const appRoutes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <LandingPage />,
        path: "/",
      },
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
        element: <AboutUs />,
        path: "/about-us",
      },
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
]);
