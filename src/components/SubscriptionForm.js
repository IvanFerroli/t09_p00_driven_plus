import { useNavigate, Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import styled from "styled-components"

export default function SubscriptionForm() {
	const tokenOnLocalStorage = localStorage.getItem("token");
	const [token] = useState(tokenOnLocalStorage);
    const { subscriptionsId } = useParams();
	const [cardName, setCardName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [securityNumber, setSecurityNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
    const [confirmPurchase, setConfirmPurchase] = useState(false);
	const [visibility, setVisibility] = useState(false)
	const navigate = useNavigate();

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	const body = {
		membershipId: subscriptionsId,
		cardName: cardName,
		cardNumber: cardNumber,
		securityNumber: securityNumber,
		expirationDate: expirationDate,
	};
	
	function confirmationModal() {
		setVisibility(true)
		alert(visibility)
		return(
			<StyledModal visibility={visibility}>
				<h1>Confirma essa porra?</h1>
				<div>
					<button onClick={() => {setConfirmPurchase(true)}}>Sim caceta</button>
					<button onClick={() => {setVisibility(false)}}>Não, vai tomar no cu</button>
				</div>
			</StyledModal>
		)
	}

	function purchasePlan(event) {
		event.preventDefault();

		confirmationModal() 

		if(confirmPurchase === true) {
			const subRes = axios
			.post(`${BASE_URL}subscriptions`, body, config)
			.then(() => {
                console.log(subRes)
            })
			.catch(() => {
				alert("Deu ruim major");
			});
		}else{
			navigate("/subscriptions")
		}
	}

	return (
		<form onSubmit={() => {
			purchasePlan()
			setVisibility(true)
		}}>
			<input
				type="text"
				placeholder="Nome impresso no cartão"
				value={cardName}
				onChange={(e) => setCardName(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Dígitos do cartão"
				value={cardNumber}
				onChange={(e) => setCardNumber(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Código de segurança do cartão"
				value={securityNumber}
				onChange={(e) => setSecurityNumber(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="validade"
				value={expirationDate}
				onChange={(e) => setExpirationDate(e.target.value)}
				required
			/>
			<button type="submit">Assinar</button>
		</form>
	);
}

const StyledModal = styled.div`
	position: absolute;
	margin: 0;
	display: ${props => props.visibility === true? 'flex' : 'none'};	
    align-items: center;
    font-size: 20px;
    z-index: 2;
	height: 30%;
	width: 30%;
`
