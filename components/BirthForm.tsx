"use client";

import { useContext, useRef } from "react";
import { AgeContext } from "@/contexts/ageContext";
import FormInput from "./FormInput";
import { resetErrors, showError } from "@/lib/formFunctions";

export default function BirthForm() {
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
			const birthDay = dayInputRef.current.value;
			const birthMonth = monthInputRef.current.value;
			const birthYear = yearInputRef.current.value;

			const inputs = [dayInputRef, monthInputRef, yearInputRef];
			const labels = [dayLabelRef, monthLabelRef, yearLabelRef];
			const msgs = [dayMsgRef, monthMsgRef, yearMsgRef];

			resetErrors(inputs, labels, msgs);

			if (!birthDay) {
				showError(dayInputRef, dayLabelRef, dayMsgRef);
				return false;
			}

			if (!birthMonth) {
				showError(monthInputRef, monthLabelRef, monthMsgRef);
				return false;
			}

			if (!birthYear) {
				showError(yearInputRef, yearLabelRef, yearMsgRef);
				return false;
			}

			if (thirtyDayMonths.includes(birthMonth) && birthDay === "31") {
				showError(
					dayInputRef,
					dayLabelRef,
					dayMsgRef,
					"Must be a valid date"
				);
				return false;
			}

			if (+birthYear > new Date().getFullYear()) {
				showError(
					yearInputRef,
					yearLabelRef,
					yearMsgRef,
					"Must be in the past"
				);
				return false;
			}

			if (
				+birthYear === new Date().getFullYear() &&
				+birthMonth > new Date().getMonth() + 1
			) {
				showError(
					monthInputRef,
					monthLabelRef,
					monthMsgRef,
					"Must be in the past"
				);
				return false;
			}

			if (
				+birthDay > new Date().getDate() &&
				+birthYear === new Date().getFullYear() &&
				+birthMonth > new Date().getMonth()
			) {
				showError(
					dayInputRef,
					dayLabelRef,
					dayMsgRef,
					"Must be in the past"
				);
				return false;
			}

			setDay(birthDay);
			setMonth(birthMonth);
			setYear(birthYear);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="flex space-x-6 md:space-x-8">
					<div className="flex flex-col space-y-2">
						<FormInput
							inputRef={dayInputRef}
							labelRef={dayLabelRef}
							label="day"
							placeHolder="DD"
							pattern="\b([1-9]|1[0-9]|2[0-9]|3[0-1])\b"
						/>
						<span
							ref={dayMsgRef}
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible w-24 md:w-36"
						>
							Must be a valid day
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<FormInput
							inputRef={monthInputRef}
							labelRef={monthLabelRef}
							label="month"
							placeHolder="MM"
							pattern="\b([1-9]|1[0-2])\b"
						/>
						<span
							ref={monthMsgRef}
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible w-24 md:w-36"
						>
							Must be a valid month
						</span>
					</div>
					<div className="flex flex-col space-y-2">
						<FormInput
							inputRef={yearInputRef}
							labelRef={yearLabelRef}
							label="year"
							placeHolder="YYYY"
							pattern="[0-9]{4}"
						/>
						<span
							ref={yearMsgRef}
							className="text-xs italic text-primary-light-red invisible peer-invalid:visible w-24 md:w-36"
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
