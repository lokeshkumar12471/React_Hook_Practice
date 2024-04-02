import React from 'react';
import useCustomHookFourth from './CustomHookFourth';

const CustomHookSubFourth = () => {
    const { showUsers, showMovies, toggleMovies, toggleUsers, users, movies } = useCustomHookFourth();
    return (
        <>
            <h6>Custom Hook In React, This is Fourth Example</h6>
            <div onClick={toggleMovies}><span>This is Custom Hook{">"}</span></div>
            {showMovies && movies.map(movie => <div key={movie.id}>{movie.name}</div>)}
            <div onClick={toggleUsers}><span>This is Custom Hook{">"}</span></div>
            {showUsers && users.map(user => <div key={user.id}>{user.name}</div>)}
        </>
    )
}

export default CustomHookSubFourth;
