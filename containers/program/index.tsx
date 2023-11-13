import { ProgramExplanation } from './fragments/ProgramExplanation'
import { ContentsSelection } from '@/components/ContentsSelection'

import { OpeningDay } from './fragments/OpeningDay'
import { Workshop } from './fragments/Workshop'
import { TalkConcert } from './fragments/TalkConcert'
import { HomecomingDay } from './fragments/HomecomingDay'

export const ProgramContainer: React.FC = () => {
    return (
        <>
            <ProgramExplanation />

            <ContentsSelection 
                headingList={["Opening Day", "Workshop", "Talk Concert", "Homecoming Day"]}
                contentsByHeading={[OpeningDay, Workshop, TalkConcert, HomecomingDay]}
            />
        </>
    )
}

export default ProgramContainer