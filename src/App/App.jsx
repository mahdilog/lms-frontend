import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes";
import { getToken } from "../helper/tokenHandler";

function App() {
  const [token, setToken] = useState(getToken());
  useEffect(() => {
    const _token = getToken();
    _token ? setToken(true) : setToken(false);
  }, [getToken(), window.location.pathname]);
  return (
    <Router>
      <Routes>
        {routes.map((RouteItems, key) => {
          if (
            !token &&
            (RouteItems.path === "/login" ||
              RouteItems.path === "/register" ||
              RouteItems.path === "/forget-password")
          ) {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <RouteItems.layout>
                    <RouteItems.Component />
                  </RouteItems.layout>
                }
              />
            );
          } else if (
            token &&
            RouteItems.path !== "/login" &&
            RouteItems.path !== "/register" &&
            RouteItems.path !== "/forget-password"
          ) {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <RouteItems.layout>
                    <RouteItems.Component />
                  </RouteItems.layout>
                }
              />
            );
          }
        })}
        {!token && <Route path="/" element={<Navigate to={"/login"} />} />}
        {token && <Route path="/login" element={<Navigate to={"/"} />} />}
        {token && <Route path="/register" element={<Navigate to={"/"} />} />}
        {token && (
          <Route path="/forget-password" element={<Navigate to={"/"} />} />
        )}
        {/* <Route path={"*"} element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
