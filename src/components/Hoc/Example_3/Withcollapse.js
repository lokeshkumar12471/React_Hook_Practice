import React, { useState } from 'react'

const Withcollapse = (ListComp) => {
    function EnchancedListHoc(props) {
        const [showlist, setShowList] = useState(true);
        const handleClick = () => {
            setShowList(prevVal => !prevVal);
        }
        return (
            <div>
                <div><span onClick={handleClick}>SomeTitle {" > "}</span></div>
                {showlist && <ListComp {...props} />}
            </div>
        )
    }
    return EnchancedListHoc;
}

export default Withcollapse;



