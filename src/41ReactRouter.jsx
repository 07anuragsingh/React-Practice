import {BrowserRouter,Routes,Route,Link} from 'react-router'
export default function ReactRouter(){
    return(
        <>
        <BrowserRouter>
        <Link to='/'><h3>HOme</h3></Link>
        <Link to='/about'><h3>About</h3></Link>
        <Link to='/main'><h3>Main</h3></Link>
        <Routes>
            <Route path='/' element={<h2>Home</h2>}/>
            <Route path='/about' element={<h2>About</h2>}/>
            <Route path='/main' element={<h2>Main</h2>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}