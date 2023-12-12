"use client";
import { createContext } from "react";

interface IAppContext {
	welcomeMessage: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const welcomeMessage = "Welcome to this tech site.";

	return (
		<AppContext.Provider
			value={{
				welcomeMessage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
