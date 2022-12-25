import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import UserContext from "../contexts/UserContext";
import MembershipContext from "../contexts/MembershipContext";
import { useState, useEffect } from "react";
import loading from "../assets/img/loading.gif";


export default function Home() {
    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token] = useState(tokenOnLocalStorage);
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
	const [subscriptions, setSubscriptions] = useState(undefined);
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
	useEffect(() => {
		const res = axios.get(`${BASE_URL}subscriptions/memberships`, config)	
        .then(res => {	
            setSubscriptions(res.data)
			setId(res.data.id);		
            setImage(res.data.image);	
			setPrice(res.data.price);	
			})
        .catch(() => 
		{alert("Deu ruim major")
	})
	}, []);

	if (subscriptions === undefined) {
		return <img src={loading} alt="Loading" />;
	}

	return (
		<ul>
			{subscriptions.map((subscription) => (
				<Link to={`subscriptions/${subscription.id}`}>
					<h1>{subscription.id}</h1>
					<img src={subscription.image} alt="BATATA" />
					<h2>{subscription.price}</h2>
				</Link>
			))}
		</ul>
	);
}