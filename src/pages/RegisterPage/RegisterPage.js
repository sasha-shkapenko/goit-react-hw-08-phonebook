import { useState } from "react";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Register Page</h1>
            <label>
                name
                <input
                    type='name'
                    name='name'
                    value={name}
                ></input>
            </label>
            <label>
                email
                <input
                    type='email'
                    name='email'
                    value={email}
                ></input>
            </label>
            <label>
                password
                <input
                    type='password'
                    name='password'
                    value={password}
                ></input>
            </label>
            <button>Register</button>
        </div>
    )
}
export default RegisterPage;