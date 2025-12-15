import {BrowserRouter,Routes,Route, Navigate} from 'react-router'
import PageNotFound from './43PageNotFound'
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
            <Route path='/*' element={<PageNotFound/>} />

            {/* Auto redirect to "./" if 404 issue found*/}
            {/* <Route path='/*' element={<Navigate to="./" /> }/> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}