import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            Component: Home,
        },
        {
            path: "/home",
            Component: Home
        },
        {
            path: "/apps",
            element: <Apps/>
        },
    ]
  },

]);

export default router;