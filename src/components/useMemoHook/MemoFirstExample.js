import React, { useState, useMemo } from 'react';

const MemoFirstExample = () => {
    const [counter, setCounter] = useState(1);

    let num1 = 10;
    let num2 = 90;
    let sum = useMemo(() => {
        console.log('usememo', `${num1}`, `${num2}`)
        return num1 + num2;
    }, [num1, num2]);
    return (
        <div>
            <h6>useMemo Hook In React, This is First Example</h6>
            <h2>Counter:{counter}</h2>
            <h2>Sum:{sum}</h2>
            <button onClick={() => setCounter(counter + 1)}>Update Count</button>
        </div>
    );
}

export default MemoFirstExample;
