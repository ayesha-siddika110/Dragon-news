
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from '../layouts/Home';
import Pages from '../componants/Pages/Pages';
import Login from '../../src/componants/login/Login';
import PagesDetails from '../componants/Pages/PagesDetails';
import PrivetRoute from './PrivetRoute';
import LoginUser from '../componants/login/LoginUser/LoginUser';
import Loginpage from '../componants/login/Register/Registerpage';

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
        //<PrivetRoute> //privet router na dile kaj hocche
        
        //</PrivetRoute>,
        loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)


    },
    {
        path: "/login",
        element: <Login></Login>,
        children: [
            {
                path: "/login/loginUser",
                element: <LoginUser></LoginUser>

                
            },
            {
                path: "/login/registration",
                element: <Loginpage></Loginpage>
            }
        ]

    }
])

export default Router

