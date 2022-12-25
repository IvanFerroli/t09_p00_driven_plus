import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Subscriptions from "./pages/Subsciptions";

import UserContext from "./contexts/UserContext";
import MembershipContext from "./contexts/MembershipContext";

function App() {
	// const navigate = useNavigate();
	const tokenOnLocalStorage = localStorage.getItem("token");
	// const membershipOnLocalStorage = localStorage.getItem("membership");
	const [token, setToken] = useState(tokenOnLocalStorage);
	// const [membership, setMembership] = useState(membershipOnLocalStorage);

	function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

	// function setAndPersistMembership(membership) {
	// 	setMembership(membership);
	// 	localStorage.setItem("membership", membership);
	// }

	// function setAndPersistLogin() {
	// 	if (token !== null && membership !== null) {
	// 		navigate("/home");
	// 	} else if (token !== null && membership === null) {
	// 		navigate("/subscriptions");
	// 	} else {
	// 		navigate("/");
	// 	}
	// }
	// setAndPersistLogin();

	return (
		<>
			<UserContext.Provider
				value={{ token, setToken, setAndPersistToken }}
			>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/cadastro" element={<SignUp />} />
						<Route path="/" element={<Login />} />
						{/* <MembershipContext.Provider
							value={{
								membership,
								setMembership,
								setAndPersistMembership,
							}}
						> */}
							<Route path="/home" element={<Home />} />
							<Route
								path="/subscriptions"
								element={<Subscriptions />}
							/>
						{/* </MembershipContext.Provider> */}
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
