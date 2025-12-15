import {BrowserRouter,Routes,Route} from 'react-router'
import Navbar from './42NavBar'
export default function ReactRouter(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<h2>Home</h2>}/>
            <Route path='/about' element={<h2>About</h2>}/>
            <Route path='/main' element={<h2>Main</h2>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}