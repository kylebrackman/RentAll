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
                    setErrorsList(<div style={{ color: "red" }}>{errorDivs}</div>);
                }
            });
    }

    return (
        // <div className="signup-container">
        //     <h1 className="signup-header">Sign Up Today!</h1>
        //     <div className="signup-form-container">
        //         <form onSubmit={handleSubmit}>
        //             <input
        //                 type="text"
        //                 id="email"
        //                 value={email}
        //                 onChange={e => setEmail(e.target.value)}
        //                 placeholder="e-mail"
        //             /> <br />
        //             <input
        //                 type="text"
        //                 id="firstName"
        //                 value={firstName}
        //                 onChange={e => setFirstName(e.target.value)}
        //                 placeholder="First Name"
        //             /> <br />
        //             <input
        //                 type="text"
        //                 id="lastName"
        //                 value={lastName}
        //                 onChange={e => setLastName(e.target.value)}
        //                 placeholder="Last Name"
        //             /> <br />
        //             <input
        //                 type="password"
        //                 id="password"
        //                 value={password}
        //                 onChange={e => setPassword(e.target.value)}
        //                 placeholder="Password"
        //             /> <br />
        //             <input
        // type="password"
        // id="password_confirmation"
        // value={passwordConfirmation}
        // onChange={e => setPasswordConfirmation(e.target.value)}
        // placeholder="Confirm Password"
        //             /> <br />
        //             <button type="submit" className="sign-up-button">Sign Up</button>
        //         </form>
        //         <ul>
        //             {errorsList}
        //         </ul>
        //         <h2>Already Have an Account?</h2>
        //         <button className="sign-up-button" onClick={() => navigate('/login')}>Login</button>
        //     </div>
        //     <div className="signup-cover">
        //         <p className='signup-cover-header'>Convenience at your fingertips</p>
        //         <p>
        //             <br />
        //             Our user-friendly platform makes it a breeze to find and rent the gear you need.
        //             Simply search for your desired item, select your rental dates, and connect with local gear owners who are passionate about sharing their equipment and knowledge.
        //         </p>
        //     </div>
        // </div>

        // how do i add space bewteen the two divs?
        // <div className="signup-container">
        //     <div className="signup-form-container">
        // <div class="container mx-auto flex">
        //     <div  class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" >
        //         <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ marginTop: 30 }} onSubmit={handleSubmit}>
        //             <div class="mb-4">
        //                 <label class="block text-gray-700 text-sm font-bold mb-2" for="username" >
        //                     Email
        //                 </label>
        //                 <input
        //                     class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                     type="text"
        //                     id="email"
        //                     value={email}
        //                     onChange={e => setEmail(e.target.value)}
        //                     placeholder="e-mail" />
        //             </div>
        //             <div class="mb-4">
        //                 <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname" >
        //                     First Name
        //                 </label>
        //                 <input
        //                     class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                     type="text"
        //                     id="firstName"
        //                     value={firstName}
        //                     onChange={e => setFirstName(e.target.value)}
        //                     placeholder="First Name" />
        //             </div>
        //             <div class="mb-4">
        //                 <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname" >
        //                     Last Name
        //                 </label>
        //                 <input
        //                     class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                     type="text"
        //                     id="lastName"
        //                     value={lastName}
        //                     onChange={e => setLastName(e.target.value)}
        //                     placeholder="First Name" />
        //             </div>
        //             <div class="mb-6">
        //                 <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        //                     Password
        //                 </label>
        //                 <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                     type="password"
        //                     id="password"
        //                     value={password}
        //                     onChange={e => setPassword(e.target.value)}
        //                     placeholder="******************"
        //                 />
        //             </div>
        //             <div class="mb-6">
        //                 <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        //                     Confirm Password
        //                 </label>
        //                 <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                     type="password"
        //                     id="password_confirmation"
        //                     value={passwordConfirmation}
        //                     onChange={e => setPasswordConfirmation(e.target.value)}
        //                     placeholder="******************"
        //                 />
        //             </div>
        //             <div class="flex items-center justify-between">
        //                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
        //                     Sign Up
        //                 </button>
        //                 <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
        //                     Login Here
        //                 </a>
        //             </div>

        //         </form>
        //         <p class="text-center text-gray-500 text-xs">
        //             &copy;2023 RentAll. All rights reserved.
        //         </p>
        //     </div>
        // <div style={{ width: '100%', marginLeft: '20%', marginTop: '10%', textAlign: 'center' }}>
        //     <p class="mb-3 text-gray-500 dark:text-gray-400 bg-slate-800" style={{padding: 30, borderRadius: 30}}>
        //         Our user-friendly platform makes it a breeze to find and rent the gear you need.
        //         Simply browse for your desired item, select your rental dates, and connect with local gear owners who are passionate about sharing their equipment and knowledge.</p>
        // </div>
        // </div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" >
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="e-mail" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >First Name</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder="First Name" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Last Name</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
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
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                </div>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                                </p>
                            </div>
                            {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}

                        </form>
                    </div>
                </div>
                <div >

                    <p class="mb-3 text-gray-500 dark:text-gray-400 bg-slate-800" style={{ padding: 30, borderRadius: 30, marginLeft: "20%" }}>
                        Our user-friendly platform makes it a breeze to find and rent the gear you need.
                        Simply browse for your desired item, select your rental dates, and connect with local gear owners who are passionate about sharing their equipment and knowledge.</p>
                </div>
            </div>

        </section>
    );
}

export default Signup;