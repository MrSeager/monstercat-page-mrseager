'use client';
//Components
import Link from "next/link";
import { useState } from "react";
//Icons
import { IoIosArrowForward } from "react-icons/io";

interface NavbarDropBtnProps {
    label: string;
    items: { label: string; href: string }[];
}

export default function NavbarDropBtn({ label, items }: NavbarDropBtnProps) {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return(
        <span>
            <button
                type="button"
                onClick={() => setToggleMenu(prev => !prev)}
                className="cursor-pointer uppercase text-[20px] font-semibold flex gap-3 items-center duration-500
                            hover:translate-x-1"
            >
                {label} <span className={`duration-500 ${toggleMenu ? '-rotate-90' : 'rotate-0'}`}><IoIosArrowForward /></span>
            </button>
            <div className={`ps-3 flex flex-col overflow-hidden duration-500 ${toggleMenu ? 'max-h-96' : 'max-h-0'}`}>
                {items.map(item => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="uppercase font-semibold text-[#787877] text-[17px] duration-500
                                    hover:text-white"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </span>
    );
}