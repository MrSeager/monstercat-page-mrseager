//Components
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    icon: ReactNode;
}

export default function NavLink({ href, icon }: NavLinkProps) {
    return (
        <Link
            href={href}
            title="icon"
            className="duration-500 hover:scale-120"
        >
            {icon}
        </Link>
    );
}