import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import { useContext, useState } from "react";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home"

import UserContext from "./contexts/UserContext";

function App() {
	
	const tokenOnLocalStorage = localStorage.getItem("token");
	const [token, setToken] = useState(tokenOnLocalStorage);

	function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

	return (
		<>
			<UserContext.Provider value={{ token, setToken, setAndPersistToken }}>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/cadastro" element={<SignUp />} />
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
