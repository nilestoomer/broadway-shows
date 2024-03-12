import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-stuff">
            <h1 className="site-name">Curtain Call Central</h1>
            <div className="nav-links">
                <NavLink className="nav-options" to="/">Home</NavLink>
                <NavLink className="nav-options" to="/shows">Shows</NavLink>
                <NavLink className="nav-options" to="/add-show">Add New Show</NavLink>
            </div>
        </nav>
    )
}

export default Nav