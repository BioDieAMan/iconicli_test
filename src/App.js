import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landingpage from "./Pages/Landingpage";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";
import Preloadingpage from "./Pages/Preloadingpage";

import "./App.css";
import "./index.css";
import history from "./history";

//TODO: rewrite all the components into function component

function App() {
    return (
		<div className="App">
			<BrowserRouter>
				<Routes history={history}>
					<Route exact path="/" element={<Landingpage />} />
                    <Route path="/login" element={<Loginpage/>} />
					<Route path="/register" element={<Registerpage />} />
					<Route path="/preload" element={<Preloadingpage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
