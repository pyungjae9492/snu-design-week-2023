import Link from "next/link"
import { useRouter } from "next/router"

export const PCHeader = () => {


    const router = useRouter()

    const HeaderNavButton = ({ pageName }) => {

        const pageNameToPath = pageName === "Home" ? "/" : `/${pageName.toLowerCase()}`

        return (
            <button onClick={() => router.push(`/${pageNameToPath}`)}>
                <p className="text-white">{pageName}</p>
            </button>
        )
    }

    return (
        <div className="sticky top-0 p-10 w-full hidden lg:flex flex-row justify-between z-10">
            <h1 className="text-white hidden lg:block">THE GREAT BUMP 로고 자리</h1>
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