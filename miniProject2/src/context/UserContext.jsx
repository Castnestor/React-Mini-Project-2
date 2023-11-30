import { useState, useContext, createContext } from "react";

const UserContext = createContext();

export const UserProvider = (props) => { 

    const [logedUser,setLogedUser] = useState({});

    const handleUpdateUser = (user) => {
        setLogedUser(user);
    }

    return (
        <UserContext.Provider value={{ logedUser, handleUpdateUser}}>
            {props.chidren}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}