import React, { useContext, useState } from "react";
import { UserContext } from "../Context/user";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const { user, logout, loggedIn } = useContext(UserContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const defaultImageUrl = 'https://raw.githubusercontent.com/kylebrackman/RentAll/main/client/public/User%20Default%20Pic.png';

    function logoutUser() {
        fetch("/api/logout", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            logout();
        });
    }

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    if (loggedIn && user && user.profile) {
        return (
            <nav className="navbar">
                <div className="navbar_left">
                    <NavLink to="/allItems" className="navbar_logo">
                        RentAll
                    </NavLink>
                </div>
                <div className="navbar_center">
                    <div className={`navbar_dropdown ${dropdownOpen ? "open" : ""}`}>
                        <button
                            className="navbar_button"
                            onClick={toggleDropdown}
                        >
                            Hello {user.profile.name} ▼
                        </button>
                        <div className="navbar_dropdown-content">
                            <NavLink to="/">Home Page</NavLink>
                            <NavLink to="/uploaditem">Upload Item</NavLink>
                            <NavLink to="/myItems">Your Items</NavLink>
                            <NavLink to="/myRentals">Rentals</NavLink>
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
        )
    } else if (loggedIn && user && !user.profile) {
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
                            ▼
                            <img src={defaultImageUrl} alt="Default" className="placeholder-image" />
                        </button>
                        <div className="navbar_dropdown-content">
                            <NavLink to="/createProfile">Create Profile</NavLink>
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
        )
    }
    else {
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
                            onClick={toggleDropdown}>
                            <img src={defaultImageUrl} alt="Default" className="placeholder-image" />
                        </button>

                        <div className="navbar_dropdown-content">
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Signup</NavLink>
                            <hr />
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
};

export default NavBar;