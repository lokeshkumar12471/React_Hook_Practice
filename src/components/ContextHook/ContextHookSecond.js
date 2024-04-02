import React, { createContext } from 'react';
export const Context = createContext();
const ContextHookSecond = ({ children }) => {
    let sample = {
        name: 'Sandeep',
        email: 'developerSandeep',
        phone: '9553882921'
    }
    return <Context.Provider value={sample}>{children}</Context.Provider>

}

export default ContextHookSecond;
