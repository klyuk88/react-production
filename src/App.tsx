import "./app.scss";
import Main from "./pages/main";
import About from "./pages/about";
import {
    createBrowserRouter,
    Link, Route, Routes
} from "react-router-dom";

export default function App () {
    return (
        <div className="app">
            <div className="container">
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
                <Routes>
                    <Route path={'/'} element={<Main/>}></Route>
                    <Route path={'/about'} element={<About/>}></Route>
                </Routes>
                
            </div>

        </div>
    )
}