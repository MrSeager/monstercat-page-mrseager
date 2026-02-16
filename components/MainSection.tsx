'use client';
//Components
import { useRef } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";

export default function MainSection() {
    const sectionThreeRef = useRef<HTMLDivElement | null>(null);

    const scrollToSectionThree = () => {
        sectionThreeRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return(
        <main className="z-10 flex flex-col gap-5 min-h-screen w-full max-w-[120rem] items-center justify-start py-32 px-25 bg-transparent">
            <SectionOne 
                onListenClick={scrollToSectionThree}
            />
            <SectionTwo />
            <SectionThree 
                ref={sectionThreeRef}
            />
            <SectionFour />
            <SectionFive />
        </main>
    );
}