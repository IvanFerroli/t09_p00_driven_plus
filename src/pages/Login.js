import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import UserContext from "../contexts/UserContext";
import MembershipContext from "../contexts/MembershipContext";

export default function Login () {
	const { setAndPersistToken } = useContext(UserContext);
	// const { setAndPersistMembership } = useContext(MembershipContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate()

	function fazerLogin (event) {
		event.preventDefault();
		setDisabled(true);
		const res = axios.post(`${BASE_URL}auth/login`, {
			email: email,
			password: password
		})	
        .then(res => {	
			setAndPersistToken(res.data.token);	
			// setAndPersistMembership(res.data.membership);	
			if(res.data.membership !== null){
				navigate("/home")
			}else{
				navigate("/subscriptions")
			}
			setDisabled(false)
			})
        .catch(() => 
		{alert("Deu ruim major")
		setDisabled(false)
	})
	}

	return (
		<form onSubmit={fazerLogin}>
		  <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} required/>
		  <input type="password" placeholder="senha
		  " value={password} onChange={e => setPassword(e.target.value)} disabled={disabled} required/>
		  <button type="submit" disabled={disabled}>Login</button>
          <Link to="cadastro"><h1>Cadastre-se</h1></Link>
		</form>
	);
}
