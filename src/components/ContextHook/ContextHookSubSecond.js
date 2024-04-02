import React, { useContext } from 'react';
import { Context } from './ContextHookSecond';
const ContextHookSubSecond = () => {
    const data = useContext(Context);
    const { name, email, phone } = data;
    return (
        <div>
            <h6>useContext Hook In React By Avoiding Prop Drilling Issue Second Example</h6>
            <h5>{name}</h5>
            <h5>{email}</h5>
            <h5>{phone}</h5>
        </div>
    );
}

export default ContextHookSubSecond;
