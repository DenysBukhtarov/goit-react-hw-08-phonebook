import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useUserSignupMutation } from 'redux/AuthApi';


export default function SignupView() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userSignup, {isSuccess}] = useUserSignupMutation();
   

    const handleInputChange = ({ currentTarget: {name, value} }) => {
    switch (name) {
        case 'name':
        setName(value);
        break;
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

const handleSubmit = async e => {
    e.preventDefault();
    await userSignup({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');

};

    let navigate = useNavigate();
    let location = useLocation();

    const goBack = () => {
        navigate(location?.state?.from || '/');
    };

    return(
        <Flex 
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('grey.50', 'grey.800')}
        >
            {isSuccess && <Navigate to="/contacts" replace={true} />}
    
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4x1'} textAlign={'center'}>
                        Sign in to your account
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features 
                        </Text>
                </Stack>
                <Box 
                as="form"
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}
                autoComplete="off"
                onSubmit={handleSubmit}
                >
                    <Stack spacing={4}>
                    <FormControl id="firstName" isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input 
                            type="text"
                            value={name}          
                            onChange={handleInputChange}
                            name="name"
                            />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input 
                            type="email"
                            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                            onChange={handleInputChange}
                            name="email"
                            value={email}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                            <Input 
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleInputChange}
                            name="password"
                            value={password}
                            minLength={7}
                            />
                            <InputRightElement h={'full'}>
<Button
variant={'ghost'}
onClick={() => setShowPassword(showPassword => !showPassword)
}
>
    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
</Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
    <Button 
    type="submit"
    disabled={name && email && password ? false : true}
    loadingText="Submitting"
    size="lg"
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
    <Stack pt={6}>
        <Text align={'center'}>
            Already a user?(' ')
            <Link color={'blue.400'} as={NavLink} to="/login">
                Login
            </Link>
        </Text>
    </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
    }