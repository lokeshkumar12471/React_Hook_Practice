import React, { useContext } from 'react';
import { UserContext, MainData } from './ContextHookFirst';
const ContextHookSubFirst = () => {
    const data = useContext(UserContext);
    const main = useContext(MainData);


    const { firstname, lastname, email } = data;
    const { name, fan, account } = main;

    return (
        <div>
            <h6>useContext Hook In React By Avoiding Prop Drilling Issue First Example</h6>
            <h5>{firstname}</h5>
            <h5>{lastname}</h5>
            <h5>{email}</h5>
            <h5>{name}</h5>
            <h5>{fan}</h5>
            <h5>{account}</h5>

        </div>
    );
}

export default ContextHookSubFirst;
