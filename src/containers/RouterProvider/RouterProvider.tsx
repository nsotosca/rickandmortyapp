import {
  createBrowserRouter,
  RouterProvider as Provider,
} from "react-router-dom";
import App from "../../App";
import AboutUs from "../AboutUs";
import Character from "../Character";
import Characters from "../Characters";
import Home from "../Home";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/characters/:page",
        element: <Characters />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

const RouterProvider = () => <Provider router={router} />;

export default RouterProvider;
