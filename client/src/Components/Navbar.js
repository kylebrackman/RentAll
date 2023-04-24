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

    if (loggedIn && user) {
        return (
            <nav className="navbar">
                <div className="navbar_left">
                    <h1 className="navbar_logo">RentAll</h1>
                </div>
                <div className="navbar_center">
                    <NavLink to='/home' className="navbar_button">
                        Home Page
                    </NavLink>
                    <NavLink to='/uploaditem' className="navbar_button">
                        Upload Item
                    </NavLink>
                    <NavLink to='/allItems' className="navbar_button">
                        All Items
                    </NavLink>
                    <NavLink to='/myItems' className="navbar_button">
                        Your Items
                    </NavLink>
                </div>
                <div className="navbar_right">
                    <h3>Hello {user.username}</h3>

                    <button onClick={logoutUser} className="navbar_logout">
                        Logout
                    </button>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar">
                <div className="navbar_left">
                    <h1 className="navbar_logo">RentAll</h1>
                </div>
                <div className="navbar_center">
                    <NavLink to='/login' className="navbar_button">
                        Login
                    </NavLink>
                    <NavLink to='/signup' className="navbar_button">
                        Signup
                    </NavLink>
                </div>
                <div className="navbar_right"></div>
            </nav>
        )
    }
}

export default NavBar