"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function PageTechSkillsItem({
	params,
}: {
	params: { id: string };
}) {
	const { techSkills } = useContext(AppContext);
	const { id } = params;
	const techSkill = techSkills.find(m => String(m.id) === id);

	return (
		<>
			<p>single tech skill {techSkill?.name}</p>
		</>
	);
}
