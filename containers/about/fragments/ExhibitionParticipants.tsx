export const ExhibitionParticipants = () => {
    const participants = ["금민정", "김서영", "김수현", "김연우", "김유로", "김채영", "김한나", "김현수", "김헤령", "김혜영", "박선유", "박소영", "박지호", "서하연", "송채은", "안서현", "오채은", "윤지인", "이규원", "이수경", "이은채", "이태윤", "전유정", "전희은", "정가은", "정지운", "채정화", "권정민", "김가은", "김현지", "나희연", "남현지", "서아연", "신예림", "이나연", "이민지", "임유리", "전민경", "조동주", "최다정", "최혜연"]

    return (
        <div className="flex flex-col mt-[96px]">
            <p className="text-[30px] font-normal leading-[40px] tracking-[-1.5px] mb-[31.5px]">전시참여자</p>
            <div className="flex flex-wrap gap-[48px] mb-[233px]">
                {participants.map((participant, index) => (
                    <div key={index} className="flex flex-row items-center gap-[7px] ml-[2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="white"/>
                        </svg>
                        <p className="text-[15px] font-normal leading-[30px] tracking-[-0.165px]">{participant}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
