import React from 'react';

const Destructuring = () => {
    let a = {
        email: "lokesh@gmail.com",
        password: "lokesh",
    }

    //This is Destructuring for the Object Your Taking the Values...... 
    //In Array We need to observe the positions, to place the values and take the values.....
    const { email, password } = a;
    return (
        <div>
            <h6>Destructuring In Object</h6>
            {console.log(a.email, a.password)}
            {email}<br />{password}
            <br />

        </div>
    );
}

export default Destructuring;
