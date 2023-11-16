import AgeResult from "@/components/AgeResult";
import BirthForm from "@/components/BirthForm";
import { AgeContextProvider } from "@/contexts/ageContext";

export default function Home() {
	return (
		<main className="bg-neutral-white rounded-3xl rounded-br-[200px] p-8 w-[400px] md:w-[650px] flex flex-col gap-4">
			<AgeContextProvider>
				<BirthForm />
				<AgeResult />
			</AgeContextProvider>
		</main>
	);
}
