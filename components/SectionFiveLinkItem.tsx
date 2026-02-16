//Components
import Link from "next/link";
import Image from "next/image";

interface SectionFiveLinkItemProps {
    img: string;
    title1: string;
    title2: string;
}

export default function SectionFiveLinkItem({ img, title1, title2 }: SectionFiveLinkItemProps) {
    return(
        <Link
            href={'/'}
            className="duration-300 flex flex-col gap-1
                        hover:-translate-y-1"
        >
            <Image 
                src={img}
                alt="album logo"
                width={1200}
                height={1200}
                className="mb-3"
            />
            <h4 className="font-semibold text-[20px] -my-1 text-base/6">{title1}</h4>
            <h4 className="-my-1 text-[15px] text-gray-300 text-base/6">{title2}</h4>
        </Link>
    );
}