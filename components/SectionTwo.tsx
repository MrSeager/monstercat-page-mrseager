//Icons
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaBandcamp, FaSoundcloud, FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

export default function SectionTwo() {
    return(
        <div className="flex flex-col gap-3 py-5 w-full">
            <h2 className="uppercase font-semibold text-[50px]">Stream it your way</h2>
            <div className="grid grid-cols-7 w-[40%]">
                <button
                    type="button"
                    title="Player"
                    className="cursor-pointer col-span-2 border border-white flex items-center gap-2 uppercase justify-center py-5 tracking-widest duration-500
                                hover:bg-white hover:text-black"
                >
                    <BsFillMusicPlayerFill size={20} /> Player
                </button>
                <button
                    type="button"
                    title="Bandcamp"
                    className="cursor-pointer border border-white flex items-center gap-2 uppercase justify-center py-5 tracking-widest duration-500
                                hover:bg-white hover:text-black"
                >
                    <FaBandcamp size={20} />
                </button>
                <button
                    type="button"
                    title="Soundcloud"
                    className="cursor-pointer border border-white flex items-center gap-2 uppercase justify-center py-5 tracking-widest duration-500
                                hover:bg-white hover:text-black"
                >
                    <FaSoundcloud size={20} />
                </button>
                <button
                    type="button"
                    title="Apple"
                    className="cursor-pointer border border-white flex items-center gap-2 uppercase justify-center py-5 tracking-widest duration-500
                                hover:bg-white hover:text-black"
                >
                    <FaApple size={20} />
                </button>
                <button
                    type="button"
                    title="Youtube"
                    className="cursor-pointer border border-white flex items-center gap-2 uppercase justify-center py-5 tracking-widest duration-500
                                hover:bg-white hover:text-black"
                >
                    <FaYoutube size={20} />
                </button>
                <button
                    type="button"
                    title="Spotify"
                    className="cursor-pointer border border-white flex items-center gap-2 uppercase justify-center py-5 tracking-widest duration-500
                                hover:bg-white hover:text-black"
                >
                    <FaSpotify size={20} />
                </button>
            </div>
        </div>
    );
}