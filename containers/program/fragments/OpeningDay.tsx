const openingDayDetails = "일정 | 11. 30 (목)\n장소 | 인스타그램 @snudesignweek\n대상 | 졸업주간에 관심이 있는 모든 사람들\n\n오프닝데이는 전시가 이루어지는 서울대학교 49동 디자인연구동의 전시공간을 인스타 라이브를 통해 소개하고 공유하는 오프라인 전시 오픈 기념행사입니다. 공식 인스타그램 계정을 통해 시공간의 제약을 넘어 THE GREAT BUMP를 생생하게 관측할 수 있습니다."

export const OpeningDay = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[100%] h-[543.337px] flex-shrink-0 bg-[#FFFFFF] mt-[80.29px] mb-[56.66px] self-center"></div>
            <p className="text-[#FFFFFF] text-[30px] leading-[40px] tracking-[-1.5px] mb-[24px]">Opening Day<br/>오프닝데이</p>
            <p className="w-[45%] text-[#FFF] text-[15px] leading-[30px] tracking-[-0.165px] mb-[316px] whitespace-pre-line">{openingDayDetails}</p>
        </div>
    )
}