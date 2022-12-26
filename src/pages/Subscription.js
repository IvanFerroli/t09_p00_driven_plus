import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
import { BASE_URL } from "../constants/urls"


export default function Sessions() {
    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token] = useState(tokenOnLocalStorage);
	const { subscriptionsId } = useParams();
    const [membership, setMembership] = useState(undefined);
    const [membershipName, setMembershipName] = useState('');
    const [membershipImage, setMembershipImage] = useState('');
    const [membershipPrice, setMembershipPrice] = useState('');
    const [membershipPerks, setMembershipPerks] = useState([]);
    const [perkTitle, setPerkTitle] = useState('');
    
    // const perkId = membershipPerks.membershipId;
    // const perkTitle = membershipPerks.title;
    // const perkLink = membershipPerks.link;

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
            console.log(res.data.perks);
            setPerkTitle(res.data.perks[subscriptionsId -1].title);
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
    </>
)
}
