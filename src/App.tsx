import "./assets/scss/index.scss";
import {lazy, Suspense} from 'react';
const Main = lazy(() => import('./pages/main'))
const About = lazy(() => import('./pages/about'))
import {
    Link, Route, Routes
} from "react-router-dom";

export default function App () {
    return (
        <div className="app">
            <div className="container mx-auto">
                <ul>
                    <li>
                        <Link to="/">
                            Main
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
                <Suspense fallback={'...Loading'}>
                    <Routes>
                        <Route path={'/'} element={<Main/>}></Route>
                        <Route path={'/about'} element={<About/>}></Route>
                    </Routes>
                </Suspense>
            </div>

        </div>
    )
}