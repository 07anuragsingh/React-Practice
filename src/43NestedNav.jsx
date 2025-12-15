import { NavLink, Outlet } from "react-router";
import './43NestedNav.css'

export default function College(){
    return (
        <div  style={{textAlign:"center"}}>
            <h2 >College Page</h2>
            <div className="navLinkContainer">
                <NavLink className="navlink" to='student'>student</NavLink>
                <NavLink className="navlink" to='subject'>subject</NavLink>
                <NavLink className="navlink" to='class'>class</NavLink>
                <Outlet/>
            </div>
        </div>
    )
}