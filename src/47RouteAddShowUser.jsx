import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import AddUser from "./47AddUser";
import ShowUserList from "./47ShowUser";
export default function AddShowUser(){
    return(
        <>
        <h2>Make Routes and pages for Add user and Show User List UI</h2>
        <BrowserRouter>
        <ul>
            <li><NavLink to="/">Show User List</NavLink></li>
            <li><NavLink to="/Add">Add user</NavLink></li>
        </ul>
        
            <Routes>
                <Route path="/" element={<ShowUserList/>}/>
                <Route path="/Add" element={<AddUser/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}