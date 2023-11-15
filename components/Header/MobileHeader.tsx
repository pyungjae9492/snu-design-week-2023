import Link from "next/link"
import { useState } from "react"

export const MobileHeader = () => {

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen)
    }

    const onClickMenuButton = () => {
        toggleNavMenu()
    }

    const HeaderNavButton = ({ pageName }) => {
        const pageNameToPath = pageName === "Home" ? "/" : `/${pageName.toLowerCase()}`
        return (
            <Link href={pageNameToPath}>
                <p className="text-white">{pageName}</p>
            </Link>
        )
    }

    return (
        <>
            <div className="fixed top-0 p-10 w-full flex lg:hidden flex-row justify-end z-50">
                <button 
                    className="text-white"
                    onClick={onClickMenuButton}
                >
                    {isNavMenuOpen ? "X" : "Menu"}
                </button>
            </div>
            {isNavMenuOpen && (
                <div className="fixed top-0 w-screen h-screen z-40 bg-[rgba(0,0,0,0.9)] flex flex-col gap-10 justify-center items-center">
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