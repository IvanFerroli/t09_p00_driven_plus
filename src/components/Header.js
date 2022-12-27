import { useContext, useState } from "react";
import avatar from "../assets/img/Vector.png"

export default function Headers(props) {
    const userNameOnLocalStorage = localStorage.getItem("userName");
	const [userName, setUserName] = useState(userNameOnLocalStorage);
    const membershipImageOnLocalStorage = localStorage.getItem("membershipImage");
    const [membershipImage, setMembershipImage] = useState(membershipImageOnLocalStorage);
	
    return(
        <>
        <div>
        <img src={membershipImage} alt="logo"/>
        <img src={avatar} alt="avatar"/>
        </div>
        <span>Olá, {userName}</span>
        </>
    )
}