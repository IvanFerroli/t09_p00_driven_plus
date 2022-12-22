import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/cadastro" element={<SignUp />} />
					<Route path="/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
