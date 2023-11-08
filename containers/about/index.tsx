import { ContentsSelection } from "@/components/ContentsSelection"
import { AboutExplanation } from "./fragments/AboutExplanation"
import { VisualIdentity } from "./fragments/VisualIdentity"
import { PreparationComittee } from "./fragments/PreparationComittee"
import { ExhibitionParticipants } from "./fragments/ExhibitionParticipants"
import { ThanksTo } from "./fragments/ThanksTo"

export const AboutContainer: React.FC = () => {
    return (
        <>
            <AboutExplanation />

            <ContentsSelection 
                headingList={["Visual Identity", "SNU DESIGN WEEK 2023\nPreperation Comittee", "Exhibition\nParticipants", "Thanks To"]}
                contentsByHeading={[VisualIdentity, PreparationComittee, ExhibitionParticipants, ThanksTo]}
            />
        </>
    )
}

export default AboutContainer
