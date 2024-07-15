import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Cars from "../pages/Cars";
import AddCar from "../pages/AddCar";
import EditCar from "../pages/EditCar";

const ListRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/add",
        element: <AddCar />,
      },
      {
        path: "/cars/edit/:carId",
        element: <EditCar />,
      },
    ],
  },
]);

export default ListRouter;
