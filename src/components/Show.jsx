import { Link } from 'react-router-dom'

function Show({ show }) {
    return (
        <div>
            <Link to={`/shows/${show.title}`}>
                <img className="show-image" src={show.posterImage} alt={show.title} />
            </Link>
        </div>
    )
}

export default Show