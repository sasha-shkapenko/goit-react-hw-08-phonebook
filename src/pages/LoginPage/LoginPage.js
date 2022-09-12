import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";

import s from './LoginPage.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
        <div className={s.container}>
            <h1 className={s.title}>Sign in to save contacts and edit your contact book</h1>
            <Form onSubmit={handleSubmit} className={s.form}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className={s.btn}>
                    Sign in
                </Button>
            </Form>
        </div>
    )
}
export default LoginPage;