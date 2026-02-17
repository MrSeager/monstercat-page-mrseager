//Components
import NavLink from "./NavLink";
//Icons
import { FaInstagram, FaTiktok, FaTwitch, FaFacebook, FaDiscord, FaYoutube, FaSpotify, FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

export default function FooterSectionTwo() {
    return(
        <div className="flex flex-col gap-5 items-center py-10">
            <div className="flex justify-between w-full">
                <h5 className="italic text-[#787877]">2011 - 2026 © Monstercat, All Rights Reserved</h5>
                <div className="flex gap-3">
                    <NavLink
                        href="/#"
                        icon={<FaYoutube size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaInstagram size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaTiktok size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaXTwitter size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaSpotify size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaApple size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaTwitch size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaFacebook size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<FaDiscord size={20} />}
                    />
                    <NavLink
                        href="/#"
                        icon={<SiApplemusic size={20} />}
                    />
                </div>
            </div>
            <p className="italic text-[13px] text-[#787877] w-[65%] text-center">
                We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.
                <br /><br />
                We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.
            </p>
        </div>
    );
} 