//Components
import SectionFiveLinkItem from "./SectionFiveLinkItem";

export default function SectionFive() {
    const releases = [
        {
            img: '/images/1200x1200bf-60 (3).jpg',
            title1: 'Mass Effect 3',
            title2: 'Soundtrack'
        },
        {
            img: '/images/a1719389146_10.jpg',
            title1: 'Cyberpunk 2077',
            title2: 'Soundtrack'
        },
        {
            img: '/images/Life-is-Strange-Before-The-Storm-Soundtrack-CD.jpg',
            title1: 'Life is Strange: Before The Storm',
            title2: 'Soundtrack'
        },
        {
            img: '/images/1200x1200bf-60 (1).jpg',
            title1: 'Devil May Cry V',
            title2: 'Soundtrack'
        },
        {
            img: '/images/1200x1200bf-60 (2).jpg',
            title1: 'Deadpool & Wolverine',
            title2: 'Soundtrack'
        },
        {
            img: '/images/81zvuXTZeFL._AC_SL1424_.jpg',
            title1: 'The Greatest Showman',
            title2: 'Soundtrack'
        }
    ];

    return(
        <div className="w-full flex flex-col">
            <h3 className="uppercase text-[30px] md:text-[50px] font-semibold">Other releases</h3>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {releases.map((item) => (
                    <SectionFiveLinkItem 
                        key={item.img} 
                        img={item.img} 
                        title1={item.title1} 
                        title2={item.title2} 
                    />
                ))}
            </div>
        </div>
    );
}