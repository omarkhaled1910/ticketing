import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
