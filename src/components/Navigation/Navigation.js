import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
            {isLoggedIn ? (
                <NavLink
                    to="/contacts"
                >
                    Contacts
                </NavLink>
            ) : (
                <NavLink
                    to="/"
                // className={({ isActive }) => {
                //     return isActive ? [s.link, s.active].join(' ') : s.link;
                // }}
                >
                    Home page
                </NavLink>
            )}
        </nav>
    );
}