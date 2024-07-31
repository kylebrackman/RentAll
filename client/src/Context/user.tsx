import React, { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextTypes {
    user: User;
    login: (user: Record<string, any>) => void; // return to this later
    logout: () => void; // return to this later
    signup: (user: Record<string, any>) => void; // return to this later
    loggedIn: boolean;
    allItems: Array<Record<string, any>>;
    addNewItem: (newItemData: Record<string, any>) => void;
    userItems: Array<Record<string, any>>;
    createRental: (rentalData: Record<string, any>) => void;
    currentRentals: Array<Record<string, any>>;
    errors: Array<JSX.Element>;
    newProfile: (newProfileData: Record<string, any>) => void;
    deleteItem: (id: number) => void;
    editItem: (item: Record<string, any>) => void;
    upcomingRentals: Array<Record<string, any>>;
    pastRentals: Array<Record<string, any>>;
    fetchAllItems: () => void;
    resetErrors: () => void;
    userRentalRequests: Array<Record<string, any>>;
    pendingRentals: Array<Record<string, any>>;
    approveRequest: (requestId: number) => void;
    createRentalRequest: (rentalRequestData: Record<string, any>) => void;
    createCheckoutSession: (rentalRequestData: Record<string, any>) => void;
}

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    owned_items: Array<Record<string, any>>;
    current_rentals: Array<Record<string, any>>;
    upcoming_rentals: Array<Record<string, any>>;
    past_rentals: Array<Record<string, any>>;
    profile: Record<string, any>;
    rental_requests_received: Array<Record<string, any>>;
}

const defaultContextValue: UserContextTypes = {
    user: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        owned_items: [],
        current_rentals: [],
        upcoming_rentals: [],
        past_rentals: [],
        profile: {},
        rental_requests_received: [],
    },
    login: () => { },
    logout: () => { },
    signup: () => { },
    loggedIn: false,
    allItems: [],
    addNewItem: () => { },
    userItems: [],
    createRental: () => { },
    currentRentals: [],
    errors: [],
    newProfile: () => { },
    deleteItem: () => { },
    editItem: () => { },
    upcomingRentals: [],
    pastRentals: [],
    fetchAllItems: () => { },
    resetErrors: () => { },
    userRentalRequests: [],
    pendingRentals: [],
    approveRequest: () => { },
    createRentalRequest: () => { },
    createCheckoutSession: () => { },
};

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = React.createContext<UserContextTypes>(defaultContextValue);


const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>({
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        owned_items: [],
        current_rentals: [],
        upcoming_rentals: [],
        past_rentals: [],
        profile: {},
        rental_requests_received: [],
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const [allItems, setAllItems] = useState<Array<Record<string, any>>>([])
    const [userItems, setUserItems] = useState<Array<Record<string, any>>>([]);
    const [errors, setErrors] = useState([]);
    const [currentRentals, setCurrentRentals] = useState<Array<Record<string, any>>>([]);
    const [upcomingRentals, setUpcomingRentals] = useState<Array<Record<string, any>>>([]);
    const [pastRentals, setPastRentals] = useState<Array<Record<string, any>>>([]);
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
            fetchRentalRequests();
            // setPendingRentals(user.rental_requests_received);
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

    const createRentalRequest = (rentalRequestData) => {
        // console.log("user context", rentalRequestData)
        fetch("/api/rental_requests", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rentalRequestData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    // Handle successful creation of rental request
                    console.log("Rental request created successfully:", data);
                } else {
                    const errorLis = data.errors.map((e) => <li>{e}</li>);
                    setErrors(errorLis);
                }
            })
            .catch((error) => console.error("Error creating rental request:", error));
    };

    const createCheckoutSession = (rentalRequestData) => {
        fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rentalRequestData),
        })

            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    // Handle successful creation of rental request
                    console.log("Rental request created successfully:", data);
                } else {
                    const errorLis = data.errors.map((e) => <li>{e}</li>);
                    setErrors(errorLis);
                }
            })
            .catch((error) => console.error("Error creating rental request:", error));
    };



    const approveRequest = (requestId) => {
        // Fetch the rental request details
        fetch(`/api/rental_requests/${requestId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch rental request');
                }
                return res.json();
            })
            .then((data) => {
                if (!data.errors) {
                    // Make a POST request to the finalize_approval endpoint
                    return fetch(`/api/rental_requests/finalize_approval`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: requestId }),
                    });
                } else {
                    throw new Error('Failed to fetch rental request');
                }
            })
            .then((res) => {
                if (!res.ok) {
                    console.log(res)
                    throw new Error('Failed to finalize rental request');
                }
                return res.json();
            })
            .then((response) => {
                console.log("Rental request finalized successfully.");
                // Optionally, refresh the list of rentals or show a success message
            })
            .catch((error) => console.error("Error:", error.message));
    };




    const fetchRentalRequests = () => {
        fetch("/api/rental_requests/")
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setPendingRentals(data);
                } else {
                    console.error("Failed to fetch pending rentals:", data.errors);
                }
            })
            .catch((error) => console.error("Error fetching pending rentals:", error));
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
            .then(() => navigate("/myItems"))
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
                resetErrors,
                userRentalRequests,
                pendingRentals,
                approveRequest,
                createRentalRequest,
                createCheckoutSession,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };