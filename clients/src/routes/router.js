import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);
