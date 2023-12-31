import { ProgramExplanation } from './fragments/ProgramExplanation'
import { ContentsSelection } from '@/components/ContentsSelection'

import { OpeningDay } from './fragments/OpeningDay'
import { Workshop } from './fragments/Workshop'
import { TalkConcert } from './fragments/TalkConcert'
import { HomecomingDay } from './fragments/HomecomingDay'

export const ProgramContainer: React.FC = () => {
    return (
        <>
            <div className='pt-10 lg:pt-20'>
                <ProgramExplanation />

                <ContentsSelection 
                    headingList={["Opening Day", "Workshop", "Hi Day", "Talk Concert"]}
                    contentsByHeading={[OpeningDay, Workshop, HomecomingDay, TalkConcert]}
                />
            </div>
        </>
    )
}

export default ProgramContainer