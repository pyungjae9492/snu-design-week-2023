const homecomingDayDetails = "일정 | 12.01 (금) 19:00 - 20:00 \n장소 | 서울대학교 49동\n대상 | 서울대학교 디자인과 동문 및 재학생\n\n하이데이는 디자인 동문 선배님들을 모시고 졸업생들의 작품을 소개하고 오프라인 전시 모습을 함께 감상하며 이야기를 나누는 행사입니다. 졸업생들의 졸업작품을 매개로 선후배 간 소통의 장이자, 전시의 리뷰를 함께 나누는 서울대학교 디자인과 동문 교류의 자리가 될 것입니다."

export const HomecomingDay = () => {
    return (
        <div className="flex flex-col">
            <img src="/program_img.png" className="w-full h-[543.337px] flex-shrink-0 bg-[#FFFFFF] mt-[80.29px] mb-[56.66px] self-center sm:h-[199px]" />
            <p className="text-[#FFFFFF] text-[30px] leading-[40px] tracking-[-1.5px] mb-[24px] sm:text-[24px] sm:font-semibold sm:leading-[32px] sm:tracking-normal">하이 데이<br/><span className="sm:font-medium sm:leading-[30px]">Hi day</span></p>

            <p className="w-[45%] text-[#FFF] text-[15px] leading-[30px] tracking-[-0.165px] mb-[286px] whitespace-pre-line sm:w-full sm:text-[14px] sm:font-medium sm:leading-[28px] sm:tracking-[-0.154px]">{homecomingDayDetails}</p>
        </div>
    )
}