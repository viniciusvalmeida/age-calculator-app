import AgeResult from "@/components/AgeResult";
import BirthForm from "@/components/BirthForm";

export default function Home() {
	return (
		<main className="bg-neutral-white rounded-lg rounded-br-3xl p-8 w-[31%] flex flex-col gap-4">
			<BirthForm />
			<AgeResult />
		</main>
	);
}
