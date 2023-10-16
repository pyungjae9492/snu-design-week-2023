import { MarqueeSection } from "./fragments/MarqueeSection"
import MotionGraphicSection from "./fragments/MotionGraphicSection"

export const HomeContainer: React.FC = () => {
    return (
        <div className="fixed w-screen h-screen bg-black">
            <MotionGraphicSection />
            <MarqueeSection />
        </div>
    )
}

export default HomeContainer
