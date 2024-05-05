import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [allItems, setAllItems] = useState([]);
    const [userItems, setUserItems] = useState([]);
    const [errors, setErrors] = useState([]);
    const [currentRentals, setCurrentRentals] = useState([]);
    const [upcomingRentals, setUpcomingRentals] = useState([]);
    const [pastRentals, setPastRentals] = useState([]);
    const [userRentalRequests, setUserRentalRequests] = useState([]);
    const [pendingRentals, setPendingRentals] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        
        fetch("/api/me")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);

                if (data.errors) {
                    setLoggedIn(false);
                } else {
                    setLoggedIn(true);
                }
            });
    }, []);

    useEffect(() => {
        fetchAllItems()
    }, [])

    useEffect(() => {
        if (loggedIn) {
            fetchAllItems();
            setUserItems(user.owned_items);
            setCurrentRentals(user.current_rentals);
            setUpcomingRentals(user.upcoming_rentals);
            setPastRentals(user.past_rentals);
            setPendingRentals(user.rental_requests_received);
        } else {
            setUserItems([]);
            setCurrentRentals([]);
            setUpcomingRentals([]);
            setPastRentals([]);
        }
    }, [loggedIn, user]);

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
        setUserItems(user.owned_items);
        setUpcomingRentals(user.upcoming_rentals);
        setCurrentRentals(user.current_rentals);
        setPastRentals(user.past_rentals);
    };

    const logout = () => {
        setLoggedIn(false);
        setUserItems([]);
        setCurrentRentals([]);
        setUpcomingRentals([]);
        setPastRentals([]);
        navigate("/login");
    };

    const signup = (user) => {
        setUser(user);
        setLoggedIn(true);
    };

    const fetchAllItems = () => {
        fetch("/api/items?all_items=true")
            .then((res) => res.json())
            .then((data) => setAllItems(data))
            .catch((error) => console.log("Error fetching allItems:", error));
    };

    const addNewItem = (newItemData) => {
        fetch("/api/items", {
            method: "POST",
            body: newItemData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setAllItems([...allItems, data]);
                    setUserItems([...userItems, data]);
                    navigate("/allItems");
                } else {
                    const errorLis = data.errors.map((e) => <li>{e}</li>);
                    setErrors(errorLis);
                }
            });
    };

    const createRental = (rentalData) => {
        fetch("/api/rentals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rentalData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setUpcomingRentals([...upcomingRentals, data]);
                    navigate("/");
                } else {
                    const errorLis = data.errors.map((e) => <li>{e}</li>);
                    setErrors(errorLis);
                }
            });
    };

    const newProfile = (newProfileData) => {
        fetch("/api/createprofile", {
            method: "POST",
            body: newProfileData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setUser((user) => ({ ...user, profile: data }));
                    navigate("/");
                } else {
                    const errorLis = data.errors.map((e) => <li>{e}</li>);
                    setErrors(errorLis);
                }
            });
    };

    const editItem = (item) => {
        fetch(`/api/items/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    handleEditItem(data)
                    setErrors([])
                } else {
                    setErrors(data.errors)
                }
            })
    };

    const handleEditItem = (editedItem) => {
        const updatedAllItemList = allItems.map((item) => {
            if (item.id === editedItem.id) {
                return editedItem;
            } else {
                return item;
            }
        });
        const updatedUserItemList = userItems.map((item) => {
            if (item.id === editedItem.id) {
                return editedItem;
            } else {
                return item;
            }
        });
        setAllItems(updatedAllItemList);
        setUserItems(updatedUserItemList);
    };

    const handleDeleteItem = (id) => {
        const allItemsUpdate = allItems.filter((all) => all.id !== id);
        const userItemsUpdate = userItems.filter((user) => user.id !== id);
        setAllItems(allItemsUpdate);
        setUserItems(userItemsUpdate);
    };

    const deleteItem = (id) => {
        fetch(`/api/items/${id}`, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(id))
            .then(navigate("/myItems"))
            .catch((error) => console.log(error));
    };

    const resetErrors = () => {
        setErrors([]);
    };


    // const pendingRentals = user.rental_requests_received;
    
    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                signup,
                loggedIn,
                allItems,
                addNewItem,
                userItems,
                createRental,
                currentRentals,
                errors,
                newProfile,
                deleteItem,
                editItem,
                upcomingRentals,
                pastRentals,
                fetchAllItems,
                resetErrors,
                userRentalRequests,
                pendingRentals
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };