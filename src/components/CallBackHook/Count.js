import React from "react";
const Count = ({ text, number }) => {
    console.log(`${text}`, `${number}`, "render");
    return (
        <>
            {text} :{number}
        </>
    )

}
export default React.memo(Count);