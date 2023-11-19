import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import homeAnimation from '@/public/NavigationBar_home.json'
import aboutAnimation from '@/public/NavigationBar_about.json'
import worksAnimation from '@/public/NavigationBar_works.json'
import programAnimation from '@/public/NavigationBar_program.json'
import partnersAnimation from '@/public/NavigationBar_partners.json'
import { useRef, useState } from "react"
import { Player } from "@lottiefiles/react-lottie-player"

export const PCHeader = () => {


    const router = useRouter()

    const HeaderNavButton = ({ pageName }) => {

        const pageNameToPath = pageName === "Home" ? "/" : `/${pageName.toLowerCase()}`

        const lottieRef = useRef(null)
        const [isPlaying, setIsPlaying] = useState(false)

        const lottieJson = 
            pageName === "Home" ? homeAnimation : 
            pageName === "About" ? aboutAnimation :
            pageName === "Works" ? worksAnimation :
            pageName === "Program" ? programAnimation :
            pageName === "Partners" && partnersAnimation
        
        const handleHover = () => {
            const player = lottieRef.current;
        
            if (player) {
              if (isPlaying) {
                player.playSegments([player.totalFrames, 0], true);
                setIsPlaying(false);
              } else {
                player.playSegments([0, player.totalFrames], true);
                setIsPlaying(true);
              }
            }
          };

        return (
            <button 
                onClick={() => router.push(`/${pageNameToPath}`)}
                onPointerEnter={handleHover}
                onPointerLeave={handleHover}
            >
                <Player
                  speed={3}
                  autoplay={false}
                  loop={false}
                  controls={false}
                  keepLastFrame={isPlaying}
                  lottieRef={(ref) => {
                    if (ref) lottieRef.current = ref;
                  }}
                  src={lottieJson}
                  style={{ width: 70, height: 40 }}
                />
            </button>
        )
    }

    return (
        <div className="sticky top-0 p-10 w-full sm:hidden flex flex-row justify-between z-10">
            {router.pathname !== "/" ? (
                <Link href="/">
                        <Image className="cursor-pointer" src="/header-logo.png" width={200} height={50} alt="logo" />
                </Link>
            ) : (
                <div />
            )}
            <div className="flex flex-row gap-[5vw]">
                <HeaderNavButton pageName="Home" />
                <HeaderNavButton pageName="About" />
                <HeaderNavButton pageName="Works" />
                <HeaderNavButton pageName="Program" />
                <HeaderNavButton pageName="Partners" />
            </div>
        </div>
    )
}