//Components
import BackgroundImage from "@/components/BackgroundImage";
import HeaderNavbar from "@/components/HeaderNavbar";
import MainSection from "@/components/MainSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {

  // #1d6cb1 #787877

  return (
    <div className="text-white select-none relative flex flex-col items-center sm:px-15 lg:px-25 min-h-screen bg-black">
      <BackgroundImage />
      <HeaderNavbar />
      <MainSection />
      <FooterSection />
    </div>
  );
}
