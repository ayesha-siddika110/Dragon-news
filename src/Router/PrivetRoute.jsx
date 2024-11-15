import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../componants/login/LoginUser/Loading";


const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        <Loading></Loading>   //privet router ta kaj kortechena
    }
    if(user&& user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to="/login/loginUser"></Navigate>
    );
};

export default PrivetRoute;