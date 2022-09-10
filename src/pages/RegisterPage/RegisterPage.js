import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    name
                    <input
                        type='name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    ></input>
                </label>
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
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
export default RegisterPage;