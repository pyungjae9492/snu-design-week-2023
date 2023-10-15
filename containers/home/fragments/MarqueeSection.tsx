import Marquee from "react-fast-marquee"


export const MarqueeSection = () => {
    return (
        <div className="fixed bottom-0 w-full">
            <Marquee>
                <div className="flex flex-row w-full gap-10">
                    <p className="text-white">하단 아이콘 1</p>
                    <p className="text-white">하단 아이콘 2</p>
                    <p className="text-white">하단 아이콘 3</p>
                </div>
            </Marquee>        
        </div>
    )
}