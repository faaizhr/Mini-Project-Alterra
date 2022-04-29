import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                    <Link class="nav-link" to="/comics">Comics</Link>
                    <Link class="nav-link" to="/genres">Genres</Link>
                    <a class="nav-link" href="#">About Us</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;