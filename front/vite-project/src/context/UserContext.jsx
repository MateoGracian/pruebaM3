import { createContext, useState} from "react";
// import axios from "axios";

export const UserContext = createContext(null); 

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [appointments, setAppointments] = useState([]);

    const updateUser = (userData) => {
        setUsers(userData);
    }

    const logout = () => {
        setUsers(null);
    }
    
    const updateAppointments = (newAppointments) => {
        setAppointments(newAppointments);
    }

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]); 
    }
    
    return (
        <UserContext.Provider value={{users, appointments, updateUser, updateAppointments, addAppointment, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;