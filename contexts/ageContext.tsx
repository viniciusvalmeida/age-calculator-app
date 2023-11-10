"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type age = {
	day: string;
	month: string;
	year: string;
	setDay: Dispatch<SetStateAction<string>>;
	setMonth: Dispatch<SetStateAction<string>>;
	setYear: Dispatch<SetStateAction<string>>;
};

export const AgeContext = createContext({} as age);

export function AgeContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");

	return (
		<AgeContext.Provider
			value={{ day, setDay, month, setMonth, year, setYear }}
		>
			{children}
		</AgeContext.Provider>
	);
}
