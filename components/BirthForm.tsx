"use client";

import { useContext, useState } from "react";
import { AgeContext } from "@/contexts/ageContext";
import FormInput from "./FormInput";

export default function BirthForm() {
	const [birthDay, setBirthDay] = useState("");
	const [birthMonth, setBirthMonth] = useState("");
	const [birthYear, setBirthYear] = useState("");

	const thirtyDayMonths = ["2", "4", "6", "9", "11"];

	const { setDay, setMonth, setYear } = useContext(AgeContext);

	const handleSubmit = (ev: React.SyntheticEvent) => {
		ev.preventDefault();

		const dayLabel = document.getElementById("dayLabel");
		const monthLabel = document.getElementById("monthLabel");
		const yearLabel = document.getElementById("yearLabel");

		const dayInput = document.getElementById("day");
		const monthInput = document.getElementById("month");
		const yearInput = document.getElementById("year");

		const dayMsg = document.getElementById("dayMsg");
		const monthMsg = document.getElementById("monthMsg");
		const yearMsg = document.getElementById("yearMsg");

		if (
			dayInput &&
			monthInput &&
			yearInput &&
			dayMsg &&
			monthMsg &&
			yearMsg &&
			dayLabel &&
			monthLabel &&
			yearLabel
		) {
			dayInput.classList.remove("border-primary-light-red");
			monthInput.classList.remove("border-primary-light-red");
			yearInput.classList.remove("border-primary-light-red");

			dayLabel.classList.remove("text-primary-light-red");
			monthLabel.classList.remove("text-primary-light-red");
			yearLabel.classList.remove("text-primary-light-red");

			dayMsg.classList.add("invisible");
			monthMsg.classList.add("invisible");
			yearMsg.classList.add("invisible");

			if (!birthDay) {
				dayMsg.innerHTML = "This field is required";
				dayInput.classList.add("border-primary-light-red");
				dayLabel.classList.add("text-primary-light-red");
				dayMsg.classList.remove("invisible");
				return false;
			}

			if (!birthMonth) {
				monthMsg.innerHTML = "This field is required";
				monthInput.classList.add("border-primary-light-red");
				monthLabel.classList.add("text-primary-light-red");
				monthMsg.classList.remove("invisible");
				return false;
			}

			if (!birthYear) {
				yearMsg.innerHTML = "This field is required";
				yearInput.classList.add("border-primary-light-red");
				yearLabel.classList.add("text-primary-light-red");
				yearMsg.classList.remove("invisible");
				return false;
			}

			if (birthMonth in thirtyDayMonths && birthDay === "31") {
				dayMsg.innerHTML = "Must be a valid date";
				dayLabel.classList.add("text-primary-light-red");
				dayInput.classList.add("border-primary-light-red");
				dayMsg.classList.remove("invisible");
				return false;
			}

			if (+birthYear > new Date().getFullYear()) {
				yearMsg.innerHTML = "Must be in the past";
				yearInput.classList.add("border-primary-light-red");
				yearLabel.classList.add("text-primary-light-red");
				yearMsg.classList.remove("invisible");
				return false;
			}

			if (
				+birthYear === new Date().getFullYear() &&
				+birthMonth > new Date().getMonth() + 1
			) {
				monthMsg.innerHTML = "Must be in the past";
				monthInput.classList.add("border-primary-light-red");
				monthLabel.classList.add("text-primary-light-red");
				monthMsg.classList.remove("invisible");
				return false;
			}

			if (
				+birthDay > new Date().getDate() &&
				+birthYear === new Date().getFullYear() &&
				+birthMonth > new Date().getMonth()
			) {
				dayMsg.innerHTML = "Must be in the past";
				dayInput.classList.add("border-primary-light-red");
				dayLabel.classList.add("text-primary-light-red");
				dayMsg.classList.remove("invisible");
				return false;
			}
		}

		setDay(birthDay);
		setMonth(birthMonth);
		setYear(birthYear);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="flex space-x-6 md:space-x-8">
					<div className="flex flex-col space-y-2">
						<FormInput
							label="day"
							placeHolder="DD"
							value={birthDay}
							setValue={setBirthDay}
							pattern="\b([1-9]|1[0-9]|2[0-9]|3[0-1])\b"
						/>
						<span
							id="dayMsg"
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible w-24 md:w-32"
						>
							Must be a valid day
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<FormInput
							label="month"
							placeHolder="MM"
							value={birthMonth}
							setValue={setBirthMonth}
							pattern="\b([1-9]|1[0-2])\b"
						/>
						<span
							id="monthMsg"
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible w-24 md:w-32"
						>
							Must be a valid month
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<FormInput
							label="year"
							placeHolder="YYYY"
							value={birthYear}
							setValue={setBirthYear}
							pattern="[0-9]{4}"
						/>
						<span
							id="yearMsg"
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible w-24 md:w-32"
						>
							Insert four numbers
						</span>
					</div>
				</div>
				<div className="flex my-12 md:my-0">
					<div className="flex flex-grow h-[1px] bg-neutral-light-grey self-center"></div>
					<button
						type="submit"
						className="bg-primary-purple rounded-full p-4 hover:bg-neutral-off-black absolute self-center left-[44%] md:static"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="46"
							height="44"
							viewBox="0 0 46 44"
							className="w-8 h-8 md:w-12 md:h-12"
						>
							<g fill="none" stroke="#FFF" strokeWidth="2">
								<path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
							</g>
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
}
