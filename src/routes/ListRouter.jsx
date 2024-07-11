import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";

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
    ],
  },
]);

export default ListRouter;
