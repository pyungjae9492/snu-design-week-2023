import { Player } from "@lottiefiles/react-lottie-player"
import Image from "next/image"
import { useMemo, useRef } from "react"

export const MotionGraphicSection = () => {

    const isMobile = useMemo(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= 1000
        }
    }, [])

    const lottieRef = useRef(null)

    return (
        <div
            className="relative w-full aspect-[2/3] lg:aspect-[5/2] justify-center items-center flex flex-col"
        >
            {isMobile ? (
                <Image
                    src="/mobile-main-motion-img.png"
                    layout="fill" 
                />
            ) : (
                <Player
                    autoplay={true}
                    loop={true}
                    controls={false}
                    lottieRef={(ref) => {
                        if (ref) lottieRef.current = ref;
                    }}
                    src="/main-motion-poster.json"
                    style={{ width: "100%", height: "100%" }}
                />
            )}
        </div>
    )
}

export default MotionGraphicSection