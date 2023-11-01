import { ContentsSelection } from "@/components/ContentsSelection"
import { AboutExplanation } from "./fragments/AboutExplanation"

export const AboutContainer: React.FC = () => {
    return (
        <>
            <AboutExplanation />

            <ContentsSelection />
        </>
    )
}

export default AboutContainer
