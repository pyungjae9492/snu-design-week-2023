const workshopDetail = "일정 | 11. 30 (목) - 12.05 (화)\n장소 | 49동 000호\n대상 | 서울대학교 미술대학 재학생 모두\n\n워크숍은 자주 만날 수 없었던 학우들이 디자인을 주제로 모여 연결 고리를 만들어 나가는 오프라인 행사입니다. 체험형 워크숍과 강연형 워크숍, 그리고 포트폴리오 리뷰 세 가지로 구성되어 있으며, 디자이너로서의 경험을 나누는 유용한 자리가 될 것입니다."
const workshopSchedule = "DAY 1. 블렌더 워크숍\n일정 | 11. 30 (목) 14:00\n진행 | 봉준영\n봉준영 학생디자이너는 3D 모델링 툴 Blender를 이용해 디지털 공간에 3차원의 개체를 만드는 과정을 탐구하는 디자이너입니다. Blender란 기본적인 모델링에서부터 텍스쳐, 애니메이팅, 시뮬레이션에 이르기까지의 광범위한 사용성이 장점입니다. 더불어 무료로 제공된다는 장점을 가지고 있습니다. Blender 입문자를 대상으로 진행되는 이 워크숍을 통해, 학생들은 디자인 작업에 있어서 새로운 가능성을 얻게 될 것입니다.\n\nDAY 2. 시아노타입 워크숍\n일정 | 12. 01 (금) 14:00\n진행 | 김재현\n김재현 학생디자이너는 실험적인 그래픽 프로세스를 탐구하는 디자이너입니다. 시아노타입이란 화학적 혼합액을 종이 혹은 천에 바른 뒤 햇볕 등의 자외선을 쪼여 지면에 형태를 만들어내는 기법을 말합니다. 청사진기법으로도 잘 알려진 이 기법을 통해 프러시안 블루의 깊고 오묘한 색감과 선명한 백색이 조화를 이루는 이미지를 만들어볼 수 있습니다.\n\nDAY 4. ID 인턴 토크\n일정 | 12. 03 (일) 17:30\n진행 |\n변경예정\n\nDAY 5. ID, VD 인턴 토크\n일정 | 12. 04 (월) 18:00\n진행 | 김가은, 송채은, 임유리\n재학 중 기업에서 인턴을 하며 겪었던 경험과 생각들을 함께 나누고 공유하는 토크 워크숍입니다. 인턴 생활의 궁금했던 점들을 부담없이 물어보고 이야기를 나눌 수 있습니다."

export const Workshop = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[100%] h-[543.337px] flex-shrink-0 bg-[#FFFFFF] mt-[80.29px] mb-[56.66px] self-center"></div>
            <p className="text-[#FFFFFF] text-[30px] leading-[40px] tracking-[-1.5px] mb-[24px]">워크샵<br/>Workshop</p>

            <div className="flex flex-row gap-[121px] mb-[399px]">
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[45%] whitespace-pre-line">{workshopDetail}</p>
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] whitespace-pre-line">{workshopSchedule}</p>
            </div>

        </div>
    )
}