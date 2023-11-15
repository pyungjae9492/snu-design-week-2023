// TODO: | 다음에 gap(or margin) 19px 주기, 팀원 이름 밑으로 내려갈 때 들여쓰기

const team1 = "2023 졸업주간 준비위원회";
const teamExplain1 = "졸업주간 준비위원회는 SNU DESIGN WEEK 2023의 기획과 운영을 담당하는 학생 위원회로, 총 33명의 디자인과 학생들로 구성되어 있습니다. 졸업주간 준비위원회는 서로에게 긍정적인 영향을 줄 수 있는 건강하고 평등한 조직을 지향합니다.";
const teamMates1 = "졸업주간 준비위원장 | 금민정\n산업디자인 부위원장 | 김가은\n시각디자인 부위원장 | 김수현";

const team2 = "기획팀";
const teamExplain2 = "서로 영향을 주고받는 디자인과 사회의 관계를 인식하고 사회 속에 존재하는 디자이너로서의 태도를 보여줄 수 있는 졸업주간의 핵심 주제를 기획했습니다.";
const teamMates2 = "팀장 | 금민정\n팀원 | 김현수 김수현 이규원 김유로 남현지 박지호 김서영 김가은";

const team3 = "공간팀";
const teamExplain3 = "전시의 기획 및 취지에 공감할 수 있는 공간 구성, 편리한 동선과 캡션 안내를 통해 보다 많은 이들이 즐길 수 있는 새로운 전시 환경을 구현했습니다.";
const teamMates3 = "팀장 | 서아연\n팀원 | 김가은 조동주 전민경 박서진";

const team4 = "대외협력팀";
const teamExplain4 = "여러 파트너사와 디자인과 동문 선배님들에게 졸업주간의 취지와 목적을 알려 성공적인 후원을 성사시키고 이를 통해 학생들의 졸업 전시를 지원했습니다.";
const teamMates4 = "팀장 | 박지호\n팀원 | 김채원 신혜원 엄혜영";

const team5 = "도록팀";
const teamExplain5 = "친환경 인증을 받은 지류 사용을 통해 지속가능한 제작 방법을 고려하고 도록을 통해 기록하고 탐색하고 발견하는 행위의 주목하는 이들의 이야기를 담았습니다.";
const teamMates5 = "팀장 | 김서영\n팀원 | 김수현 송나윤 윤희경";

const team6 = "디자인팀";
const teamExplain6 = "졸업주간의 태도를 전달하는 비주얼 아이덴티티를 개발하고, 공통된 시각 언어를 활용해 전시 기획에 공감할 수 있는 굿즈를 제작했습니다.";
const teamMates6 = "팀장 | 박소영\n팀원 | 김연우 김현지 전희은";

const team7 = "영상팀";
const teamExplain7 = "음성과 자막을 효과적으로 활용하여 학생 디자이너의 작품을 보다 많은 이들에게 소개할 수 있는 영상을 제작했습니다.";
const teamMates7 = "팀장 | 윤지인\n팀원 | 김한나 서하연 이하은";

const team8 = "웹팀";
const teamExplain8 = "웹사이트 기획과 디자인을 담당하여, 학생 개발팀과 협업해 언제 어디에서든 생생하게 행사를 즐길 수 있는 새로운 전시 경험을 온라인 상에서 구현했습니다.";
const teamMates8 = "팀장 | 김현수\n팀원 | 남현지 송채은 안서현";

const team9 = "프로그램팀";
const teamExplain9 = "온-오프라인 행사 병행을 통해 시공간의 제약 없이 더 많은 이들에게 닿을 수 있는 새로운 행사 방식을 제안했습니다.";
const teamMates9 = "팀장 | 이규원\n팀원 | 정가은 김선형";

const team10 = "홍보팀";
const teamExplain10 = "전시의 기획을 흥미롭고 명료하게 전달하는 홍보 콘텐츠를 제작하여 더 많은 이들에게 행사의 정보를 전달했습니다.";
const teamMates10 = "팀장 | 이태윤\n팀원 | 김유로 전유정";

const team11 = "회계팀";
const teamExplain11 = "불필요한 낭비를 줄여 경제적으로 행사를 진행할 수 있도록 전체 예산을 계획하고 관리했습니다.";
const teamMates11 = "팀장 | 정지운\n팀원 | 금민정";

const team12 = "텀블벅팀";
const teamExplain12 = "텀블벅을 통해 행사를 홍보하고, 불필요한 포장과 접착제를 최소화하며 후원자들에게 안전하게 리워드를 전달했습니다.";
const teamMates12 = "팀장 | 김은주";

const PreparationComitteeComponent: React.FC<{num:number, team: string, teamExplain: string, teamMates: string}> = ({num, team, teamExplain, teamMates}) => {
    return (
        <div className="text-[30px] font-normal leading-[40px] tracking-[-1.5px] mt-[32px] sm:text-[20px] sm:font-medium sm:leading-[30px] sm:tracking-normal sm:mt-0 sm:mb-[50px]">
            {num !== 0 && <span className=" text-[#FFF] font-medium lg:hidden">{num}. </span>}{team}
            <div className="flex flex-row gap-[80px] mt-[32px] sm:flex-col sm:mt-[24px] sm:gap-[40px]">
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] whitespace-pre-line sm:hidden">{teamExplain}</p>
                {num === 0 && 
                    <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] whitespace-pre-line sm:font-medium sm:w-full lg:hidden">{teamExplain}</p>
                }
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] whitespace-pre-line sm:font-medium sm:w-full">{teamMates}</p>
            </div>
        </div>
    );
}

export const PreparationComittee = () => {
    return (
        <div className="flex flex-col mt-[64px] sm:mt-[140px]">
            <PreparationComitteeComponent num={0} team={team1} teamExplain={teamExplain1} teamMates={teamMates1} />
            <PreparationComitteeComponent num={1} team={team2} teamExplain={teamExplain2} teamMates={teamMates2} />
            <PreparationComitteeComponent num={2} team={team3} teamExplain={teamExplain3} teamMates={teamMates3} />
            <PreparationComitteeComponent num={3} team={team4} teamExplain={teamExplain4} teamMates={teamMates4} />
            <PreparationComitteeComponent num={4} team={team5} teamExplain={teamExplain5} teamMates={teamMates5} />
            <PreparationComitteeComponent num={5} team={team6} teamExplain={teamExplain6} teamMates={teamMates6} />
            <PreparationComitteeComponent num={6} team={team7} teamExplain={teamExplain7} teamMates={teamMates7} />
            <PreparationComitteeComponent num={7} team={team8} teamExplain={teamExplain8} teamMates={teamMates8} />
            <PreparationComitteeComponent num={8} team={team9} teamExplain={teamExplain9} teamMates={teamMates9} />
            <PreparationComitteeComponent num={9} team={team10} teamExplain={teamExplain10} teamMates={teamMates10} />
            <PreparationComitteeComponent num={10} team={team11} teamExplain={teamExplain11} teamMates={teamMates11} />
            <PreparationComitteeComponent num={11} team={team12} teamExplain={teamExplain12} teamMates={teamMates12} />
            <div className="mb-[268.5px] sm:mb-[187px]"></div>
        </div>
    );
}

