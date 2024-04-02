import React from 'react';

const RestOperator = () => {
    //Rest Operator in Single Array we can pass any number of arguments.
    let array = (...arr) => console.log(arr);
    array = [10, 20, 30, 40, 50];
    //Rest Operator in Single Array we can remove specific value number of arguments or we can display that specific number.
    let array1 = (a, ...arr1) => console.log(a);
    array1 = [10, 20, 30, 40, 50, 60];
    return (
        <div>
            <h6>RestOperator In Array</h6>
            {array}<br />
            {array1}
        </div>
    );
}

export default RestOperator;
