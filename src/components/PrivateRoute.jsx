import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    let token = JSON.parse(localStorage.getItem("BearerToken"));
   /* if(!token)
    {
        return <Navigate to="/applicantlogin"/>
    } */
    return children;
}