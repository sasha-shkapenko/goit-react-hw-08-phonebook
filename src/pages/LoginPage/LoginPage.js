import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Login page</h1>
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
        </div>
    )
}
export default LoginPage;