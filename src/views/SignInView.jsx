import{
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import {toast} from 'react-toastify';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useUserLoginMutation } from 'redux/AuthApi';
import { set } from 'immer/dist/internal';

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userLogin, {isSuccess, isError}] = useUserLoginMutation();
    useEffect(() => {
        isError && toast.error('Invalid email or password');
}, [isSuccess, isError]);

const handleInputChange = ({ currentTarget: {name, value} }) => {
    switch (name) {
        case 'email':
            setEmail(value);
            break;
            case 'password':
            setPassword(value);
            break;
            default:
                return;
    }
};

const handleSubmit = e => {
    e.preventDefault();
    userLogin({
        email: email,
        password: password,
    });
    setEmail('');
    setPassword('');

    let navigate = useNavigate();
    let location = useLocation();

    const goBack = () => {
        navigate(location?.state?.from || '/');
    };

return (
    <Flex 
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('grey.50', 'grey.800')}
    >
        
    </Flex>
)

 }
}