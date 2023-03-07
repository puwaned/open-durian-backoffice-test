import { RouteObject } from "react-router-dom";
import AppLayout from "../layouts";
import LoginPage from "../pages/login";

export const APP_ROUTE: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: '/login',
    element: <LoginPage />
  }
];
