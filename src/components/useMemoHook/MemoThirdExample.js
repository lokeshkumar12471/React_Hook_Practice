import React, { useEffect, useState, useMemo } from 'react'

const MemoThirdExample = () => {
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const themechanged = useMemo(() => {
        return {
            background: dark ? "black" : "white",
            color: dark ? "white" : "black",
        }
    }, [dark]);
    useEffect(() => {
        console.log('theme changed');
    }, [dark]);

    //Performance checking........
    function slowFunction(number) {
        for (let index = 0; index < 1000000000; index++);
        console.log('Slow Function Running');
        return number * 2;
    }
    return (
        <>
            <h6>useMemo Hook In React, This is Third Example</h6>
            React useMemo should be used only to memoize the value returned from a function
            <div>
                <input type='number' name='number' id='number' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            </div>
            <br />
            <div>
                <button onClick={() => setDark(!dark)}>Change Theme</button>
            </div>
            <div>
                <h4 style={themechanged}>The Number is {doubleNumber}</h4>
            </div>
        </>
    )
}

export default MemoThirdExample
