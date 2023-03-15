import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    userBreakpointValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function WithBackgroubdImage() {
    return (
        <Flex 
        w={'full'}
        h={'100vh'}
        backgroundImage={
            'url()'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
            <VStack 
            w={'full'}
            justify={'center'}
            px={userBreakpointValue({base: 4, md: 8})}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
            >

<Stack maxW={'2x1'} align={'flex-start'} spacing={6}>
    <Text 
    color={'white'}
    fontWeight={700}
    lineHeight={1.2}
    fontSize={userBreakpointValue({base: '3x1', md: '4x1'})}
    >
        Welcome to the phonebook to take advantage of all the features,
        register or login.
    </Text>
<Stack direction={'row'}>
    <Button 
    as={NavLink}
    to="register"
    bg={'blue.400'}
    rounded={'full'}
    color={'white'}
    _hover={{bg: 'blue.500'}}
    >
        Sign Up
    </Button>
    <Button 
    as={NavLink}
    to="login"
    bg={'whiteAlpha.300'}
    rounded={'full'}
    color={'white'}
    _hover={{bg: 'whiteAlpha.500'}}
    >
        Sign In
    </Button>

</Stack>
</Stack>
</VStack>
</Flex>
    );
}