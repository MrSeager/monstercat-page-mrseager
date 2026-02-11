//Components
import Image from "next/image";

export default function BackgroundImage () {
    return (
        <div className="absolute inset-0">
            <Image 
            src="/images/1200x1200bf-60.jpg" 
            alt="Background" 
            width={1200} 
            height={1200} 
            className="w-full h-[90vh] object-cover blur-sm" 
            priority 
            />

            {/* Gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </div>
    );
}