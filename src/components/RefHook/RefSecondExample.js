import React, { useEffect, useRef, useState } from 'react';

const RefSecondExample = () => {
    const [firstname, setFirstName] = useState();
    const inputDom = useRef('');
    useEffect(() => {
        console.log(inputDom);
    });
    const focus = () => {
        inputDom.current.focus();
    }
    return (
        <div>
            <h6>useRef Hook In React, This is Second Example</h6>
            <input type='text' ref={inputDom} name="firstname" onChange={(e) => setFirstName(e.target.value)} />
            <h5>Typing: {firstname}</h5>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default RefSecondExample;
