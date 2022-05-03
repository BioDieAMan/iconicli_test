import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./Pages/Landingpage";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";

function App() {
    return (
        <div className="App">
            <BrowserRouter >
                <Routes history={history} >
                    <Route exact path="/" element={<Landingpage />} />
                    <Route path="/login" element={<Loginpage />} />
                    <Route path="/register" element={<Registerpage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
