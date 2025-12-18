import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import PageNotFound from './43PageNotFound'
import Navbar from './42NavBar'
import College from './43NestedNav'
export default function ReactRouter() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar/> */}
                <Routes>
                    {/* ROute Layout  College page se NAvbar Hta dega*/}
                    <Route element={<Navbar />} >
                        <Route path='/' element={<h2>Home</h2>} />

                        {/* Route Prefix */}
                        <Route path='/user'>
                            <Route path='/user/about' element={<h2>About</h2>} />
                            <Route path='/user/main' element={<h2>Main</h2>} />
                        </Route>
                        <Route path='/*' element={<PageNotFound />} />
                    </Route>
                    {/* Nested Navigation */}
                    <Route path='/nestednav' element={<College />}>
                        {/* <Route path='student' element={<p >Student Page - Nested navigation</p>}></Route> */}


                        {/* Route Index - by default student page ka data aaega */}
                        <Route index element={<p >Student Page - Nested navigation</p>}></Route>

                        <Route path='subject' element={<h1 >subject Page - Nested navigation</h1>}></Route>
                        <Route path='class' element={<h1 >class Page - Nested navigation</h1>}></Route>
                    </Route>

                    {/* Auto redirect to "./" if 404 issue found*/}
                    {/* <Route path='/*' element={<Navigate to="./" /> }/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}