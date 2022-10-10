import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <h1>this Home page</h1>,
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