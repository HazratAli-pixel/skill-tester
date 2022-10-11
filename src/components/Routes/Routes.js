import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Quiztest from "../Quiztest/Quiztest";

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
                path:'statistics',
                element: <h1>this is statistics</h1>,
            },
            {
                path:'blog',
                element: <h1>this is blog page</h1>,
            },
            {
                path: 'quiz/:quizid',
                loader: async ({params})=>{
                    return fetch(`
                    https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
                },
                element: <Quiztest></Quiztest>,
            }

        ],
    },
])