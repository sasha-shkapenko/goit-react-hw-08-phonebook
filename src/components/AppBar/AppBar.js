import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthenticationNav from "components/AuthenticationNav";

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthenticationNav />}
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink> */}
        </header>
    )
}