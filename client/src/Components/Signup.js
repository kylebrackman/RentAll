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
        console.log('password:', password);
        console.log('passwordConfirmation:', passwordConfirmation);
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    password: password,
                    password_confirmation: passwordConfirmation,
                }
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
                    setErrorsList(user.errors.map(e => <div key={e}>{e}</div>));
                }
            });
    }

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" >
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                </a>
                <div class="w-full max-w-md" style={{justifyContent: 'center', alignContent: 'center'}}>
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-20 h-15 mr-2" src={process.env.PUBLIC_URL + "/favicon.ico"} alt="logo" style={{ borderRadius: 10 }} />
                    RentAll
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form class="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="e-mail" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >First Name</label>
                                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder="First Name" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Last Name</label>
                                <input id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    placeholder="Last Name" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password" name="password" id="passwordConfirmation" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={passwordConfirmation}
                                    onChange={e => setPasswordConfirmation(e.target.value)} />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                                </div>
                            </div>
                            {errorsList.length > 0 && (
                                <div className="error-messages" style={{ color: 'red' }}>
                                    {errorsList}
                                </div>
                            )}
                            {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}

                        </form>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                        </p>
                    </div>
                </div>
                </div>
                <div class="flex flex-col items-center mt-8">
                    <img src='/photos/kayak.png' class="mx-auto mb-4" alt="Kayak Image" style={{width: '60%', borderRadius: 10}}/>
                    <p class="mb-3 text-gray-500 text-white bg-slate-800 px-6 py-4 rounded-lg text-center md:max-w-md">
                        Our user-friendly platform makes it a breeze to find and rent the gear you need. Simply browse for your desired item, select your rental dates, and connect with local gear owners who are passionate about sharing their equipment and knowledge.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default Signup;