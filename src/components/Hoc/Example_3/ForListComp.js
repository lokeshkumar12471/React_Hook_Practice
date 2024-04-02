import ListComp from "./ListComp"

const ForListComp = () => {
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
    return (
        <>
            <ListComp main={movies} />
            <hr />
            <ListComp main={users} />
        </>
    )

}

export default ForListComp