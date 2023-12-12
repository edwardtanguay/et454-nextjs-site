"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function PageTechSkills() {
	const { techSkills } = useContext(AppContext);

	return (
		<>
			<p>There are {techSkills.length} tech skills.</p>
		</>
	)
}