import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink, useNavigate } from 'react-router-dom'
import Home from "./Home";

const Navbar = () => {
    // const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()


    // function logoutUser() {
    //     fetch('/logout', {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(() => {
    //             logout()
    //             navigate('/home')
    //         })
    // }

    // had to add the && user for this to work...?
    return (
        <div>
            TEST
        </div>
    )
}

export default Navbar