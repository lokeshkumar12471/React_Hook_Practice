import React from 'react';

const SpreadOperator = () => {
    //In Array Iam Using Spread Operator  To Add Elements Into An Existing Array
    let set1 = [1, 2, 3, 4, 5];
    let set2 = [...set1, 6, 7, 8, 9, 10];

    //In Object Iam Using Spread Operator To Add Elements Into An Existing Object
    let a = {
        name: "udaykiran",
        email: "uday@gmail.com",
    }
    let b = { ...a, age: "25" }
    return (
        <div>
            <h6>SpreadOperator To Add Elements Into An Existing Array.</h6>
            {set2}
            <br />
            {b.name}
            {b.email}
            {b.age}
        </div>
    );
}

export default SpreadOperator;
