// TODO: teamMates 2줄 이상으로 넘어갈 때 들여쓰기

const team1 = "지도교수님";
const teamMates1 = "김수정 배민기 이장섭 이준원 안성모 유병준 장성연 조상은";

const team2 = "동문후원";
const teamMates2 = `79 | 우영희\n83 | 이성식\n89 | 최정아\n90 | 구지회 김우정 김지현 김찬수 민유선 윤수연 은덕수 이정아 이준환 임찬희 최세연 최성민 최희선\n91 | 김연주 남세우 남태원 류승연 박성아 박진희 송인호 신연주 우지희 윤선영 이보희 이승환 이지은 이진재 이창훈 조상은 황서림 황수홍\n92 | 이범재 정주형\n97 | 이장섭 정성모\n98 | 김승민 박성수\n99 | 김나영`;

const team3 = "행사 준비";
const teamMates3 = "전시 전반 | 양준후 오혜윤\n번역 | 김구연";

const team4 = "제작";
const teamMates4 = "웹사이트 개발 | DRMVSN\n현장 촬영 | TH STUDIO\n도록 인쇄 | 청산인쇄\n포스터 인쇄 | 청산인쇄\n굿즈 제작 | 관악실버에코";

const ThanksToComponent: React.FC<{num: number, team: string, teamMates: string}> = ({num, team, teamMates}) => {
    return (
        <div className="flex flex-row mb-[16px] sm:flex-col sm:mb-[40px] sm:gap-[12px]">
            <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal ml-[2px] w-[47%] break-keep sm:w-full sm:text-[20px] sm:leading-[30px] sm:font-medium sm:tracking-normal">
            <span className=" text-[#FFF] font-medium lg:hidden">{num}. </span>{team}</p>
            {teamMates != teamMates2 &&
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[53%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates}</p>
            }
            {teamMates == teamMates2 &&
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[53%] break-keep whitespace-pre-line sm:hidden">{teamMates}</p>
            }
            {teamMates == teamMates2 &&
                <div className="flex flex-col w-[53%] break-keep sm:gap-[14px] sm:w-full lg:hidden">
                    <div className="flex flex-row">
                        <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[0]}</p>
                        <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[1]}</p>
                    </div>
                    <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[2]}</p>
                    <div className="flex flex-row">
                        <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[3]}</p>
                        <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[4]}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[5]}</p>
                        <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[50%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates.split("\n")[6]}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export const ThanksTo = () => {
    return (
        <div className="flex flex-col mt-[96px] sm:mt-[120px]">
            <p className="text-[30px] font-normal leading-[40px] tracking-[-1.5px] mb-[31.5px] sm:text-[20px] sm:font-medium sm:leading-[30px] sm:mb-[40px]">도움 주신 분들</p>
            <ThanksToComponent num={1} team={team1} teamMates={teamMates1} />
            <ThanksToComponent num={2} team={team2} teamMates={teamMates2} />
            <ThanksToComponent num={3} team={team3} teamMates={teamMates3} />
            <ThanksToComponent num={4} team={team4} teamMates={teamMates4} />
            <div className="mb-[138px]"></div>
        </div>
    );
}

