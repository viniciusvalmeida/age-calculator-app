"use client";

import { useContext, useState, useRef } from "react";
import { AgeContext } from "@/contexts/ageContext";
import FormInput from "./FormInput";

export default function BirthForm() {
	const [birthDay, setBirthDay] = useState("");
	const [birthMonth, setBirthMonth] = useState("");
	const [birthYear, setBirthYear] = useState("");

	const thirtyDayMonths = ["2", "4", "6", "9", "11"];

	const { setDay, setMonth, setYear } = useContext(AgeContext);

	const dayLabelRef = useRef<HTMLLabelElement>(null);
	const monthLabelRef = useRef<HTMLLabelElement>(null);
	const yearLabelRef = useRef<HTMLLabelElement>(null);

	const dayInputRef = useRef<HTMLInputElement>(null);
	const monthInputRef = useRef<HTMLInputElement>(null);
	const yearInputRef = useRef<HTMLInputElement>(null);

	const dayMsgRef = useRef<HTMLSpanElement>(null);
	const monthMsgRef = useRef<HTMLSpanElement>(null);
	const yearMsgRef = useRef<HTMLSpanElement>(null);

	const handleSubmit = (ev: React.SyntheticEvent) => {
		ev.preventDefault();

		if (
			dayInputRef.current &&
			monthInputRef.current &&
			yearInputRef.current &&
			dayMsgRef.current &&
			monthMsgRef.current &&
			yearMsgRef.current &&
			dayLabelRef.current &&
			monthLabelRef.current &&
			yearLabelRef.current
		) {
			dayInputRef.current.classList.remove("border-primary-light-red");
			monthInputRef.current.classList.remove("border-primary-light-red");
			yearInputRef.current.classList.remove("border-primary-light-red");

			dayLabelRef.current.classList.remove("text-primary-light-red");
			monthLabelRef.current.classList.remove("text-primary-light-red");
			yearLabelRef.current.classList.remove("text-primary-light-red");

			dayMsgRef.current.classList.add("invisible");
			monthMsgRef.current.classList.add("invisible");
			yearMsgRef.current.classList.add("invisible");

			if (!birthDay) {
				dayMsgRef.current.innerHTML = "This field is required";
				dayInputRef.current.classList.add("border-primary-light-red");
				dayLabelRef.current.classList.add("text-primary-light-red");
				dayMsgRef.current.classList.remove("invisible");
				return false;
			}

			if (!birthMonth) {
				monthMsgRef.current.innerHTML = "This field is required";
				monthInputRef.current.classList.add("border-primary-light-red");
				monthLabelRef.current.classList.add("text-primary-light-red");
				monthMsgRef.current.classList.remove("invisible");
				return false;
			}

			if (!birthYear) {
				yearMsgRef.current.innerHTML = "This field is required";
				yearInputRef.current.classList.add("border-primary-light-red");
				yearLabelRef.current.classList.add("text-primary-light-red");
				yearMsgRef.current.classList.remove("invisible");
				return false;
			}

			if (birthMonth in thirtyDayMonths && birthDay === "31") {
				dayMsgRef.current.innerHTML = "Must be a valid date";
				dayLabelRef.current.classList.add("text-primary-light-red");
				dayInputRef.current.classList.add("border-primary-light-red");
				dayMsgRef.current.classList.remove("invisible");
				return false;
			}

			if (+birthYear > new Date().getFullYear()) {
				yearMsgRef.current.innerHTML = "Must be in the past";
				yearInputRef.current.classList.add("border-primary-light-red");
				yearLabelRef.current.classList.add("text-primary-light-red");
				yearMsgRef.current.classList.remove("invisible");
				return false;
			}

			if (
				+birthYear === new Date().getFullYear() &&
				+birthMonth > new Date().getMonth() + 1
			) {
				monthMsgRef.current.innerHTML = "Must be in the past";
				monthInputRef.current.classList.add("border-primary-light-red");
				monthLabelRef.current.classList.add("text-primary-light-red");
				monthMsgRef.current.classList.remove("invisible");
				return false;
			}

			if (
				+birthDay > new Date().getDate() &&
				+birthYear === new Date().getFullYear() &&
				+birthMonth > new Date().getMonth()
			) {
				dayMsgRef.current.innerHTML = "Must be in the past";
				dayInputRef.current.classList.add("border-primary-light-red");
				dayLabelRef.current.classList.add("text-primary-light-red");
				dayMsgRef.current.classList.remove("invisible");
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
							ref={dayMsgRef}
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
							ref={monthMsgRef}
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
							ref={yearMsgRef}
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
