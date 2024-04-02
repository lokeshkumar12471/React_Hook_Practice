import React from 'react';
import Withcollapse from './Withcollapse';

const ListComp = ({ main }) => {
    return (
        <div>
            <ul>
                {main.length > 0 && main.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}            </ul>

        </div>
    );
}

export default Withcollapse(ListComp);
