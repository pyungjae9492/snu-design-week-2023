const talkConcertDetails = "시간 | 12. 02 (토) 14:00 - 17:00 / 12. 03 (일) 14:00 - 17:00\n장소 | 49동 322호\n대상 | 서울대학교 디자인과 재학생 모두\n주제 | 작업으로 세상과 마주쳐 온 디자이너\n\n토크콘서트는 시각과 산업 디자인 전반의 다양한 자리에서 활동하고 계시는 다양한 연차의 선배 디자이너분들을 모시고 졸업 이후 디자이너의 삶과 디자이너로서의 경험을 함께 나누는 자리입니다. 연사님들이 공유해주신 경험을 통해 작업으로 세상과 마주치는 디자이너의 삶에 대해 알아가는 자리가 될 것입니다."
const talkConcertSchedule1 = "12.02 (토) ID 공업디자인전공\n1부 | 14:00 ~ 15:00\n송희 / 소속 (주니어)\n박주홍 / 소속 (주니어)\n\n쉬는시간 | 15:00 ~ 15:20\n\n2부 | 15:20 ~ 17:00\n원하연 / 건국대학교 산업디자인학과 조교수\nWoo Hayoun\n\n김태환 / 엘리베이션디자인\nKim Taehwan\n\n12.03 (일) VD 시각디자인전공\n1부 | 14:00 ~ 15:50\n박예원 / 네이버 (주니어)\n이진원 / 삼성전자 One UI (주니어)\n최지호 / 스튜디오 fnt (주니어)\n\n쉬는시간 | 15:50 ~ 16:10\n\n2부 | 16:10 ~ 17:00\n강수영 / Toss\nKang Suyoung"
const talkConcertSchedule2 = "12.03 (일) VD 시각디자인전공\n1부 | 00:00 ~ 00:00\n홍길동 / 소속\nHong Gildong\n2-3문장 소개  e.g.서울대학교 디자인학부를 졸업하고 크리에이티브 컨설팅그룹 <퍼셉션>의 대표를 역임하고 있다. Perception은 경험디자인, 브랜드개발 뿐만 아니라 혁신, 디자인 역량강화를 포괄하는 크리에이티브 컨설팅그룹으로 가치를 발굴하고 공유하며 나아가 재창조해내는 과정을 통해 다양한 기업과 협업하고있다.\n\n홍길동 / 소속\nHong Gildong\n2-3문장 소개  e.g.서울대학교 디자인학부를 졸업하고 크리에이티브 컨설팅그룹 <퍼셉션>의 대표를 역임하고 있다. Perception은 경험디자인, 브랜드개발 뿐만 아니라 혁신, 디자인 역량강화를 포괄하는 크리에이티브 컨설팅그룹으로 가치를 발굴하고 공유하며 나아가 재창조해내는 과정을 통해 다양한 기업과 협업하고있다.\n\n쉬는시간 | 00:00 ~ 00:00\n\n2부 | 00:00 ~ 00:00\n홍길동 / 소속\nHong Gildong\n2-3문장 소개  e.g.서울대학교 디자인학부를 졸업하고 크리에이티브 컨설팅그룹 <퍼셉션>의 대표를 역임하고 있다. Perception은 경험디자인, 브랜드개발 뿐만 아니라 혁신, 디자인 역량강화를 포괄하는 크리에이티브 컨설팅그룹으로 가치를 발굴하고 공유하며 나아가 재창조해내는 과정을 통해 다양한 기업과 협업하고있다.\n\n홍길동 / 소속\nHong Gildong\n2-3문장 소개  e.g.서울대학교 디자인학부를 졸업하고 크리에이티브 컨설팅그룹 <퍼셉션>의 대표를 역임하고 있다. Perception은 경험디자인, 브랜드개발 뿐만 아니라 혁신, 디자인 역량강화를 포괄하는 크리에이티브 컨설팅그룹으로 가치를 발굴하고 공유하며 나아가 재창조해내는 과정을 통해 다양한 기업과 협업하고있다."

export const TalkConcert = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[100%] h-[543.337px] flex-shrink-0 bg-[#FFFFFF] mt-[80.29px] mb-[56.66px] self-center"></div>
            <p className="text-[#FFFFFF] text-[30px] leading-[40px] tracking-[-1.5px] mb-[24px]">토크콘서트<br/>Talk concert</p>
            <p className="w-[45%] text-[#FFF] text-[15px] leading-[30px] tracking-[-0.165px] whitespace-pre-line">{talkConcertDetails}</p>

            <div className="flex flex-row gap-[80px] mt-[70px] mb-[262px]">
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] whitespace-pre-line">{talkConcertSchedule1}</p>
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] whitespace-pre-line">{talkConcertSchedule2}</p>
            </div>

        </div>
    )
}