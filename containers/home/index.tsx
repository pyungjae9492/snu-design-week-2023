import { MarqueeSection } from "./fragments/MarqueeSection"
import MotionGraphicSection from "./fragments/MotionGraphicSection"

export const HomeContainer: React.FC = () => {

    return (
        <div className="w-screen h-full bg-black">
            <div className="px-6 lg:px-10 pb-10 lg:pb-0">
                <div className="hidden sm:flex flex-col items-start gap-4 mb-3">
                    <p className="text-white text-[48px] font-snu-regular whitespace-break-spaces leading-[38px]">{"SNU DESIGN WEEK 2023\nTHE GREAT BUMP"}</p>
                    <p className="text-white text-sm whitespace-break-spaces leading-6">{"2023.11.30.THU - 12.05.TUE 10AM - 6PM\n1, GWANAK-RO, GWANAK-GU, SEOUL\n49, COLLEGE OF FINE ARTS, SEOUL NAT’L UNIVERSITY"}</p>
                </div>
                <MotionGraphicSection />
            </div>
            <MarqueeSection />
        </div>
    )
}

export default HomeContainer
