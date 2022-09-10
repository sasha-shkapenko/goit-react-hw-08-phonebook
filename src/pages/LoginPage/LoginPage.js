import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";



const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    email
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    ></input>
                </label>
                <label>
                    password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    ></input>
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginPage;