import Marquee from "react-fast-marquee"
import Image from "next/image"


export const MarqueeSection = () => {
    return (
        <div className="fixed bottom-0 w-full hidden lg:flex">
            <Marquee>
                <Image
                    src="/marquee.png"
                    width={1600}
                    height={72}
                />
            </Marquee>        
        </div>
    )
}