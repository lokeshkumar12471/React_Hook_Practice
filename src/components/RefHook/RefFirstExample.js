import React, { useEffect, useRef, useState } from 'react';

const RefFirstExample = () => {
    const [firstname, setFirstName] = useState();
    const rendercount = useRef(1);
    useEffect(() => {
        console.log(rendercount);
        rendercount.current = rendercount.current + 1;
    })
    const handle = (e) => {
        setFirstName(e.target.value);
    }
    return (
        <div>
            <h6>useRef Hook In React, This is First Example</h6>
            <input type='text' name="firstname" onChange={handle} />
            <h5>Typing: {firstname}</h5>
            <h5>component Renderd  {rendercount.current}</h5>
        </div>
    );
}

export default RefFirstExample;
