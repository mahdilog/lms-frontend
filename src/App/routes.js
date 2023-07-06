import React, { lazy } from "react";

import Public from "../layout/public";
import Private from "../layout/private";

const Login = lazy(() => import("../container/login"));
const Dashboard = lazy(() => import("../container/dashborad"));

const routes = [
  {
    path: "/login",
    exact: true,
    layout: Public,
    Component: Login,
    name: "ورود",
  },
  {
    path: "/",
    exact: true,
    layout: Private,
    Component: Dashboard,
    name: "ورود",
  },
];

export default routes;
