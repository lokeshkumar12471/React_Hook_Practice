import React, { useState } from "react";
import useCustomHook from "./CustomHookFirst";
const CustomHookSubFirst = () => {
    const [count, setCount] = useState(0);
    useCustomHook(count);
    return (
        <div>
            <h6>Custom Hook In React, This is First Example</h6>
            <button onClick={() => setCount(count + 1)}>Count  - {count}</button>
        </div>
    );
}

export default CustomHookSubFirst;
