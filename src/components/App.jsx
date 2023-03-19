import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import {RestrictedRoute} from './RestrictedRoute';
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "redux/hooks";


const Homepage = lazy(()) => import('../pages/Home');
const RegisterPage = lazy(()) => import('../pages/Register');
const LoginPage = lazy(()) => import('../pages/Login');
const ContactsPage = lazy(()) => import('../pages/Contacts');


export const App = () => {

  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   
  return isRefreshing ? (
<Box>
  <Suspense>
   <ChakraProvider>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route 
    index
    element={
      <PublicRoute restricted>
      <AuthNavView />
      </PublicRoute>
    }
    />
    
    <Route 
    path="/register"
    element={
      <PublicRoute restricted>
      <SignUpView />
      </PublicRoute>
    }
    />

<Route 
    path="/login"
    element={
      <PublicRoute restricted>
      <SignInView />
      </PublicRoute>
    }
    />

<Route 
    path="/contacts"
    element={
      <PublicRoute restricted>
      <ContactsView />
      </PublicRoute>
    }
    />

    <Route path="*" element={<Navigate to="/" />} />
  </Route>
</Routes>


    <ToastContainer
    autoClose={2000}
    position="top-right"
    hideProgressBar={true}
    />
   </ChakraProvider>
  </Suspense>
</Box>
  );

}

export default App;