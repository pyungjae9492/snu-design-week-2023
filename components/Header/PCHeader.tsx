import Link from "next/link"

export const PCHeader = () => {
    return (
        <div className="fixed top-0 p-10 w-full hidden md:flex flex-row justify-between">
            <h1 className="text-white">SNU DESIGN WEEK 2023</h1>
            <div className="flex flex-row gap-[5vw]">
                <Link href="/">
                    <p className="text-white">Home</p>
                </Link>
                <Link href="/about">
                    <p className="text-white">About</p>
                </Link>
                <Link href="/works">
                    <p className="text-white">Works</p>
                </Link>
                <Link href="/program">
                    <p className="text-white">Program</p>
                </Link>
                <Link href="/partners">
                    <p className="text-white">Partners</p>
                </Link>
            </div>
        </div>
    )
}