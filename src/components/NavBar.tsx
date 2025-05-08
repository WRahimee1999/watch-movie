import "../css/NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Watch Movie</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/tv-shows" className="nav-link">TV Shows</Link>
                <Link to="/favorite-movies" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}