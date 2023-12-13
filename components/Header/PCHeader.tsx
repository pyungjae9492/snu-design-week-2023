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
                className="h-fit"
                onClick={() => pageName === "Works" ? router.push(`/works?menu=ALL`) : router.push(`/${pageNameToPath}`)}
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
                  style={{ width: "auto", height: 40 }}
                />
            </button>
        )
    }

    return (
        <div className={`top-0 p-10 sm:hidden flex flex-row justify-between z-10 bg-gradient-to-b from-[#000000] to-[#00000000] w-full
            ${router.pathname.includes("works/") ? "fixed": "sticky"}
          `}
        >
            <Link href="/">
              <div className="flex flex-col gap-4 overflow-x-visible">
              {router.pathname !== "/" ? (
                <Image className="cursor-pointer" src="/header-logo.png" width={300} height={50} alt="logo" />
              ) : (
                <>
                  <p className="cursor-pointer text-[80px] font-snu-regular leading-[60px]">SNU DESIGN WEEK 2023</p>
                  <div className="flex flex-row gap-4">
                    <p className="cursor-pointer text-[80px] font-snu-regular leading-[60px] shrink-0">THE GREAT BUMP</p>
                    <p className="cursor-pointer text-md shrink-0 whitespace-break-spaces leading-6">{"2023.11.30.THU - 12.05.TUE 10AM - 6PM\n1, GWANAK-RO, GWANAK-GU, SEOUL\n49, COLLEGE OF FINE ARTS, SEOUL NAT’L UNIVERSITY"}</p>
                  </div>
                </>
              )}
              </div>
            </Link>
            <div className="flex flex-row justify-between h-fit w-[calc(100%-550px)] shrink-0">
                <HeaderNavButton pageName="Home" />
                <HeaderNavButton pageName="About" />
                <HeaderNavButton pageName="Works" />
                <HeaderNavButton pageName="Program" />
                <HeaderNavButton pageName="Partners" />
            </div>
        </div>
    )
}