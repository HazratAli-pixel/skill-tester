import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/quiz',
                element: <h1>this is quiz</h1>,
            },
            {
                path:'/statistics',
                element: <h1>this is statistics</h1>,
            },
            {
                path:'/blog',
                element: <h1>this is blog page</h1>,
            },

        ],
    },
])