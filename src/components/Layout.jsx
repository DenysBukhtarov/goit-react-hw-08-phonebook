import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedin } from "redux/AuthSlice";
import AppBar from './AppBar/AppBar';

export default function Layout() {
    const isLoggedin = useSelector(getLoggedin);
    return (
        <>
        {isLoggedin && <AppBar />}
        <Outlet />
        </>
    );
}