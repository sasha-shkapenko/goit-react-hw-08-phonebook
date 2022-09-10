import { NavLink } from 'react-router-dom';

export default function AuthenticationNav() {
    return (
        <div >
            <NavLink
                to="/login"
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
            >
                Registration
            </NavLink>
        </div>
    );
}