import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/login/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>error</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "alltoys",
                element: <AllToys />,
                loader: () => fetch("http://localhost:5000/allData")
            },
            {
                path: "blogs",
                element: <Blogs />
            }
        ]
    },
]);
export default router;