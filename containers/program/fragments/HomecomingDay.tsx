const homecomingDayDetails = "일정 | 12.01,02,03 중 하루 (각각 금,토,일) 00:00 - 00:00\n장소 | zoom\n대상 | 서울대학교 디자인과 동문 및 재학생\n\n홍커밍데이(가제)는 온라인 전시 오픈 전, 디자인 동문 선배님들을 모시고 졸업생들의 작품을 소개하고 오프라인 전시 모습을 함께 감상하며 이야기를 나누는 자리입니다. 졸업생들의 졸업작품을 매개로 선후배 간 소통의 장을 열고, 전시의 리뷰를 함께 나누는 순간을 가지며 졸업주간을 마무리하는 서울대학교 디자인과 동문의 교류 행사입니다."

export const HomecomingDay = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[100%] h-[543.337px] flex-shrink-0 bg-[#FFFFFF] mt-[80.29px] mb-[56.66px] self-center"></div>
            <p className="text-[#FFFFFF] text-[30px] leading-[40px] tracking-[-1.5px] mb-[24px]">하이 데이<br/>Hi day</p>
            <p className="w-[45%] text-[#FFF] text-[15px] leading-[30px] tracking-[-0.165px] mb-[286px] whitespace-pre-line">{homecomingDayDetails}</p>
        </div>
    )
}