import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/login/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/MyToys/UpdateToy";
import SingleDetails from "../pages/SingleDetails/SingleDetails";
import PrivateRoutes from "./privateRoutes";

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
                path: "singledata/:id",
                element: <PrivateRoutes>
                    <SingleDetails />
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/alldata/${params.id}`)
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
                element: <AllToys />
            },
            {
                path: "mytoys",
                element: <MyToys />
            },
            {
                path: "addtoy",
                element: <AddToy />
            },
            {
                path: "updatetoy/:id",
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`http://localhost:5000/alldata/${params.id}`)
            },
            {
                path: "blogs",
                element: <Blogs />
            }
        ]
    },
]);
export default router;