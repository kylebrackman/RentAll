import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then(res => res.json())
            .then(user => {
                if (!user.errors) {
                    signup(user);
                    navigate('/createprofile');
                } else {
                    setUsername('');
                    setPassword('');
                    setPasswordConfirmation('');
                    const errorLis = user.errors.map(e => <li>{e}</li>);
                    setErrorsList(errorLis);
                }
            });
    }

    return (
        <div className="signup-container">
            <h1 className="signup-header">Sign Up Today!</h1>
            <div className="signup-form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                    /> <br />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    /> <br />
                    <input
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        placeholder="Confirm Password"
                    /> <br />
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
                <ul>
                    {errorsList}
                </ul>
                <h2>Already Have an Account?</h2>
                <button className="sign-up-button" onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className="signup-cover">
                <p>
                    <p className='signup-cover-header'>Convenience at your fingertips</p>
                    <br />
                    Our user-friendly platform makes it a breeze to find and rent the gear you need.
                    Simply search for your desired item, select your rental dates, and connect with local gear owners who are passionate about sharing their equipment and knowledge.
                </p>
            </div>
        </div>
    );
}

export default Signup;