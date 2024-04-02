import React from 'react'
import useCustomHookThird from './CustomHookThird'
const CustomHookSubThird = () => {
    const Url = 'https://jsonplaceholder.typicode.com/posts';
    const [userData, loading, iserror] = useCustomHookThird(Url);

    if (iserror) {
        return <div>Sorry! There is an Error</div>
    }
    if (loading) {
        return <h6>Loading.....</h6>
    }
    return (
        <div>
            <h6>Custom Hook In React, This is Third Example</h6>
            <h5>Custom Hook Practice By Fetch Data</h5>
            {

                userData.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li key={item.id}>{item.title}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default CustomHookSubThird
