import React, { useContext, useState } from "react";
import { UserContext } from "../Context/user";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
    const { user, logout, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function logoutUser() {
        fetch("/logout", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            logout();
            navigate("/home");
        });
    }

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    if (loggedIn && user) {
        return (
            <nav className="navbar">
                <div className="navbar_left">
                    <NavLink to="/" className="navbar_logo">
                        RentAll
                    </NavLink>
                </div>
                <div className="navbar_center">
                    <div className={`navbar_dropdown ${dropdownOpen ? "open" : ""}`}>
                        <button
                            className="navbar_button"
                            onClick={toggleDropdown}
                        >
                            Hello {user.username} ▼
                        </button>
                        <div className="navbar_dropdown-content">
                            <NavLink to="/">Home Page</NavLink>
                            <NavLink to="/uploaditem">Upload Item</NavLink>
                            <NavLink to="/allItems">All Items</NavLink>
                            <NavLink to="/myItems">Your Items</NavLink>
                            <NavLink to="/myRentals">Current Rentals</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                            <hr />
                            <button
                                onClick={logoutUser}
                                className="navbar_button"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navbar">
                <div className="navbar_left">
                    <NavLink to="/" className="navbar_logo">
                        RentAll
                    </NavLink>
                </div>
                <div className="navbar_center">
                    <NavLink to="/login" className="navbar_button">
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="navbar_button">
                        Signup
                    </NavLink>
                </div>
            </nav>
        );
    }
};

export default NavBar;