import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlice';

export default function PublicRoute({ children, resricted = false }){
    const isLoggedin = useSelector(getLoggedin);
    const shouldRedirect = isLoggedin && restricted;
    return shouldRedirect ? <Navigate to="/contacts" /> : children;
}