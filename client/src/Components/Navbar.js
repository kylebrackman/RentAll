import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()


    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                logout()
                navigate('/home')
            })
    }

    // had to add the && user for this to work...?
    if (loggedIn && user) {
        return (
            <div>
                <h1>RentAll</h1>
                <NavLink to='/home'>
                    <button> Home Page </button>
                </NavLink>
                <NavLink to='/uploaditem'>
                    <button> Upload Item!</button>
                </NavLink>
                <button onClick={logoutUser}>Logout</button>
                <br />
                <h3>Hello {user.username} </h3>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink >
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
                <hr />
            </div>
        )
    }
}

export default NavBar