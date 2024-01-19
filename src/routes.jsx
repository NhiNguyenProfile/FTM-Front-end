import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SimpleLayout from "./layouts/simple/SimpleLayout";
import DashboardLayout from "./layouts/dashboard/DashBoardLayout";
import Management from "./pages/Management";
import HomePage from "./pages/HomePage";
import Account from "./pages/Account";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: "404", element: <Error /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/homepage" />, index: true },
        { path: "homepage", element: <HomePage /> },
        { path: "account", element: <Account /> },
        { path: "management", element: <Management /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
