import React, { useReducer } from 'react';

const reducer = (state, action) => { //first initialData will be there,second  argument is the function to handle actions.
    console.log(state, action)
    return state + action
}

function receviefunction(presentvalue, conditionbasevalue) {
    switch (conditionbasevalue.type) {
        case "INC": return presentvalue + 1;
        case "DEC": return presentvalue - 1;
        case "RESET": return presentvalue = 0;
        default:
            return presentvalue;
    }

}
const ReducerThirdExample = () => {
    const [counter, dispatch] = useReducer(reducer, 0)// function, and initialvalue
    const [count, callfunction] = useReducer(receviefunction, 0)// function, and initialvalue

    return (
        <div>
            <h6>useReducer Hook In React,This is Third Example</h6>
            <button onClick={() => dispatch(-1)}>-</button>
            counter:{counter}
            <button onClick={() => dispatch(+1)}>+</button>
            <br />

            {/* Second Example in useReducerhook */}
            <button onClick={() => callfunction({ type: "DEC" })}>-</button>
            counter:{count}
            <button onClick={() => callfunction({ type: "INC" })}>+</button>
            <button style={{ background: 'red' }} onClick={() => callfunction({ type: "RESET" })}>Reset</button>

        </div>
    );
}

export default ReducerThirdExample;
