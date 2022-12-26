import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import { useContext, useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Subscriptions from "./pages/Subscriptions";
import Subscription from "./pages/Subscription";
import UserContext from "./contexts/UserContext";

function App() {
	const [subscriptions, setSubscriptions] = useState(undefined);
	const tokenOnLocalStorage = localStorage.getItem("token");
	const [token, setToken] = useState(tokenOnLocalStorage);

	function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

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

						<Route path="/home" element={<Home />} />
						<Route
							path="/subscriptions"
							element={
								<Subscriptions
									subscriptions={subscriptions}
									setSubscriptions={setSubscriptions}
								/>
							}
						/>
						<Route
							path="/subscriptions/:subscriptionsId"
							element={
								<Subscription
									subscriptions={subscriptions}
									setSubscriptions={setSubscriptions}
								/>
							}
						/>
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
