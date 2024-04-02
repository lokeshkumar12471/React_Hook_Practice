import React, { useState, useCallback } from 'react'
import Button from './Button';
import Title from './Title';
import Count from './Count';

const ParentCallBack = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(7000);

    const incrementAge = useCallback(() => {

        setAge(age + 1);

    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1);

    }, [salary]);

    return (
        <div>
            <h6>useCallBack Hook In React</h6>
            <Title />
            <Count text={'age'} number={age} />
            <Button clickHandler={incrementAge}>Increment Age</Button>
            <br />
            <Count text={'Salary'} number={salary} />
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentCallBack
