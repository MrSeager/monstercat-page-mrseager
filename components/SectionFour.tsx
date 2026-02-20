

export default function SectionFour() {
    return(
        <div className="w-full flex flex-col gap-3 aspect-video">
            <h3 className="uppercase text-[30px] md:text-[50px] font-semibold">Music video</h3>
            <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/D9G1VOjN_84"
                title="Imagine Dragons x J.I.D - Enemy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}