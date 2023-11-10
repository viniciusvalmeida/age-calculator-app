"use client";

import { useContext, useState } from "react";
import FormInput from "./FormInput";
import { AgeContext } from "@/contexts/ageContext";

export default function BirthForm() {
	const [birthDay, setBirthDay] = useState("");
	const [birthMonth, setBirthMonth] = useState("");
	const [birthYear, setBirthYear] = useState("");

	const { setDay, setMonth, setYear } = useContext(AgeContext);

	const handleSubmit = (ev: React.SyntheticEvent) => {
		ev.preventDefault();
		setDay(birthDay);
		setMonth(birthMonth);
		setYear(birthYear);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="flex space-x-8">
					<FormInput
						label="day"
						value={birthDay}
						placeHolder="DD"
						setValue={setBirthDay}
					/>
					<FormInput
						label="month"
						value={birthMonth}
						placeHolder="MM"
						setValue={setBirthMonth}
					/>
					<FormInput
						label="year"
						value={birthYear}
						placeHolder="YYYY"
						setValue={setBirthYear}
					/>
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
