import { useState, useEffect } from "react";
import { getShow, deleteShow } from "../services/shows.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function ShowDetail() {
    const [show, setShow] = useState({})

    let { title } = useParams()
    let navigate = useNavigate()

    const fetchShow = async () => {
        const oneShow = await getShow(title)
        setShow(oneShow)
    }

    useEffect(() => {
        fetchShow()
    }, [])

    const handleDelete = async () => {
        await deleteShow(title)
        navigate("/shows")
    }

    return (
        <div>
            <img src={show.posterImage} alt={show.title} />
            <h1>{show.title}</h1>
            <h2>Director: {show.directedBy}</h2>
            <h2>Author: {show.bookBy}</h2>
            <h2>Composer: {show.musicBy}</h2>
            <p>Theater: {show.theater}</p>
            <p>Theater Address: {show.theaterAddress}</p>
            <p>Run Time {show.runTime}</p>
            <p>Open Date: {show.openDate}</p>
            <p>Has End Date: {show.isClosing}</p>
            <p>Has intermission: {show.intermission}</p>
            <p>Musical: {show.isMusical}</p>
            <p>Show Site: {show.officialSite}</p>
            <p>Tickets: {show.buyTickets}</p>
            
            <div>
                <Link to={`/shows/${title}/edit`}>
                    <button>edit</button>
                </Link>
                <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}

export default ShowDetail