import {Navigate} from 'react-router-dom';
import { useAuth } from 'redux/hooks';

export const  PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedin = useAuth();
  
    return isLoggedin ? <Navigate to={redirectTo} /> : Component;
}