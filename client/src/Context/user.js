import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [allItems, setAllItems] = useState([])
    const [userItems, setUserItems] = useState([])
    const [errors, setErrors] = useState([])
    const [userRentals, setUserRentals] = useState(user.rentals)

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if (data.errors) {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                    fetchAllItems()
                    fetchUserItems()
                }
            })

    }, [])

    console.log(allItems)
    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchUserItems()
    }

    const logout = () => {
        setLoggedIn(false)
        setUserItems([])
        navigate('/')
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const fetchAllItems = () => {
        fetch('/items?all_items=true')
            .then(res => res.json())
            .then(data => (
                setAllItems(data)
            ))
    }

    const fetchUserItems = () => {
        fetch('/items')
            .then(res => res.json())
            .then(data => (
                setUserItems(data)
            ))
    }

    const addNewItem = (newItemData) => {
        fetch('/items', {
            method: 'POST',
            body: newItemData
        })
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setAllItems([...allItems, data]
                    )
                } else {
                    const errorLis = data.errors.map(e => <li>{e}</li>)
                    setErrors(errorLis)
                }
            })
    }

    const createRental = (rentalData) => {
        fetch('/rentals', {
            method: 'POST',
            body: rentalData
        })
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setUserRentals([...userRentals, data])
                } else {
                    const errorLis = data.errors.map(e => <li>{e}</li>)
                    setErrors(errorLis)
                }
            })
    }


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
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider } 