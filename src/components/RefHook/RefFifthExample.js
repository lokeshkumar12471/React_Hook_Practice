import React, { useEffect, useRef } from 'react';

const RefFifthExample = () => {
    let data = useRef(null);
    const submitHandle = (e) => {
        e.preventDefault();
        console.log(data.current.value);
    }
    useEffect(() => {
        data.current.focus();
    }, [])
    return (
        <div>
            <h6>useRef Hook In React, This is Fifth Example</h6>
            1. If we initialize any values (Numbers, strings) in the useRef function we can change those values but it will not affect the browser so through the useState hook we can check that changes then we can display them in the browser. It means when we use useRef hook it will not rerender the entire component.
            2. We can change the elements of inner HTML using the useRef Hook.
            3. We can autofocus the input tag in form tags using the useRefhook.
            4. We can change the classname, styles using useRef Hook.
            5. We can work on multiple HTML elements also at a time using the useRefhook.
            6.useRef it won't render the component. It just keep track of the DOM element.
            <form onSubmit={submitHandle}>
                <input ref={data} type='text' name="firstname" />
                <button className='submit'>Submit</button>
            </form>
        </div>
    );
}

export default RefFifthExample;
