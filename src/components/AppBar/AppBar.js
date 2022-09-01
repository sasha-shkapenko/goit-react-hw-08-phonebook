import { NavLink } from "react-router-dom";

export const AppBar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </nav>
    )
}