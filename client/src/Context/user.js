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

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/me")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                if (data.errors) {
                    setLoggedIn(false);
                } else {
                    setLoggedIn(true);
                    fetchAllItems();
                    setUserItems(data.owned_items);
                    setCurrentRentals(data.current_rentals);
                    setUpcomingRentals(data.upcoming_rentals);
                    setPastRentals(data.past_rentals);
                }
            });
    }, []);

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
        setUserItems(user.owned_items);
        console.log(user);
    };

    const logout = () => {
        setLoggedIn(false);
        setUserItems([]);
        setCurrentRentals([]);
        navigate("/login");
    };

    const signup = (user) => {
        setUser(user);
        setLoggedIn(true);
    };

    const fetchAllItems = () => {
        fetch("/items?all_items=true")
            .then((res) => res.json())
            .then((data) => setAllItems(data));
    };

    const addNewItem = (newItemData) => {
        fetch("/items", {
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
        fetch("/rentals", {
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
        fetch("/createprofile", {
            method: "POST",
            body: newProfileData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setUser((user) => ({ ...user, profile: data }));
                } else {
                    const errorLis = data.errors.map((e) => <li>{e}</li>);
                    setErrors(errorLis);
                }
            });
    };

    const editItem = (item) => {
        fetch(`/items/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => handleEditItem(data))
            .catch((error) => console.log(error));
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
        fetch(`/items/${id}`, {
            method: "DELETE",
        })
            .then(() => handleDeleteItem(id))
            .then(navigate("/myItems"))
            .catch((error) => console.log(error));
    };

    const resetErrors = () => {
        setErrors([]);
    };


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
                resetErrors
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };