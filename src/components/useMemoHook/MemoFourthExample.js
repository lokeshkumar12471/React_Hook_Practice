import React, { useState, useMemo, useEffect } from 'react';

const MemoFourthExample = () => {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(5);
    const Factorial = useMemo(() => fact(number), [number]);

    return (
        <div>
            <h6>useMemo Hook In React, This is Fourth Example</h6>
            <h5>Factorial Number is:{Factorial}</h5>
            <button onClick={() => setNumber(number + 1)}>Factorial Increment</button>
            <h5>Counter Number is:{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>Counter Increment</button>
            <br /> <br />
            {/* useMemo Fifth Example */}
            <MemoFifthExample />
        </div>
    );
}
const fact = (n) => {
    console.log('Factorial Function Calling');
    let answer = 1;
    for (let i = n; i >= 1; i--) {
        answer = answer * i;
    }
    return answer;
}

//useMemo Fifth Example
const MemoFifthExample = () => {

    const [effect, setEffect] = useState(0);
    const [memo, setMemo] = useState(0);
    useEffect(() => {
        console.log('useEffect Running' + effect);
    }, [effect])
    useMemo(() => {
        console.log('useMemo Running' + memo);
    }, [memo])

    return (
        <>
            <div><button onClick={() => setEffect(effect + 1)}>Effect</button>
            </div>
            <div>
                <button onClick={() => setMemo(memo + 1)}>Memo</button>
            </div>
        </>
    )
}


export default MemoFourthExample;
