import AgeResult from "@/components/AgeResult";
import BirthForm from "@/components/BirthForm";
import { AgeContextProvider } from "@/contexts/ageContext";

export default function Home() {
	return (
		<main className="bg-neutral-white rounded-lg rounded-br-[200px] p-8 w-[31%] flex flex-col gap-4">
			<AgeContextProvider>
				<BirthForm />
				<AgeResult />
			</AgeContextProvider>
		</main>
	);
}
