import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Nav from 'react-bootstrap/Nav';

import s from './AppBar.module.css'

import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import AuthenticationNav from "components/AuthenticationNav";

export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <Nav variant="tabs" defaultActiveKey="/home" className={s.nav}>
            <Nav.Item>
                <Navigation />
            </Nav.Item>
            <Nav.Item>
                {isLoggedIn ? <UserMenu /> : <AuthenticationNav />}
            </Nav.Item>
        </Nav>
    )
}