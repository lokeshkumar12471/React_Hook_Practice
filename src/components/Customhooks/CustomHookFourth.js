import { useState } from 'react';

const useCustomHookFourth = () => {
    const [showMovies, setShowMovies] = useState(true);
    const [showUsers, setShowUsers] = useState(true);

    const toggleMovies = () => {
        setShowMovies(!showMovies)
    }
    const toggleUsers = () => {
        setShowUsers(!showUsers)
    }
    const movies = [
        { id: 1, name: "firstmovie" },
        { id: 2, name: "secondmovie" },
        { id: 3, name: "thirdmovie" },

    ]
    const users = [
        { id: 1, name: "lokesh" },
        { id: 2, name: "kalyan" },
        { id: 3, name: "manish" },

    ]
    return { showUsers, showMovies, toggleMovies, toggleUsers, users, movies }
}

export default useCustomHookFourth;
