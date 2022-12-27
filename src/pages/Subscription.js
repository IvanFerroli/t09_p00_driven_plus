import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
import { BASE_URL } from "../constants/urls"
import SubscriptionForm from "../components/SubscriptionForm";


export default function Sessions() {
    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token] = useState(tokenOnLocalStorage);
	const { subscriptionsId } = useParams();
    const [membership, setMembership] = useState(undefined);
    
    const [membershipName, setMembershipName] = useState('');
    function setAndPersistMembershipName(membershipName) {
		localStorage.setItem("membershipName", membershipName);
	}
    

    const [membershipImage, setMembershipImage] = useState('');
    function setAndPersistMembershipImage(membershipImage) {
		localStorage.setItem("membershipImage", membershipImage);
	}
    

    const [membershipPrice, setMembershipPrice] = useState('');
    function setAndPersistMembershipPrice(membershipPrice) {
		localStorage.setItem("membershipPrice", membershipPrice);
	}
   

    const [membershipPerks, setMembershipPerks] = useState([]);
    function setAndPersistMembershipPerks(membershipPerks) {
		localStorage.setItem("membershipPerks", membershipPerks);
	}
    
    
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

    useEffect(() => {
		const res = axios.get(`${BASE_URL}subscriptions/memberships/${subscriptionsId}`, config)	
        .then(res => {	
            setMembership(res.data)
			})
        .catch(() => 
		{alert("Deu ruim major")
	})
	}, []);

	if (membership === undefined) {
		return <img src={loading} alt="Loading" />;
	}

return (
    
	<>
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
