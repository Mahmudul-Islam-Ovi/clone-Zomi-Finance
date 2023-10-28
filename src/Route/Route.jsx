import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Earn from "../pages/Earn/Earn";
import HomeDashboard from "../pages/Dashboard/HomeDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/dashboard",
        element: <HomeDashboard></HomeDashboard>,
      },
      {
        path: "/earn",
        element: <Earn></Earn>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
