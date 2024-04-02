import React, { useEffect, useReducer, useState } from 'react';

const ReducerSecondExample = () => {
    const InitialState = {
        isLoading: false,
        userData: [],
        isError: { status: false, msg: "" },
        isEditing: { status: false, id: "", name: "", email: "" }
    };

    const reducer = (state, action) => {

        if (action.type === "Delete_User") {
            const Delete =
                state.userData.filter((item) => item.id !== action.payload);
            return {
                ...state, userData: Delete,
            }
        } if (action.type === "Display_User_Details") {
            return {
                ...state,
                userData: action.payload,
            }
        }
        if (action.type === "ONCLICK_EDIT") {
            return {
                ...state,
                isEditing: action.payload,
            }
        }
        if (action.type === "UPDATE_USER") {
            const newupdate = state.userData.map((eachUser) => {
                if (eachUser.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        name: action.payload.name,
                        email: action.payload.email,

                    }
                } else {
                    return eachUser;
                }
            });
            return {
                ...state,
                userData: newupdate,
            };
        }
        else {
            return state;
        }



    }
    const [state, sendtoreducer] = useReducer(reducer, InitialState);
    const handleDelete = (id) => {
        sendtoreducer({ type: "Delete_User", payload: id })
    }


    useEffect(() => {
        const fetchuserData = async () => {
            sendtoreducer({ type: "Loading", payload: true });
            sendtoreducer({ type: "Error", payload: { status: false, msg: "" } });
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await response.json();
                sendtoreducer({ type: "Display_User_Details", payload: data });
                sendtoreducer({ type: "Loading", payload: false });
                sendtoreducer({ type: "Error", payload: { status: false, msg: "" } });
            } catch (error) {
                console.log(error);
                sendtoreducer({ type: "Loading", payload: false });
                sendtoreducer({ type: "Error", payload: { status: true, msg: error.message } });
            }

        }
        fetchuserData();
    }, [])
    if (state.isLoading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }
    const updateData = (id, name, email) => {
        sendtoreducer({
            type: "UPDATE_USER",
            payload: {
                id,
                name,
                email,
            },
        });
        sendtoreducer({
            type: "ONCLICK_EDIT",
            payload: { status: false, id: "", name: "", email: "" },
        });
    };
    return (
        <div>
            <h6>useReducer Hook In React,This is Second Example</h6>
            <h1>User Information</h1>
            {state.isEditing?.status && <EditFormContainer id={state.isEditing.id} comingEmail={state.isEditing.email} comingName={state.isEditing.name} updateData={updateData} />}
            {
                state.userData.map((items) => {
                    const { id, name, email } = items
                    return (
                        <div
                            key={id} style={{ background: 'lightblue' }}>
                            <h6>{name}</h6>
                            <h6>{email}</h6>
                            <button onClick={() => handleDelete(items.id)}>Delete</button>
                            <button onClick={() => sendtoreducer({ type: "ONCLICK_EDIT", payload: { status: true, id: id, name: name, email: email } })}>Update</button>

                        </div>


                    )
                })
            }

        </div>
    )
}


const EditFormContainer = ({ id, comingName, comingEmail, updateData }) => {
    const [name, setName] = useState(comingName || "");
    const [email, setEmail] = useState(comingEmail || "");

    return (
        <div>
            <form>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" email="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={() => updateData(id, email, name)}>Update Data</button>
            </form>
        </div>
    )
}
export default ReducerSecondExample;