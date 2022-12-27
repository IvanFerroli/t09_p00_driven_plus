import { useContext, useState } from "react";

export default function Perks() {
	const membershipPerksTitleOnLocalStorage = localStorage.getItem("membershipPerksTitle");
    const [membershipPerksTitle, setMembershipPerksTitle] = useState(membershipPerksTitleOnLocalStorage);
        
    console.log(membershipPerksTitle)
	return (
		<>
			{/* {membershipPerks.map((perk) => (
				<>
					<a href={perk.link}>
						<button id={perk.id}>{perk.title}</button>
					</a>
				</>
			))} */}
            <h1> AQUI SERÃO OS PERKS </h1>
		</>
	);
}
