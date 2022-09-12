import { NavLink } from 'react-router-dom';
import s from './Authentication.module.css'
import Nav from 'react-bootstrap/Nav';

export default function AuthenticationNav() {
    return (
        <div className={s.wrap}>
            <Nav.Link>
                <NavLink
                    to="/login"
                    className={s.link}
                >
                    Sign in
                </NavLink>
            </Nav.Link>

            <Nav.Link >
                <NavLink
                    to="/register"
                    className={s.link}
                >
                    Register
                </NavLink>
            </Nav.Link>


        </div>
    );
}