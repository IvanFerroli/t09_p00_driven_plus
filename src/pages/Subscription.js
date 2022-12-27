import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
import { BASE_URL } from "../constants/urls"
import SubscriptionForm from "../components/SubscriptionForm";
import back from "../assets/img/back.png"


export default function Subscription() {
    const navigate = useNavigate()
    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token] = useState(tokenOnLocalStorage);
	const { subscriptionsId } = useParams();
    const [membership, setMembership] = useState(undefined);
    const [membershipName, setMembershipName] = useState('');
    const [membershipImage, setMembershipImage] = useState('');
    const [membershipPrice, setMembershipPrice] = useState('');
    const [membershipPerks, setMembershipPerks] = useState([]);
    
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

    useEffect(() => {
		const res = axios.get(`${BASE_URL}subscriptions/memberships/${subscriptionsId}`, config)	
        .then(res => {	
            setMembership(res.data)
			setMembershipName(res.data.name);	
            setMembershipImage(res.data.image);
            setMembershipPrice(res.data.price);
            setMembershipPerks(res.data.perks);
			})
        .catch(() => 
		{alert("Deu ruim major")
	})
	}, []);

	if (membership === undefined) {
		return <img src={loading} alt="Loading" />;
	}

return (
    
	<>  <button onClick={() => {navigate("/subscriptions")}}>
        <img src={back} alt="Back" />
        </button>
        <img src={membershipImage} alt={membershipName}/>
        <h1>{membershipName}</h1>
        <h1>{membershipPrice}</h1>
        {membershipPerks.map((perk) => (
            <>
            <h1>{perk.title}</h1>
            <h1>{perk.link}</h1>
            <h1>{perk.id}</h1>
            </>
        ))}
        <SubscriptionForm />
    </>
)
}
