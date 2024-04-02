import React, { useState } from 'react';

const ParentComponent = () => {
    // eslint-disable-next-line
    const [userDetails, setUserDetails] = useState({
        firstname: "lokesh",
        lastname: "kumar",
        email: "lokeshkumar12471@gmail.com"
    });
    return (
        <div>
            <h6>Prop Drilling In React</h6>
            <h2>Parent Component</h2>
            <ChildComponent userDetails={userDetails} />
        </div>
    );
}

const ChildComponent = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            <SubChildComponent userDetails={props.userDetails} />
        </div>
    );
}

const SubChildComponent = ({ userDetails }) => {
    return (
        <div>
            <h2>subChild Component</h2>
            <h2>{userDetails.firstname}</h2>
            <h2>{userDetails.lastname}</h2>
            <h2>{userDetails.email}</h2>
        </div>
    );
}
export default ParentComponent;
