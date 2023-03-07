import { RouteObject } from "react-router-dom";
import AppLayout from "../layouts";
import CoursePage from "../pages/course";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import UserPage from "../pages/users";

export const APP_ROUTE: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/course",
        element: <CoursePage />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
