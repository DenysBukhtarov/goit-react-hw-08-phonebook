import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlice';
import React from 'react';

export default function PublicRoute({ children, resricted = false }){
    const isLoggedin = useSelector(getLoggedin);
    const shouldRedirect = isLoggedin && resricted;
    return shouldRedirect ? <Navigate to="/contacts" /> : children;
}