const team1 = "1. 지도교수님";
const teamMates1 = "김수정 배민기 이장섭 이준원 안성모 유병준 장성연 조상은";

const team2 = "2. 동문후원";
const teamMates2 = `79 | 우영희\n83 | 이성식\n89 | 최정아\n90 | 구지회 김우정 김지현 김찬수 민유선 윤수연 은덕수 이정아 이준환 임찬희 최세연 최성민 최희선\n91 | 김연주 남세우 남태원 류승연 박성아 박진희 송인호 신연주 우지희 윤선영 이보희 이승환 이지은 이진재 이창훈 조상은 황서림 황수홍\n92 | 이범재 정주형\n97 | 이장섭 정성모\n98 | 김승민 박성수\n99 | 김나영`;
const team2_79 = "우영희";
const team2_83 = "이성식";
const team2_89 = "최정아";
const team2_90 = "구지회 김우정 김지현 김찬수 민유선 윤수연 은덕수 이정아 이준환 임찬희 최세연 최성민 최희선";
const team2_91 = "김연주 남세우 남태원 류승연 박성아 박진희 송인호 신연주 우지희 윤선영 이보희 이승환 이지은 이진재 이창훈 조상은 황서림 황수홍";
const team2_92 = "이범재 정주형";
const team2_97 = "이장섭 정성모";
const team2_98 = "김승민 박성수";
const team2_99 = "김나영";

const team3 = "3. 행사 준비";
const teamMates3 = "전시 전반 | 양준후 오혜윤\n번역 | 김구연";

const team4 = "4. 제작";
const teamMates4 = "웹사이트 개발 | DRMVSN\n현장 촬영 | TH STUDIO\n도록 인쇄 | 청산인쇄\n포스터 인쇄 | 청산인쇄\n굿즈 제작 | 관악실버에코";

const ThanksToComponent: React.FC<{num: number, team: string, teamMates: string}> = ({num, team, teamMates}) => {
    return (
        <div className="flex flex-row mb-[16px] sm:flex-col sm:mb-[40px] sm:gap-[12px]">
            <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal ml-[2px] w-[47%] break-keep sm:w-full sm:text-[20px] sm:leading-[30px] sm:font-medium sm:tracking-normal">{team}</p>
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

const ThanksToComponent2: React.FC<{num: number, team: string, teamMates: string, team2_79: string, team2_83: string, team2_89: string, team2_90: string, team2_91: string, team2_92: string, team2_97: string, team2_98: string, team2_99: string}> = ({num, team, teamMates, team2_79, team2_83, team2_89, team2_90, team2_91, team2_92, team2_97, team2_98, team2_99}) => {   
    return (
        <div className="flex flex-row mb-[16px] sm:flex-col sm:mb-[40px] sm:gap-[12px]">
            <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal ml-[2px] w-[47%] break-keep sm:w-full sm:text-[20px] sm:leading-[30px] sm:font-medium sm:tracking-normal">{team}</p>
            {teamMates != teamMates2 &&
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal text-start w-[53%] break-keep whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{teamMates}</p>
            }
            {teamMates == teamMates2 &&
                <div className="sm:hidden w-[53%]">
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">79 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_79}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">83 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_83}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">89 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_89}</p>
                    </div>
                    <div className="flex flex-row gap-[30px]">
                        <div className="flex flex-row w-[152px]">
                            <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">90 |&nbsp;</p>
                            <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_90}</p>
                        </div>
                        <div className="flex flex-row w-[152px]">
                            <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">91 |&nbsp;</p>
                            <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_91}</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">92 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_92}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">97 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_97}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">98 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_98}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre break-keep text-[15px]">99 |&nbsp;</p>
                        <p className="text-[#FFF] leading-[30px] tracking-[-0.165px] whitespace-pre-line break-keep text-[15px]">{team2_99}</p>
                    </div>
                </div>
            }
            {teamMates == teamMates2 &&
                <div className="flex flex-col w-[53%] break-keep sm:gap-[14px] sm:w-full lg:hidden">
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">79 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_79}</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">83 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_83}</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">89 |&nbsp;</p>
                        <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_89}</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">90 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_90}</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">91 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_91}</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">92 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_92}</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">97 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_97}</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">98 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_98}</p>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] font-medium text-start break-keep whitespace-pre">99 |&nbsp;</p>
                            <p className="text-white text-[14px] leading-[28px] tracking-[-0.154px] w-[150px] font-medium text-start break-keep whitespace-pre-line">{team2_99}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export const ThanksTo = () => {
    return (
        <div className="flex flex-col mt-[96px] sm:mt-[10px]">
            <p className="text-[30px] font-normal leading-[40px] tracking-[-1.5px] mb-[31.5px] sm:text-[20px] sm:font-medium sm:leading-[30px] sm:mb-[40px]">도움 주신 분들</p>
            <ThanksToComponent num={1} team={team1} teamMates={teamMates1} />
            <ThanksToComponent2 num={2} team={team2} teamMates={teamMates2} team2_79={team2_79} team2_83={team2_83} team2_89={team2_89} team2_90={team2_90} team2_91={team2_91} team2_92={team2_92} team2_97={team2_97} team2_98={team2_98} team2_99={team2_99} />
            <ThanksToComponent num={3} team={team3} teamMates={teamMates3} />
            <ThanksToComponent num={4} team={team4} teamMates={teamMates4} />
            <div className="mb-[138px] sm:mb-[331px]"></div>
        </div>
    );
}

