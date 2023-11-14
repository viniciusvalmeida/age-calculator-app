"use client";

import { useContext, useState } from "react";
import { AgeContext } from "@/contexts/ageContext";

export default function BirthForm() {
	const [birthDay, setBirthDay] = useState("");
	const [birthMonth, setBirthMonth] = useState("");
	const [birthYear, setBirthYear] = useState("");

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

			if (birthDay === "") {
				dayMsg.innerHTML = "This field is required";
				dayMsg.classList.remove("invisible");
				dayInput.classList.add("border-primary-light-red");
				dayLabel.classList.add("text-primary-light-red");
				return false;
			}

			if (birthMonth === "") {
				monthMsg.innerHTML = "This field is required";
				monthMsg.classList.remove("invisible");
				monthInput.classList.add("border-primary-light-red");
				monthLabel.classList.add("text-primary-light-red");
				return false;
			}

			if (birthYear === "") {
				yearMsg.innerHTML = "This field is required";
				yearMsg.classList.remove("invisible");
				yearInput.classList.add("border-primary-light-red");
				yearLabel.classList.add("text-primary-light-red");
				return false;
			}

			if (
				(birthMonth === "2" ||
					birthMonth === "4" ||
					birthMonth === "6" ||
					birthMonth === "9" ||
					birthMonth === "11") &&
				birthDay === "31"
			) {
				dayMsg.innerHTML = "Must be a valid date";
				dayLabel.classList.add("text-primary-light-red");
				dayInput.classList.add("border-primary-light-red");
				dayMsg.classList.remove("invisible");
				return false;
			}

			if (+birthYear > new Date().getFullYear()) {
				yearMsg.innerHTML = "Must be in the past";
				yearInput.classList.add("border-primary-light-red");
				yearMsg.classList.remove("invisible");
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
				<div className="flex space-x-8">
					<div className="flex flex-col space-y-2">
						<label
							id="dayLabel"
							htmlFor="day"
							className="text-neutral-smokey-grey text-xs font-bold peer-invalid:text-primary-light-red"
						>
							DAY
						</label>
						<input
							id="day"
							type="text"
							value={birthDay}
							placeholder="DD"
							className="border border-neutral-light-grey focus:outline-primary-purple font-bold text-xl rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-32 peer invalid:border-primary-light-red"
							onChange={(e) => setBirthDay(e.target.value)}
							pattern="\b([1-9]|1[0-9]|2[0-9]|3[0-1])\b"
						/>
						<span
							id="dayMsg"
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible"
						>
							Must be a valid day
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<label
							id="monthLabel"
							htmlFor="month"
							className="text-neutral-smokey-grey text-xs font-bold"
						>
							MONTH
						</label>
						<input
							id="month"
							type="text"
							value={birthMonth}
							placeholder="MM"
							className="border border-neutral-light-grey focus:outline-primary-purple font-bold text-xl rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-32 peer invalid:border-primary-light-red"
							onChange={(e) => setBirthMonth(e.target.value)}
							pattern="\b([1-9]|1[0-2])\b"
						/>
						<span
							id="monthMsg"
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible"
						>
							Must be a valid month
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<label
							id="yearLabel"
							htmlFor="year"
							className="text-neutral-smokey-grey text-xs font-bold"
						>
							YEAR
						</label>
						<input
							id="year"
							type="text"
							value={birthYear}
							placeholder="YYYY"
							className="border border-neutral-light-grey focus:outline-primary-purple font-bold text-xl rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-32 peer invalid:border-primary-light-red"
							onChange={(e) => setBirthYear(e.target.value)}
							pattern="[0-9]{4}"
						/>
						<span
							id="yearMsg"
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible"
						>
							Insert four numbers
						</span>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-grow h-[1px] bg-neutral-light-grey self-center"></div>
					<button
						type="submit"
						className="bg-primary-purple rounded-full p-4 hover:bg-neutral-off-black"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="46"
							height="44"
							viewBox="0 0 46 44"
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
