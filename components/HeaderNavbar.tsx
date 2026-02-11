//Components
import NavLink from "@/components/NavLink";
//Icons
import { PiMusicNotesFill } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { FaInstagram, FaTiktok, FaTwitch, FaFacebook, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

export default function HeaderNavbar() {
    return(
        <header className="z-20 w-full max-w-[120rem] fixed top-0 m-auto">
            <nav className="relative px-10 py-5 flex items-center justify-between">
                <button 
                    type="button"
                    title="icon"
                    className="cursor-pointer bg-black p-3 rounded rounded-[15px] duration-500
                                hover:scale-120"
                >
                    <PiMusicNotesFill size={40} />
                </button>
                <button 
                    type="button"
                    title="menu"
                    className="cursor-pointer duration-500
                                hover:scale-120"
                >
                    <IoMdMenu size={30} />
                </button>
                <div className="absolute top-30 right-10 flex flex-col gap-5">
                    <NavLink 
                    href="/#"
                    icon={<FaInstagram size={25} />}
                    />
                    <NavLink 
                    href="/#"
                    icon={<FaTiktok size={25} />}
                    />
                    <NavLink 
                    href="/#"
                    icon={<FaXTwitter size={25} />}
                    />
                    <NavLink 
                    href="/#"
                    icon={<FaTwitch size={25} />}
                    />
                    <NavLink 
                    href="/#"
                    icon={<FaFacebook size={25} />}
                    />
                    <NavLink 
                    href="/#"
                    icon={<FaDiscord size={25} />}
                    />
                    <NavLink 
                    href="/#"
                    icon={<SiApplemusic size={25} />}
                    />
                </div>
            </nav>
        </header>
    );
}