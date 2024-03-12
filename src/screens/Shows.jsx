import { useState, useEffect } from "react";
import { getShows } from "../services/shows.js";
import Show from "../components/Show.jsx";

function Shows() {
    const [shows, setShows] = useState([])

    async function fetchShows() {
        const allShows = await getShows()
        setShows(allShows)
    }

    useEffect(() => {
        fetchShows()
    }, [])

    return (
        <div>
            <h1>all of the shows</h1>
            <div className='shows-container'>
                {
                    shows.map((show) => (
                        <Show show={show} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shows;