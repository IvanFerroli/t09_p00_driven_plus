export default function Perks(props) {
	const perks = props.perks;
	return (
		<>
			{perks.map((perk) => (
				<>
					<a href={perk.link}>
						<button id={perk.id}>{perk.title}</button>
					</a>
				</>
			))}
		</>
	);
}
