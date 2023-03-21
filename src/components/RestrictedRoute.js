import {Navigate} from 'react-router-dom';
import { useAuth } from 'hooks';

export const  RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedin = useAuth();
  
    return isLoggedin ? <Navigate to={redirectTo} /> : Component;
}