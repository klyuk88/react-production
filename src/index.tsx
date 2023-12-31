import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import App from "./App"
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("app"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>

);
