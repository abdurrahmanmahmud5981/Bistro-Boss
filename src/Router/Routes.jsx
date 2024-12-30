import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: "error",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu/> },
      { path: "/contact", element: <div>Contact</div> },
    ],
  },
]);
