import React from 'react';

const Array = () => {
    // we can store the values in a single variable or use an array to hold multiple values.
    //Array Push  To Add Elements Into An Existing Array.
    let arr = [10, 20, 30, 40];
    arr.push(50);

    return (
        <div>
            <h6>Array Push To Add Elements Into An Existing Array.</h6>
            {arr}
        </div>
    );
}

export const Arraypop = () => {
    //Array Pop It will Remove the Last Element of An Array.
    let arraypop = [10, 20, 30, 40, 50];
    arraypop.pop();
    return (
        <div>
            <h6>Array Pop It will Remove the Last Element of An Array.</h6>
            {arraypop}
        </div>
    )
}


export const Arrayshift = () => {
    //Array Shift It will Remove the First Element of An Array.
    let arrayshift = [10, 20, 30, 40, 50];
    arrayshift.shift();
    return (
        <div>
            <h6>Array Shift It will Remove the First Element of An Array.</h6>
            {arrayshift}
        </div>
    )
}

export const Arraysplice = () => {
    //Array Splice It will Remove the index Condition Element of An Array.
    let arraysplice = [10, 20, 30, 40, 50];
    //it will find out the value of that index position.
    let index = arraysplice.indexOf(10);
    arraysplice.splice(index, 1);
    return (
        <div>
            <h6>Array Splice It will Remove the index Condition Element of An Array.</h6>
            {arraysplice}
        </div>
    )
}
export default Array;
