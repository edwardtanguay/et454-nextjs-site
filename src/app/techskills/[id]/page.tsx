export default function PageTechSkillsItem({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;

	return (
		<>
			<p>single tech skill is {id}</p>
		</>
	);
}
