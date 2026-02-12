//Components
import Image from "next/image";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function MainSection() {
    return(
        <main className="z-10 flex flex-col gap-5 min-h-screen w-full max-w-[120rem] items-center justify-start py-32 px-25 bg-transparent">
            <SectionOne />
            <SectionTwo />
        </main>
    );
}