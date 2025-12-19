import { NavLink, Outlet } from "react-router"
import './42NavBar.css'
export default function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <h3>Logo</h3>
                </div>
                <div className="linksContainer">
                    <NavLink className={({ isActive }) => isActive ? 'custom-active link' : 'link'} to='/user/about'><h3>About</h3></NavLink>
                    <NavLink className="link" to='/'><h3>Home</h3></NavLink>
                    <NavLink className="link" to='/user/main'><h3>Main</h3></NavLink>
                    <NavLink className="link" to='/mddfsdsdfain'><h3>404</h3></NavLink>
                    <NavLink className="link" to='/nestednav'><h3>NestedNav</h3></NavLink>
                    <NavLink className="link" to='/users'><h3>Users</h3></NavLink>
                    <NavLink className="link" to='/users/list'><h3>List</h3></NavLink>

                </div>

            </div>
            <Outlet />
        </div>
    )
}