import { MarqueeSection } from "./fragments/MarqueeSection"
import MotionGraphicSection from "./fragments/MotionGraphicSection"
import { PCHeader } from "@/components/Header/PCHeader"

export const HomeContainer: React.FC = () => {
    return (
        <div className="fixed w-screen h-screen bg-black">
            <PCHeader />
            
            <MotionGraphicSection />

            <MarqueeSection />
        </div>
    )
}

export default HomeContainer
