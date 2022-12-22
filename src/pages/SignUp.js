import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";

export default function SignUp () {
	const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate()

	function fazerCadastro (event) {
		event.preventDefault();
		setDisabled(true);
		const req = axios.post(`${BASE_URL}auth/sign-up`, {
			email: email,
            name: name,
            cpf: cpf,
			password: password
		})
        .then(() => {
			navigate("/")
			setDisabled(false)
		})
        .catch(() => 
		{alert("Deu ruim major")
		setDisabled(false)
	})
	}

	return (
		<form onSubmit={fazerCadastro}>
		  <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} required/>
		  <input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} disabled={disabled} required/>
          <input type="text" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} disabled={disabled} required/>
		  <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabled} required/>
		  <button type="submit" disabled={disabled}>Cadastrar</button>
          <Link to="/"><h1>Login</h1></Link>
		</form>
	);
}