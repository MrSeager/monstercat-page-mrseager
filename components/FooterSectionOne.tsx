//Components
import Link from "next/link";
//Icons
import { FaArrowRightLong } from "react-icons/fa6";

export default function FooterSectionOne() {
    return(
        <div className="border-t border-b py-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    About monstercat
                </Link>
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    Contact us
                </Link>
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    Careers
                </Link>
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    News
                </Link>
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    Press
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    Tearms of service
                </Link>
                <Link
                    href='/'
                    className="uppercase underline decoration-transparent font-semibold text-white text-[20px] duration-500
                                hover:decoration-[#1d6cb1]"
                >
                    Privacy policy
                </Link>
            </div>
            <div className="flex flex-col gap-2 col-span-1 md:col-span-2 lg:col-span-1">
                <h5 className="text-[20px] text-[#787877] uppercase font-semibold">Monstercat news</h5>
                <p className="text-[#787877] italic">
                    Don&apos;t miss a thing, stay up to date
                    with the latest news from us.
                </p>
                <form className="mt-auto border-b border-[#787877] flex justify-between">
                    <input 
                        type="email" 
                        placeholder="Enter email"
                        className="py-3 placeholder:text-[#787877]
                                    focus:outline-none"
                    />
                    <button 
                        type="submit" 
                        title="submit"
                        className="cursor-pointer text-[#787877] duration-300 hover:-translate-x-1"
                    >
                        <FaArrowRightLong />
                    </button>
                </form>
            </div>
        </div>
    );
}