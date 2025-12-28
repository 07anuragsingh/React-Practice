import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import AxiosApi from "./48AxiosGET";
import AxiosPost from "./48AxiosPost";
import EditUserDetail from "./48AxiosPUT";

export default function AxiosRuutes(){
    
    return(
        <>
        <h2>Make Routes and pages for Add user and Show User List UI</h2>
        <BrowserRouter>
        <ul>
            <li><NavLink to="/">Show User List</NavLink></li>
            <li><NavLink to="/add">Add user</NavLink></li>
        </ul>
        
            <Routes>
                <Route path="/" element={<AxiosApi/>}/>
                <Route path="/add" element={<AxiosPost/>}/>
                <Route path="/edit/:id?" element = {<EditUserDetail/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}