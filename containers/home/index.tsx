import Image from "next/image"
import { MarqueeSection } from "./fragments/MarqueeSection"
import MotionGraphicSection from "./fragments/MotionGraphicSection"

export const HomeContainer: React.FC = () => {
    return (
        <div className="w-screen h-full bg-black">
            <Image
                src="/header-logo-home.png"
                width={683}
                height={183}
            />
            <MotionGraphicSection />
            <MarqueeSection />
        </div>
    )
}

export default HomeContainer
