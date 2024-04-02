import React, { useRef, useState } from 'react'

const RefThirdExample = () => {
    const [y, setY] = useState(100);
    let Hello = useRef();
    let x = useRef(10);
    let z = 1000;
    return (
        <div>
            <h6>useRef Hook In React, This is Third Example</h6>
            <h1 ref={Hello} className='active'>
                Hello world
            </h1>
            <h1>
                the value of x is {x.current}
            </h1>
            <h1>
                the value of z is {z}
            </h1>
            <button onClick={() => {
                x.current = x.current + 10 //it preserve the data even component re-renders.
                z = z + 1000 //it won't preserve the data even component re-renders display only initalvalue.
                setY(y + 100);
                console.log(Hello)
                console.dir(Hello.current)
                Hello.current.innerHTML = "Changed";
                Hello.current.classList.toggle('active')
                Hello.current.classList.toggle('inactive')
            }}>Increment</button>
        </div>
    )
}

export default RefThirdExample;
