import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// We will call this "Action Creators in React-Redux."
import { deposit, withdraw, nameUpdate, mobileUpdate, reset } from './Actions';

const Account = () => {
    let data = useSelector((state) => {
        return {
            account: state.account,
            transaction: state.transaction,
            middlewarethunk: state.middlewarethunk.userData
        };
    });
    console.log(data);
    let formiddlewarethunk = useDispatch()
    let dispatch = useDispatch();
    const [amount, setAmount] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState(null);
    const [transactionId, setTransactionId] = useState(0);
    async function fetchData(dispatching, getState) {
        console.log(getState());
        let resData = await fetch('https://jsonplaceholder.typicode.com/users/2');
        let data = await resData.json();
        dispatching({ type: 'add', payload: data })
    }


    return (
        <>
            <div className='container'>
                <h4 className='text-primary'>Account Details</h4>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Balance</th>
                                <th>FullName</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.account.balance}</td>
                                <td>{data.account.fullName}</td>
                                <td>{data.account.mobile}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h4 className='text-primary'>Transaction Details</h4>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.transaction.map((items) =>
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.type}</td>
                                        <td>{items.amount}</td>
                                        <td>{items.date.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>




                <br />
                <div className='container'>
                    <h3>Form</h3>
                    <br />
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type='number' placeholder='Enter Amount' value={amount} className='form-control' onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-primary w-100' onClick={() => {
                                //   you can use the below comment code to dispatch actions, which will hit the account reducer function; it also works fine.Alternatively, you can use the actions function, which also works fine, but this will be called as action creators.
                                // dispatch({ type: 'account/deposit', payload: amount });
                                dispatch(deposit(amount));
                                setTransactionId(transactionId + 1);
                                dispatch({ type: "add_transaction", payload: { id: transactionId, type: "Credit", amount: amount, date: new Date() } })
                                setAmount("")
                            }}>Deposit</button>
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-danger w-100' onClick={() => {
                                //   you can use the below comment code to dispatch actions, which will hit the account reducer function; it also works fine.Alternatively, you can use the actions function, which also works fine, but this will be called as action creators.
                                // dispatch({ type: 'account/withdraw', payload: amount });
                                setTransactionId(transactionId + 1);
                                dispatch({ type: "add_transaction", payload: { id: transactionId, type: "Debit", amount: amount, date: new Date() } })
                                dispatch(withdraw(amount));
                                setAmount("");
                            }}>Withdraw</button>
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type='text' placeholder='Enter Full Name' value={fullName} className='form-control' onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-primary w-100' onClick={() => {
                                //   you can use the below comment code to dispatch actions, which will hit the account reducer function; it also works fine.Alternatively, you can use the actions function, which also works fine, but this will be called as action creators.
                                // dispatch({ type: 'account/nameUpdate', payload: fullName });
                                dispatch(nameUpdate(fullName));
                                setFullName("");
                            }}>Update</button>
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type='number' placeholder='Enter Mobile' value={mobile} className='form-control' onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-primary w-100' onClick={() => {
                                //   you can use the below comment code to dispatch actions, which will hit the account reducer function; it also works fine.Alternatively, you can use the actions function, which also works fine, but this will be called as action creators.
                                // dispatch({ type: 'account/mobileUpdate', payload: mobile });
                                dispatch(mobileUpdate(mobile));
                                setMobile("");
                            }}>Update</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-2'>
                        <button className='btn btn-danger w-100' onClick={() => {
                            //   you can use the below comment code to dispatch actions, which will hit the account reducer function; it also works fine.Alternatively, you can use the actions function, which also works fine, but this will be called as action creators.
                            // dispatch({ type: 'account/reset' });
                            dispatch(reset());
                        }}>Reset</button>
                    </div>
                </div>

            </div>
            <br />
            <div className='container'>
                <h3>Redux Middleware Thunk</h3>
                <h5>This is the Process we will use while fetch the Api in redux.</h5>
                <h5>1.reducer fuction 2.In dispatch, we will pass the reducer function name 3.then after dispatch will call the reducer function.</h5>

                <br />
                <div>
                    Id:   {data.middlewarethunk.id}
                </div>
                <div>
                    Name:  {data.middlewarethunk.name}
                </div>
                <div>
                    Mobile: {data.middlewarethunk.phone}
                </div>
                <div>
                    Email: {data.middlewarethunk.email}
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <button className='btn btn-primary w-100' onClick={() => {
                            // In dispatch, we will pass the reducer function name..
                            formiddlewarethunk(fetchData)
                        }}>GetApi Data</button>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Account;
