import Image from "next/image"
import { useMemo } from "react"

export const MotionGraphicSection = () => {

    const isMobile = useMemo(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= 1000
        }
    }, [])

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
                <Image
                    src="/pc-main-motion-img.png"
                    layout="fill" 
                />
            )}
        </div>
    )
}

export default MotionGraphicSection