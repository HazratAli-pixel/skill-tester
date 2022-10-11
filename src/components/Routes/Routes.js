import { createBrowserRouter } from "react-router-dom";
import Chart2 from "../Chart2/Chart2";
import ChartLayout from "../ChartLayout/ChartLayout";
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
                loader: async ()=>{
                    return fetch(`
                    https://openapi.programming-hero.com/api/quiz`)
                },
                element: <ChartLayout></ChartLayout>,
                errorElement:<Chart2></Chart2>
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