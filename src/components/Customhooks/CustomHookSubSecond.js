import React from "react";
import useCustomHookSecond from "./CustomHookSecond";
const CustomHookSubSecond = () => {
    const [count, increment, decrement, reset] = useCustomHookSecond();
    return (
        <div>
            <h6>Custom Hook In React, This is Second Example</h6>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
}

export default CustomHookSubSecond;
