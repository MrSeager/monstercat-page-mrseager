//Components
import FooterSectionOne from "./FooterSectionOne";
import FooterSectionTwo from "./FooterSectionTwo";

export default function FooterSection() {
    return (
        <div className="z-10 flex flex-col w-full max-w-[120rem] px-5">
            <FooterSectionOne />
            <FooterSectionTwo />
        </div>
    );
}