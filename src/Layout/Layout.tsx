import React from "react";
import SignIn from "../Pages/SignIn/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Svg/Logo";
import { AuthGuard } from '../Guards/AuthGuard';
import { NoAuthGuard } from '../Guards/NoAuthGuard';
export default function Layout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NoAuthGuard Child={SignIn} />,
    },
    {
      path: "/dashboard",
      element: <AuthGuard Child={Dashboard} />,
    },
  ]);

  return (
    <div className="bg-gray-900 h-full">
      <div className="w-full flex items-center justify-center mt-12 mb-12">
        <Logo />
      </div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
