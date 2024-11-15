
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from '../layouts/Home';
import Pages from '../componants/Pages/Pages';
import Login from '../../src/componants/login/Login';
import PagesDetails from '../componants/Pages/PagesDetails';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"",
                element: <Navigate to={"/category/01"}></Navigate>

            },
            {
                path: "/category/:id",
                element: <Pages></Pages>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]

    },
    {
        path: "/pagesDetails/:id",
        element: <PagesDetails></PagesDetails>,
        loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)


    },
    {
        path: "/login",
        element: <Login></Login>

    }
])

export default Router

