import { lazy } from "react";

export const routes = [
  {
    path: "/",
    element: lazy(() => import("../pages/Home")),
  },
  {
    path: "/products",
    element: lazy(() => import("../pages/Products")),
  },
  {
    path: "/settings",
    element: lazy(() => import("../pages/Settings")),
  },
];
