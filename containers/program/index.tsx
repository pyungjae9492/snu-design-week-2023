import { ProgramExplanation } from './fragments/ProgramExplanation'
import { ContentsSelection } from '@/components/ContentsSelection'

export const ProgramContainer: React.FC = () => {
    return (
        <>
            <ProgramExplanation />

            <ContentsSelection 
                headingList={["Opening Day", "Workshop", "Talk Concert", "Homecoming Day"]}
                contentsByHeading={["Content1 - Opening Day", "Content2 - Workshop", "Content3 - Talk Concert", "Content4 - Homecoming Day"]}
            />
        </>
    )
}

export default ProgramContainer