import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export const MobileHeader = () => {

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

    const router = useRouter()

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen)
    }

    const onClickMenuButton = () => {
        toggleNavMenu()
    }

    const HeaderNavButton = ({ pageName }) => {
        const pageNameToPath = pageName === "Home" ? "/" : `/${pageName.toLowerCase()}`
        const imageWidth =
            pageName === "Home" || pageName === "About" ? "70px" :
            pageName === "Works" ? "80px" :
            pageName === "Program" ? "100px" :
            pageName === "Partners" && "110px"
        
        const onClickNavButton = () => {
            toggleNavMenu()
            if (pageName === "Works") {
                router.push("works?menu=ALL")
            } else {
                router.push(pageNameToPath)
            }
        }
        return (
            <Image
                src={`/mobile-header-${pageName.toLowerCase()}-nav.png`}
                width={imageWidth}
                height="44px"
                layout="fixed"
                className="cursor-pointer"
                onClick={onClickNavButton}
            />
        )
    }

    const isHome = router.pathname === "/"
    const pageName =
        router.pathname === "/" ? "Home" :
        router.pathname === "/about" ? "About" :
        router.pathname.includes("/works") ? "Works" :
        router.pathname === "/program" ? "Program" :
        router.pathname === "/partners" && "Partners"

    return (
        <>
            <div 
                className={`${router.pathname.includes("works/") ? "fixed" : "sticky"} top-0 sm:p-6 ${router.pathname === "/" && "sm:pb-0"} p-10 w-full sm:flex hidden flex-row justify-between items-center z-50`}
            >
                <div 
                    className={`fixed w-full h-[150px] -z-10 top-0 left-0 ${router.pathname === "/" && "invisible"}`}
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.76) 41.18%, rgba(58, 58, 58, 0.00) 95.27%)",
                        pointerEvents: "none"
                    }}
                />
                <p className={`text-white text-2xl font-snu-regular break-all whitespace-break-spaces leading-5 shrink-0 ${isHome && "invisible"}`}>{"The Great\nBump"}</p>
                <p className={`text-white text-3xl font-snu-regular break-all leading-5 ${isHome && "invisible"}`}>{pageName}</p>
                <button 
                    className="text-white flex w-14 justify-end items-center"
                    onClick={onClickMenuButton}
                >
                    {isNavMenuOpen ? (
                        <Image
                            src="/mobile-header-menu-close.png"
                            width="36px"
                            height="36px"
                            layout="fixed"
                        />
                    ) : (
                        <Image
                            src="/mobile-header-menu-open.png"
                            width="36px"
                            height="36px"
                            layout="fixed"
                        />
                    )}
                </button>
            </div>
            {isNavMenuOpen && (
                <div className="fixed top-0 w-screen h-screen z-40 bg-[rgba(0,0,0,0.9)] flex flex-col gap-6 justify-center items-center">
                    <HeaderNavButton pageName="Home" />
                    <HeaderNavButton pageName="About" />
                    <HeaderNavButton pageName="Works" />
                    <HeaderNavButton pageName="Program" />
                    <HeaderNavButton pageName="Partners" />
                </div>
            )}
        </>
    )
}