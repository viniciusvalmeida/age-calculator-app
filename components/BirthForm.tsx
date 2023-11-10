"use client";

import FormInput from "./FormInput";

export default function BirthForm() {
	return (
		<div>
			<form>
				<div className="flex space-x-8">
					<FormInput value="day" placeHolder="DD" />
					<FormInput value="month" placeHolder="MM" />
					<FormInput value="year" placeHolder="YYYY" />
				</div>
				<div className="flex">
					<div className="flex flex-grow h-[1px] bg-neutral-light-grey self-center"></div>
					<button
						type="submit"
						className="bg-primary-purple rounded-full p-4"
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
