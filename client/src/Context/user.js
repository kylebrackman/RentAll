import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [allItemsList, setAllItemsList] = useState([])
    const [errors, setErrors] = useState([])

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
                    fetchAllItemsList()
                }
            })

    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
        navigate('/')
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const fetchAllItemsList = () => {
        fetch('/items?all_items=true')
            .then(res => res.json())
            .then(data => (
                setAllItemsList(data)
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
                    setAllItemsList([...allItemsList, data]
                    )
                } else {
                    const errorLis = data.errors.map ( e => <li>{e}</li>)
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
                allItemsList,
                addNewItem
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider } 