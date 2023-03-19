import { Navigate } from "react-router-dom";
import { useAuth } from 'hooks';

export const  PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const {isLoggedin, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedin && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};