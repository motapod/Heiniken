import { lazy } from "react";

const Main = lazy(() => import("./Main"));

const sessionsRoutes = [
  
  {
    path: "/view/main",
    component: Main
  }
];
const routes = [
  ...sessionsRoutes,
  {
    path: "/"
  }
];


export default routes;
