import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [allItems, setAllItems] = useState([])
    const [userItems, setUserItems] = useState([])
    const [errors, setErrors] = useState([])
    const [currentRentals, setCurrentRentals] = useState([])
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
                    fetchCurrentRentals()
                }
            })

    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchUserItems()
        fetchCurrentRentals()
    }

    const logout = () => {
        setLoggedIn(false)
        setUserItems([])
        setCurrentRentals([])
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

    const fetchCurrentRentals = () => {
        fetch('/rentals')
            .then(res => res.json())
            .then(data => (
                setCurrentRentals(data)
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rentalData)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setCurrentRentals([...currentRentals, data])
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
                createRental,
                currentRentals,
                errors
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider } 