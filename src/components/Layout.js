import { Outlet } from "react-router-dom";
import { AppBar } from './AppBar/AppBar';
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
    
    return (
       <div>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
       </div>
    );
}