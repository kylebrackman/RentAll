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
                <div className="navbar__left">
                    <h1 className="navbar__logo">RentAll</h1>
                </div>
                <div className="navbar__center">
                    <NavLink to='/home' className="navbar__button">
                        Home Page
                    </NavLink>
                    <NavLink to='/uploaditem' className="navbar__button">
                        Upload Item
                    </NavLink>
                    <NavLink to='/allItems' className="navbar__button">
                        All Items
                    </NavLink>
                    <NavLink to='/myItems' className="navbar__button">
                        Your Items
                    </NavLink>
                </div>
                <div className="navbar__right">
                    <h3>Hello {user.username}</h3>

                    <button onClick={logoutUser} className="navbar__logout">
                        Logout
                    </button>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar">
                <div className="navbar__left">
                    <h1 className="navbar__logo">RentAll</h1>
                </div>
                <div className="navbar__center">
                    <NavLink to='/login' className="navbar__button">
                        Login
                    </NavLink>
                    <NavLink to='/signup' className="navbar__button">
                        Signup
                    </NavLink>
                </div>
                <div className="navbar__right"></div>
            </nav>
        )
    }
}

export default NavBar