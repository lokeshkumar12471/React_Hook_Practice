import React from 'react';
import HighOrder from './HighOrder';

const ClickHoc = (props) => {
    // Using props to pass data to child components is a common practice in Higher Order Components.
    return (
        <div>
            <h6>Using props to pass data to child components is a common practice in Higher Order Components.</h6>
            <button onClick={props.increment}> Clicked {props.count} {props.name}</button>
        </div>
    );
}

export default HighOrder(ClickHoc, 10);
