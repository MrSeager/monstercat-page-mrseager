//Components
import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage";
import HeaderNavbar from "@/components/HeaderNavbar";
import MainSection from "@/components/MainSection";

export default function Home() {

  // #1d6cb1

  return (
    <div className="text-white select-none relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BackgroundImage />
      <HeaderNavbar />
      <MainSection />
    </div>
  );
}
