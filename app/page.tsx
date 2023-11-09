export default function Home() {
	return (
		<main className="bg-neutral-white rounded-lg rounded-br-3xl p-8">
			<div>
				<form className="flex">
					<div className="flex flex-col">
						<label htmlFor="day">DAY</label>
						<input
							type="text"
							name="day"
							placeholder="DD"
							className="appearance-none"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="month">MONTH</label>
						<input
							type="text"
							name="month"
							placeholder="MM"
							className="appearance-none"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="year">YEAR</label>
						<input
							type="text"
							name="year"
							placeholder="YYYY"
							className="appearance-none"
						/>
					</div>
				</form>
			</div>
		</main>
	);
}
