import React from "react";
//Higher Order Component
function AuthCheck(Component) {
    let authenticated = false;

    return (props) => {
        if (authenticated) {
            return <Component {...props} />
        } else {
            return <Login />
        }
    }
}

function Login() {
    return (

        <h3>This is Login Component</h3>

    )
}

function User(props) {
    return (
        <>
            <h1>This is User Component</h1>
            <h1>Hello {props.username}</h1>
        </>
    )
}


const AuthChecked = AuthCheck(User)
function AuthHocExample() {
    return (
        <AuthChecked username={"Lokesh"} />
    )
}

export default AuthHocExample;