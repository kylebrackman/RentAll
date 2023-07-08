import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/user';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                first_name: firstName,
                last_name: lastName,
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
                    setFirstName('');
                    setLastName('');
                    setPassword('');
                    setPasswordConfirmation('');
                    const errorDivs = user.errors.map(e => <div>{e}</div>);
                    setErrorsList(<div style={{color:"red"}}>{errorDivs}</div>);
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
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e-mail"
                    /> <br />
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First Name"
                    /> <br />
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last Name"
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