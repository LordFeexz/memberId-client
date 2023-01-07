import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/home";
import Login from "../views/login";
import Register from "../views/register";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        return redirect("/login");
      }
      return null;
    },
  },
]);
