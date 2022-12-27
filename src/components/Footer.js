import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useContext, useState } from "react";

export default function Footer() {
    const navigate = useNavigate()
    const tokenOnLocalStorage = localStorage.getItem("token");
    const [token] = useState(tokenOnLocalStorage);

    function cancel() {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
    
            const res = axios.delete(`${BASE_URL}subscriptions`, config)	
            .then(res => {	
                navigate("/subscriptions")	
                })
            .catch(() => 
            {alert("Deu ruim major")
        })
    }


    return(
        <>
            <button onClick={() => {navigate("/subscriptions")}}>Mudar plano</button>
            <button onClick={() => {cancel()}}>Cancelar plano</button>
        </>
    )
}

