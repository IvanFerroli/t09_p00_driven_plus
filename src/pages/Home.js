import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import { useState, useEffect } from "react";
import loading from "../assets/img/loading.gif";
import Header from "../components/Header"
import Perks from "../components/Perks"
import Footer from "../components/Footer"


export default function Home(props) {
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
		<>
        <Header />
        <Perks />
        <Footer />
        </>
	);
}


