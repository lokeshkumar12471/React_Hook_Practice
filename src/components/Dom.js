import React from 'react';

const Dom = () => {
    // diffing algorithm allows React to update the DOM efficiently..
    return (
        <div>
            <h6>Virtual Dom In React</h6>
            The virtual DOM is a concept in React where a lightweight copy of the actual DOM is maintained. It allows React to efficiently update the real DOM by comparing changes in the virtual DOM and then applying only the necessary updates to the actual DOM, resulting in faster rendering and improved performance for web applications.<h4>This virtual process we can call as Reconciliation. And for the virtual dom to build in React, They Used diffi algorithm</h4>
        </div>
    );
}

export default Dom;
