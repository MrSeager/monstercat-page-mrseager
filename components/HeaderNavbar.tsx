'use client';
//Components
import { useState } from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import NavbarDropBtn from "./NavbarDropBtn";
//Icons
import { PiMusicNotesFill } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { FaInstagram, FaTiktok, FaTwitch, FaFacebook, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderNavbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <header className="z-20 w-full max-w-[120rem] fixed top-0 m-auto">
            <nav className="relative px-10 pt-5 flex items-center justify-between">
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
                    onClick={() => setIsOpen(true)}
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
            <div 
                onClick={() => setIsOpen(false)}
                className={` 
                    fixed inset-0 transition-opacity duration-500 
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
                `}
            >
                <nav 
                    onClick={(e) => e.stopPropagation()}
                    className={`
                        absolute right-0 top-0 h-full w-full md:w-[25rem] bg-black py-5 transform transition-transform duration-500
                        flex flex-col justify-between items-start px-10  gap-5
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                    `}
                >
                    <div className="w-full flex items-center justify-between">
                        <button 
                            type="button"
                            title="icon"
                            className="cursor-pointer duration-500 flex item-center justify-center text-[25px] font-bold gap-3
                                        hover:scale-105"
                        >
                            <PiMusicNotesFill size={40} /> monstercat
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            title="close"
                            className="cursor-pointer duration-500 flex item-center justify-center text-[25px] font-bold
                                        hover:scale-105"
                        >
                            <IoCloseSharp size={40} />
                        </button>
                    </div>
                    <div className="flex flex-col h-full w-full overflow-x-hidden overflow-y-auto">
                        <NavbarDropBtn 
                            label="Music"
                            items={[
                                { label: "Our music", href: "/" }, 
                                { label: "Instinct", href: "/" }, 
                                { label: "Uncaged", href: "/" }, 
                                { label: "Silk", href: "/" },
                            ]}
                        />
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Artists
                        </Link>
                        <NavbarDropBtn 
                            label="About"
                            items={[
                                { label: "About Monstercat", href: "/" }, 
                                { label: "Diversity & Inclusion", href: "/" }, 
                                { label: "Code of Ethics", href: "/" }, 
                                { label: "Environmental", href: "/" }, 
                                { label: "Contact Us", href: "/" }, 
                                { label: "Careers", href: "/" },
                            ]}
                        />
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            News
                        </Link>
                        <NavbarDropBtn 
                            label="Events"
                            items={[
                                { label: "Monstercat Events Experience", href: "/" }, 
                                { label: "Upcoming Events", href: "/" },
                            ]}
                        />
                        <NavbarDropBtn 
                            label="Programming"
                            items={[
                                { label: "MonstercatTV", href: "/" }, 
                                { label: "Call of the Wild", href: "/" },
                                { label: "Silk Showcase", href: "/" }, 
                                { label: "Upcoming Shows", href: "/" }, 
                            ]}
                        />
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Gold
                        </Link>
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Partners
                        </Link>
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Press
                        </Link>
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Player
                        </Link>
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Shop
                        </Link>
                        <Link
                            href='/'
                            className="inline-block uppercase font-semibold text-white text-[20px] duration-500
                                        hover:translate-x-1"
                        >
                            Lost Civilization
                        </Link>
                    </div>
                    <div className="flex gap-3">
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
                    <div className="flex gap-3 items-center">
                        <button
                            type="button"
                            className="cursor-pointer uppercase gap-2 bg-transparent text-white border border-white flex items-center text-[15px] font-semibold py-2 px-4 duration-500
                                    hover:bg-white hover:text-black"
                        >
                            Sign in
                        </button>
                        <h1 className="text-[15px] font-semibold uppercase">or</h1>
                        <button
                            type="button"
                            className="cursor-pointer text-[15px] font-semibold uppercase duration-500
                                        hover:scale-110"
                        >
                            Log in
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}