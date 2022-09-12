import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import s from './Navigation.module.css'


export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div className={s.wrap}>
            <Nav.Link >
                <NavLink
                    to="/"
                    className={s.link}
                >
                    Home page
                </NavLink>
            </Nav.Link>
            {isLoggedIn && (
                <Nav.Link>
                    <NavLink
                        to="/contacts"
                        className={s.link}
                    >
                        Contacts
                    </NavLink>
                </Nav.Link>
            )}
        </div>
    );
}