import React, { createContext } from 'react';
const initialState = {
    firstname: "lokeshkumar",
    lastname: "Vijay",
    email: "lokeshkumar@gmail.com",
};
const MainState = {
    name: "kalyan",
    fan: "Nani",
    account: "kalyan@gmail.com",
}
export const UserContext = createContext();
export const MainData = createContext();

export const UserContextProvider = ({ children }) => {
    return <>
        <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
    </>
}

export const MainDataProvider = ({ children }) => {
    return <>
        <MainData.Provider value={MainState}>{children}</MainData.Provider>
    </>
}


