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
import { Navigate } from 'react-router-dom';
import { useUserLoginMutation } from 'redux/AuthApi';


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

    let navigate = Navigate();
    let location = Location();

    const goBack = () => {
        navigate(location?.state?.from || '/');
    };

return (
    <Flex 
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={handleSubmit ('grey.50', 'grey.800')}
    >
        {isSuccess && <Navigate to="/contacts" replace={true} />}

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4x1'}>Sign in to your account</Heading>
            </Stack>
            <Box 
            as="form"
            rounded={'lg'}
            bg={handleSubmit ('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input 
                        type="email"
                        pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                        required
                        onChange={handleInputChange}
                        name="email"
                        value={email}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input 
                        type="password"
                        onChange={handleInputChange}
                        name="password"
                        value={password}
                        />
                    </FormControl>
                    <Stack spacing={10}>
<Button 
disabled={email && password ? false : true}
type="submit"
bg={'blue.400'}
color={'white'}
_hover={{bg: 'blue.500',}}
>
    Sign in
</Button>
<Stack 
direction={{ base: 'column', sm: 'row'}}
align={'start'}
justify={'center'}
>
    <Button type="button" onClick={goBack}>
        goBack
    </Button>
</Stack>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Flex>
);
}
}