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

		if (birthDay !== "" && birthMonth !== "" && birthYear !== "") {
			setDay(birthDay);
			setMonth(birthMonth);
			setYear(birthYear);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="flex space-x-8">
					<div className="flex flex-col space-y-2">
						<label
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
							className="border border-neutral-light-grey focus:outline-primary-purple rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-28 peer invalid:border-primary-light-red"
							onChange={(e) => setBirthDay(e.target.value)}
							pattern="\b([1-9]|1[0-9]|2[0-9]|3[0-1])\b"
						/>
						<span className="text-xs text-primary-light-red invisible peer-invalid:visible">
							Insert a valid day
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<label
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
							className="border border-neutral-light-grey focus:outline-primary-purple rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-28 peer"
							onChange={(e) => setBirthMonth(e.target.value)}
							pattern="\b([1-9]|1[0-2])\b"
						/>
						<span className="text-xs text-primary-light-red invisible peer-invalid:visible">
							Insert a valid month
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<label
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
							className="border border-neutral-light-grey focus:outline-primary-purple rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-28 peer"
							onChange={(e) => setBirthYear(e.target.value)}
							pattern="[0-9]{4}"
						/>
						<span className="text-xs text-primary-light-red invisible peer-invalid:visible">
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
