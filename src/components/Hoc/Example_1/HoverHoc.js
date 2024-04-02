import React from 'react';
import HighOrder from './HighOrder';

const HoverHoc = (props) => {
    return (
        <div>
            <h3 onMouseEnter={props.increment}>Hover {props.count} times</h3>
        </div>
    );
}

export default HighOrder(HoverHoc, 5);
