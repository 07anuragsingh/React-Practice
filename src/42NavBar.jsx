import { Link } from "react-router"
import './42NavBar.css'
export default function Navbar() {
    return (
        <div className="container">
            <div className="logo">
                <h3>Logo</h3>
            </div>
            <div className="linksContainer">
                <Link className="link" to='/'><h3>Home</h3></Link>
                <Link className="link" to='/about'><h3>About</h3></Link>
                <Link className="link" to='/main'><h3>Main</h3></Link>
                <Link className="link" to='/mddfsdsdfain'><h3>404</h3></Link>
                <Link className="link" to='/nestednav'><h3>NestedNav</h3></Link>
            </div>
        </div>
    )
}