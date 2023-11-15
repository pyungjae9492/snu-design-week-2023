import { PCHeader } from "@/components/Header/PCHeader"
import { MobileHeader } from "./Header/MobileHeader"

export const Layout = ({ children }) => {
    return (
        <div className="w-full h-full overflow-hidden">
            <PCHeader />
            <MobileHeader />
            {children}
        </div>
    )
}