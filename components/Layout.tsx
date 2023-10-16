import { PCHeader } from "@/components/Header/PCHeader"
import { MobileHeader } from "./Header/MobileHeader"

export const Layout = ({ children }) => {
    return (
        <>
            <PCHeader />
            <MobileHeader />
            {children}
        </>
    )
}