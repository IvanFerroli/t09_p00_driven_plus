export default function Perks() {
	const membershipPerksOnLocalStorage = localStorage.getItem("membershipPerks");
    const [membershipPerks, setMembershipPerks] = useState(membershipPerksOnLocalStorage);
	return (
		<>
			{membershipPerks.map((perk) => (
				<>
					<a href={perk.link}>
						<button id={perk.id}>{perk.title}</button>
					</a>
				</>
			))}
		</>
	);
}
