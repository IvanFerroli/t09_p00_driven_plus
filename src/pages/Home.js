import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import { useState, useEffect } from "react";
import loading from "../assets/img/loading.gif";
import Header from "../components/Header"
import Perks from "../components/Perks"
import Footer from "../components/Footer"


export default function Home() {
	const membershipPriceOnLocalStorage = localStorage.getItem("membershipPrice");
    const [membershipPrice, setMembershipPrice] = useState(membershipPriceOnLocalStorage);

	
	return (
		<>
        <Header />
        <Perks />
        <Footer />
        </>
	);
}

