import {lazy, Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';
import { getToken } from 'redux/AuthSlice';
import {useGetCurrentUserQuery} from 'redux/AuthApi';
import { useSelector } from 'react-redux';
import PublicRoute from 'components/PublicRoute';

const Layout = lazy(() => import ('components/Layout'));
const AuthNavView= lazy(() => import ('views/AuthNavView'));
const SignUpView = lazy(() => import ('views/SignUpView'));
const SignInView = lazy(() => import ('views/SignInView'));
const ContactsView = lazy(() => import ('views/AuthNavView'));


function App(){

  const token = useSelector(getToken);
  useGetCurrentUserQuery(null, {skip: !token });
   
  return(
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