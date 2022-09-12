import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";

import s from './RegisterPage.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <div className={s.container}>
            <h1 className={s.title}>Register to save contacts and edit your contact book</h1>
            <Form onSubmit={handleSubmit} className={s.form}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
                    Register
                </Button>
            </Form>

        </div>
    )
}
export default RegisterPage;