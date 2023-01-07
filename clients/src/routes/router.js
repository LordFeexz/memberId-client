import { createBrowserRouter } from "react-router-dom";
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
]);
