const team1 = "지도교수님";
const teamMates1 = "김수정 배민기 이장섭 이준원 안성모 유병준 장성연 조상은";

const team2 = "동문후원";
const teamMates2 = "00 | OOO\n00 | OOO OOO OOO OOO OOO OOO OOO OOO\n00 | OOO OOO OOO OOO OOO OOO";

const team3 = "행사 준비";
const teamMates3 = "전시 전반 | OOO OOO\n번역 | OOO";

const team4 = "제작";
const teamMates4 = "웹사이트 개발 | OOO\n현장 촬영 | OOO\n도록 인쇄 | OOO\n포스터 인쇄 | OOO\n굿즈 제작 | OOO";

const ThanksToComponent: React.FC<{team: string, teamMates: string}> = ({team, teamMates}) => {
    return (
        <div className="flex flex-row mb-[16px]">
            <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal ml-[2px] w-[47%]">{team}</p>
            <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start whitespace-pre-line">{teamMates}</p>
        </div>
    );
}

export const ThanksTo = () => {
    return (
        <div className="flex flex-col mt-[96px]">
            <p className="text-[30px] font-normal leading-[40px] tracking-[-1.5px] mb-[31.5px]">도움 주신 분들</p>
            <ThanksToComponent team={team1} teamMates={teamMates1} />
            <ThanksToComponent team={team2} teamMates={teamMates2} />
            <ThanksToComponent team={team3} teamMates={teamMates3} />
            <ThanksToComponent team={team4} teamMates={teamMates4} />
            <div className="mb-[138px]"></div>
        </div>
    );
}

