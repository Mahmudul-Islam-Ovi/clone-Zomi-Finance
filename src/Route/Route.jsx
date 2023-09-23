import {
    createBrowserRouter,
  
  } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import Main from "../Layout/Main";
import About from "../pages/About/About";


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
          path: "/about",
          element: <About></About>,
        },
      ]
    },
  
  ])