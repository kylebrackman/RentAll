import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const defaultImageUrl = 'https://raw.githubusercontent.com/kylebrackman/RentAll/main/client/public/User%20Default%20Pic.png';

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((user) => {
                if (!user.error) {
                    login(user);
                    navigate('/allItems');
                } else {
                    setEmail('');
                    setPassword('');
                    const errorLi = <li>{user.error}</li>;
                    setError(errorLi);
                }
            });
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <img src={defaultImageUrl} alt="Default" className="login-placeholder-image" />
            <br />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e-mail"
                />
                <br />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <br />
                <button type="submit" className="login-button">Log In</button>
            </form>
            <div className="error-container">{error}</div>
        </div>
    );
};

export default Login;