import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import { useState, useEffect } from "react";
import loading from "../assets/img/loading.gif";
import Header from "../components/Header"
import Perks from "../components/Perks"
import Footer from "../components/Footer"


export default function Home() {
    const tokenOnLocalStorage = localStorage.getItem("token");
    const membershipNameOnLocalStorage = localStorage.getItem("membershipName");
	const membershipImageOnLocalStorage = localStorage.getItem("membershipImage");
	const membershipPriceOnLocalStorage = localStorage.getItem("membershipPrice");
	const membershipPerksOnLocalStorage = localStorage.getItem("membershipPerks");
    const [token] = useState(tokenOnLocalStorage);
	const [membershipName, setMembershipName] = useState(membershipNameOnLocalStorage);
    const [membershipImage, setMembershipImage] = useState(membershipImageOnLocalStorage);
    const [membershipPrice, setMembershipPrice] = useState(membershipPriceOnLocalStorage);
    const [membershipPerks, setMembershipPerks] = useState(membershipPerksOnLocalStorage);
	

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
		<>
        <Header />
        <Perks />
        <Footer />
        </>
	);
}


