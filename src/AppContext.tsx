"use client";
import { createContext, useEffect, useState } from "react";
import { ITechSkill } from "./interfaces";
import axios from "axios";

interface IAppContext {
	welcomeMessage: string;
	techSkills: ITechSkill[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const techSkillsUrl =
	"https://edwardtanguay.vercel.app/share/skills_with_id.json";
const welcomeMessage = "Welcome to this tech site.";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [techSkills, setTechSkills] = useState<ITechSkill[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(techSkillsUrl);
			const _techSkills = response.data;
			setTechSkills(_techSkills);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				welcomeMessage,
				techSkills,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
