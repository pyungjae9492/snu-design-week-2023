import { ContentsSelection } from "@/components/ContentsSelection"
import { AboutExplanation } from "./fragments/AboutExplanation"

export const AboutContainer: React.FC = () => {
    return (
        <>
            <AboutExplanation />

            <ContentsSelection 
                headingList={["Visual Identity", "SNU DESIGN WEEK 2023\nPreperation Comittee", "Exhibition\nParticipants", "Thanks To"]}
                contentsByHeading={["Content1 - Visual Identity", "Content2 - SNU DESIGN WEEK 2023 Preperation Comittee", "Content3 - Exhibition Participants", "Content4 - Thanks To"]}
            />
        </>
    )
}

export default AboutContainer
