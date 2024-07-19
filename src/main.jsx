import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./services/redux/store.js";
import ListRouter from "./routes/ListRouter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "chart.js/auto";
import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { NotificationProvider } from "./contexs/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <RouterProvider router={ListRouter} />
      </NotificationProvider>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
