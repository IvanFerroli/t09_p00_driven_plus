import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import UserContext from "../contexts/UserContext";

export default function Login () {
	const { setAndPersistToken } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate()
	
	function setAndPersistUserName(userName) {
		localStorage.setItem("userName", userName);
	}
	
    function setAndPersistMembershipImage(membershipImage) {
		localStorage.setItem("membershipImage", membershipImage);
	}

	function setAndPersistMembershipName(membershipName) {
		localStorage.setItem("membershipName", membershipName);
	}
    
    function setAndPersistMembershipPrice(membershipPrice) {
		localStorage.setItem("membershipPrice", membershipPrice);
	}
   
     function setAndPersistMembershipPerksTitle(membershipPerksTitle) {
		localStorage.setItem("membershipPerksTitle", membershipPerksTitle);
	 }

	function fazerLogin (event) {
		event.preventDefault();
		setDisabled(true);
		const res = axios.post(`${BASE_URL}auth/login`, {
			email: email,
			password: password
		})	
        .then(res => {	
			setAndPersistToken(res.data.token);	
			setAndPersistUserName(res.data.name);
			setAndPersistMembershipImage(res.data.membership.image)
			setAndPersistMembershipName(res.data.membership.name)
			setAndPersistMembershipPrice(res.data.membership.price)
			console.log(res.data.membership.perks)
			const arrayPerks = res.data.membership.perks;
			var arrayPerksTitle = [];
			//setAndPersistMembershipPerks(arrayPerks) 
			 for(let i = 0; i < arrayPerks.length; i++) {
				var title = arrayPerks[i].title;
				arrayPerksTitle.push(title);
			//setAndPersistMembershipPerksTitle(...arrayPerksTitle, title)
			}
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
