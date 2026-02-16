//Components
import Image from "next/image";
//Icons
import { RxAvatar } from "react-icons/rx";
import { CiPlay1 } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

interface SectionOneProps {
    onListenClick: () => void;
}

export default function SectionOne({ onListenClick }: SectionOneProps) {
    return(
        <div className="flex justify-start w-full gap-15">
            <div className="flex items-end">
                <p className="text-[#1d6cb1] italic -rotate-90 origin-bottom-left leading-none -mr-20 whitespace-nowrap">
                    Arcane OST
                </p>
                <Image
                    src="/images/1200x1200bf-60.jpg"
                    alt="cover"
                    width={400}
                    height={400}
                    className="border"
                />
            </div>
            <div className="flex flex-col justify-center gap-3">
                <h1 className="font-bold text-[90px] -my-4 text-transparent [-webkit-text-stroke:2px_white]">Arcane OST</h1>
                <h2 className="font-semibold text-[50px] uppercase -my-4">League of Legend</h2>
                <div className="flex gap-3">
                    <button 
                        type="button" 
                        title="avatar"
                        className="cursor-pointer bg-black rounded-[50px] duration-500 hover:scale-110"
                    >
                        <RxAvatar size={100} />
                    </button>
                    <button 
                        type="button" 
                        title="avatar"
                        className="cursor-pointer bg-black rounded-[50px] duration-500 hover:scale-110"
                    >
                        <RxAvatar size={100} />
                    </button>
                </div>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onListenClick}
                        className="cursor-pointer uppercase gap-2 bg-[#1d6cb1] text-white border border-[#1d6cb1] flex items-center text-[20px] py-2 px-4 duration-500
                                    hover:bg-transparent hover:border-[#1d6cb1]"
                    >
                        <CiPlay1 /> Listen now
                    </button>
                    <button
                        type="button"
                        className="cursor-pointer uppercase gap-2 bg-transparent text-white border border-white flex items-center text-[20px] py-2 px-4 duration-500
                                    hover:bg-white hover:text-black"
                    >
                        <IoShareSocialOutline /> Share
                    </button>
                </div>
            </div>
        </div>
    );
}