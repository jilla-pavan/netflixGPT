import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { useDispatch } from "react-redux";

function Body() {
  const dispatch = useDispatch();
  const appRoot = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  
  return (
    <div className="">
      <RouterProvider router={appRoot}> </RouterProvider>
    </div>
  );
}

export default Body;
