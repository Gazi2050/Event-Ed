import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Details from "../Details/Details";
import Contact from "../Contact/Contact";
// import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/Profile',
                element: <></>
            },
            {
                path: '/Details/:id',
                element: <Details></Details>,
                loader: () => fetch('/Event.json')
            },
        ]
    }
]);

export default router;