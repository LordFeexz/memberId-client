import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/home";
import Login from "../views/login";
import Register from "../views/register";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
