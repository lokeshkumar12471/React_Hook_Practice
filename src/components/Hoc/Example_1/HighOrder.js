import React, { useState } from 'react';

const HighOrder = (Component, parameter) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(parameter);

        const increment = () => {
            setCount(count + parameter);
        };

        // Return the JSX element created by the wrapped component
        return (
            <div>
                <h6>Higher Order Component In React</h6>
                <h5>A higher-order component (Hoc) is an advanced technique in React for reusing component logic.</h5>
                <h5>Hoc is a pure function with zero side-effect and doesn't modify the input component.</h5>
                <h5>It is component that takes another component as input and returns a new component with extra features added to original component</h5>
                <h5>If we want to pass any props inside of any Hoc, we can use those props in the actual component.</h5>
                <h5>Hoc definition: Higher-order component is a function that takes a component and returns a new component.</h5>
                <h5>Example: loginpage -- Here we can use the logic for user authorization by Hoc, allowing only authorized users to access the home page, about page, contact page, etc.</h5>
                <h5>Example: events -- Here we can use the logic for onClick, onMouseEnter by Hoc, handling the code in a single component that can be easily reused throughout the application.</h5>
                <br />
                Difference Between Higher Order Component vs Custom Hook
                <h5>Higher Order Component</h5>
                <ul>
                    <li>Hoc return an jsx</li>
                    <li>Difficult to read and understand</li>
                    <li>Creates an additional nesting into your component tree</li>
                    <li>There are some Problem like prop confusion and collision</li>
                </ul>
                <h5>Custom Hook</h5>
                <ul>
                    <li>Custom Hook return a Value</li>
                    <li>Easy to read and understand</li>
                    <li>it does not Creates an additional nesting into your component tree </li>
                    <li>There are not such problems</li>
                </ul>
                <Component increment={increment} count={count} {...props} />
            </div>
        );
    };

    return NewComponent;
};

export default HighOrder;