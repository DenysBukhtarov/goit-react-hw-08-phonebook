import { AuthNav } from "components/AuthNav/AuthNav";
import {UserMenu} from '../UserMenu/UserMenu';
import {useAuth} from 'hooks/useAuth';
import {Navigation} from '../Navigation/Navigation';
import {Container, Header} from './AppBar.styled';

export const  AppBar = () => {
    const {isLoggedIn} = useAuth();
    
    return (
        <Header>
            <Container>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav/>}
            </Container>
        </Header>
    );
};

