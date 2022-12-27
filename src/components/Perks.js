import { useContext, useState } from "react";

export default function Perks() {
	const membershipPerksOnLocalStorage = localStorage.getItem("membershipPerks");
    const [membershipPerks, setMembershipPerks] = useState(membershipPerksOnLocalStorage);

    console.log(membershipPerks.title)
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
