import React from 'react';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { Link } from 'react-router-dom';
import { thunk } from 'redux-thunk';
//It is all about Managing State Values in multiple Components at a time,using Redux Store, In Between we don't use props. we can use that state values Globally.and we can call it as State Management.
//  we need three dependencies for redux to work properly. 1. npm install redux, 2.npm install react-redux and 3.npm install redux-thunk.
//redux flow--> 1.Store 2.Provider 3.Action 4.Reducer  5.Components 6.again back to Store
// eslint-disable-next-line 
const initialState = {
    fullName: "",
    balance: 0,
    mobile: null,
}

const middlewareInitialState = {
    userData: {
        id: "",
        name: "",
        mobile: "",
    }
}


function accountReducer(state = initialState, action) {

    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + +action.payload }
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload }
        case "account/nameUpdate":
            return { ...state, fullName: action.payload }
        case "account/mobileUpdate":
            return { ...state, mobile: action.payload }
        case "account/reset":
            return initialState;
        default:
            return state;
    }
}
function transactionReducer(state = [], action) {
    switch (action.type) {
        case "add_transaction":
            return [...state, { id: action.payload.id, amount: action.payload.amount, type: action.payload.type, date: action.payload.date }];
        default:
            return state;
    }
}

function middlwarethunkReducer(state = middlewareInitialState, action) {
    switch (action.type) {
        case "add":
            return { ...state, userData: action.payload }
        default:
            return state
    }
}


// combine multiple Reducers function By Redux.
let rootReducers = combineReducers({
    account: accountReducer,
    transaction: transactionReducer,
    middlewarethunk: middlwarethunkReducer
})

export const Reduxstore = legacy_createStore(rootReducers, applyMiddleware(thunk));

// console.log(Reduxstore.getState())
// Reduxstore.dispatch({ type: "account/deposit", payload: 1000 })
// Reduxstore.dispatch({ type: 'account/withdraw', payload: 10 })
// Reduxstore.dispatch({ type: 'account/mobileUpdate', payload: 9553970194 })
// Reduxstore.dispatch({ type: 'account/nameUpdate', payload: 'lokesh' })
// console.log(Reduxstore.getState());

const Redux = () => {
    return (
        <div>
            <h6>It is all about Managing State Values in multiple Components at a time,using Redux Store, In Between we don't use props. we can use that state values Globally.and we can call it as State Management.
                we need three dependencies for redux to work properly. 1. npm install redux, 2.npm install react-redux and 3.npm install redux-thunk.
                redux flow ----- 1.Store 2.Provider 3.Action 4.Reducer 5.Components  </h6>
            <Link to={'/reduxaccount'} className='btn btn-primary btn-sm'>ReduxAccount</Link>
            <br />
        </div>

    );
}

export default Redux;
