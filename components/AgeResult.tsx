"use client";

import { useContext } from "react";
import Result from "./Result";
import { AgeContext } from "@/contexts/ageContext";

export default function AgeResult() {
	const { day, month, year } = useContext(AgeContext);

	const calculateYear = () => {
		const currentMonth = new Date().getMonth();
		const fullYear = currentMonth + 1 - +month;

		if (fullYear < 0) {
			return new Date().getFullYear() - +year - 1;
		}

		return new Date().getFullYear() - +year;
	};

	const calculateMonths = () => {
		const currentMonth = new Date().getMonth();

		if (currentMonth + 1 < +month) {
			const diffMonth = +month - currentMonth;
			return 13 - diffMonth;
		}

		return 11 - +month;
	};

	const calculateDays = () => {
		const days = new Date().getDate() - +day;
		if (days < 0) {
			return days + 31;
		}

		return days;
	};

	const totalYears = calculateYear();
	const totalMonths = calculateMonths();
	const totalDays = calculateDays();

	return (
		<>
			<Result
				value={year === "" ? "--" : totalYears.toString()}
				type="years"
			/>
			<Result
				value={month === "" ? "--" : totalMonths.toString()}
				type="months"
			/>
			<Result
				value={day === "" ? "--" : totalDays.toString()}
				type="days"
			/>
		</>
	);
}
