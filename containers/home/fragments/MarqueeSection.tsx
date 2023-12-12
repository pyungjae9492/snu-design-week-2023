import Marquee from "react-fast-marquee"
import Image from "next/image"


export const MarqueeSection = () => {
    return (
        <div className="fixed bottom-0 w-full h-[72px] hidden lg:flex">
            <Marquee>
                <Image
                    src="/marquee.png"
                    layout="fill"
                />
            </Marquee>        
        </div>
    )
}