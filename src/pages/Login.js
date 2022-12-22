import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";

export default function Login () {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate()

	function fazerLogin (event) {
		event.preventDefault();
		setDisabled(true);
		const req = axios.post(`${BASE_URL}auth/login`, {
			email: email,
			password: password
		})
        .then(() => {
			navigate("/home")
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