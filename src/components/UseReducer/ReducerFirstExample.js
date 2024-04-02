import React, { useReducer } from 'react';
const reducer = (state, action) => {
    if (action.type === "Delete_Person") {
        const newperson = state.filter((items) => {
            return items.id !== action.payload
        })
        return newperson;

    }

}
const ReducerFirstExample = () => {
    const initialState = [
        {
            id: 1,
            name: "kiran",
            email: "kiran@gmail.com",
            phone: 9955500043,
        },
        {
            id: 2,
            name: "manish",
            email: "manish@gmail.com",
            phone: 8465258232,
        }
    ]


    const [state, dispatch] = useReducer(reducer, initialState);
    const handleDelete = (id) => {
        dispatch({
            type: "Delete_Person",
            payload: id
        })
    }

    return (
        <div>
            <h6>useReducer Hook In React,This is First Example</h6>
            seReducer is a hook that is used for state management
            It is alternative to useState
            Internally useReducer using useState hook only
            When to useReducer and useState to use ?
            used to handle state of component like useState(),
            Handling complex state useReducer() is good.
            syntax:- useState(initialState) useReducer(function, initialState)
            The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
            The useReducer Hook returns the current state and a dispatch method.
            <h1>Current User Length :{state.length}</h1>
            {state.map((items) => {
                return (
                    <div key={items.id}>
                        Name :{items.name}
                        email :{items.email}
                        phone :{items.phone}
                        <button onClick={() => handleDelete(items.id)}>Delete</button>
                    </div>

                )
            })
            }

        </div>
    );
}

export default ReducerFirstExample;
