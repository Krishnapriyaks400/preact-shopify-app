import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { routes } from "./route";
import Loading from "../component/Loading";

const Router = () => {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          element={
            <Suspense fallback={<Loading />}>
              <route.element />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
