import React from "react";
const Title = () => {
    console.log("Title render");
    return <h6>useCallBack Hook Example</h6>
}

export default React.memo(Title);