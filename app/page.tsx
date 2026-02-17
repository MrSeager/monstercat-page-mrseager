//Components
import BackgroundImage from "@/components/BackgroundImage";
import HeaderNavbar from "@/components/HeaderNavbar";
import MainSection from "@/components/MainSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {

  // #1d6cb1 #787877

  return (
    <div className="text-white select-none relative flex flex-col min-h-screen bg-black">
      <BackgroundImage />
      <HeaderNavbar />
      <MainSection />
      <FooterSection />
    </div>
  );
}
