import {BrowserRouter,Routes,Route, Navigate} from 'react-router'
import PageNotFound from './43PageNotFound'
import Navbar from './42NavBar'
import College from './43NestedNav'
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
            {/* Nested Navigation */}
            <Route path='/nestednav' element={<College/>}>
                <Route path='student' element ={<p >Student Page is hitted with the help of Nested navigation</p>}></Route>
                <Route path='subject' element ={<h1 >subject Page is hitted with the help of Nested navigation</h1>}></Route>
                <Route path='class' element ={<h1 >class Page is hitted with the help of Nested navigation</h1>}></Route>
            </Route>

            {/* Auto redirect to "./" if 404 issue found*/}
            {/* <Route path='/*' element={<Navigate to="./" /> }/> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}