import Image from "next/image"

export const AboutExplanation = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-[130px] sm:mb-[40px]">
            <img
                src="/about_title.png"
                width="458.297px"
                height="65px"
                className="sm:hidden"
            />
            <div className="relative w-[298.59561px] h-[100.99997px] lg:hidden">
                <Image
                    src="/about_title_mobile.png"
                    layout="fill"
                />
            </div>
            <div className="flex flex-row w-full max-w-[900px] gap-[72px] mt-[80px] sm:max-w-[345px] sm:justify-center sm:mt-[24px]">
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] sm:text-center sm:break-keep sm:w-[90%]">
                서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의 길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다. 우리는 이 찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로 명명하고 이를 깊이 들여다보고자 합니다. 당차게 서로의 이야기를 나누고 응원해줄 충돌의 순간은 짧지만 가장 진실하고 뜨거울 것입니다. 이 한 번의 뜨거운 충돌이 한 사람 한 사람에게 새로운 추진력으로 작용하길 바라며, ‘The Great Bump’를 관측해 전달합니다. 
                <span className="sm:hidden"><br/><br/>올해로 6회째를 맞이하는 서울대학교 디자인과 졸업전시, SNU DESIGN WEEK 2023은 학생 디자이너들에게 졸업전시가 가지는 의미를 떠올리는 것에서 출발했습니다. 각자 다양한 삶 속에서 작업을 전개해 온 학생 디자이너들은 졸업전시에 작업으로 그간의 안부를 전하고 인사를 나누려 합니다. 저마다의 경험과 배움을 응축한 수많은 작업들이 한 때 한 곳에 모였을 때 만들어지는 여러 마주침의 역동적인 에너지는 졸업전시 행사를 통해 세상으로 뻗어나갈 것입니다. 이처럼 적극적이고 두려움 없이 세상과 부딪혀 나갈 디자이너들의 졸업전시 행사는 서울대학교 49동 디자인연구동과 웹사이트에서 함께 진행됩니다. 이번 12월엔 SNU DESIGN WEEK 2023에서 42명의 학생 디자이너들이 만들어내는 충돌의 열기를 느껴보시길 바랍니다.</span>
                </p>
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] sm:hidden">
                As we journey toward our distinct goals, our paths converge at SNU DESIGN WEEK, creating a unique moment we fondly call 'The Great Bump.' It's an opportunity to delve deeper into this significant encounter. The collision of stories and mutual support may be brief, yet it is brimming with sincerity and passion. We share 'The Great Bump' in the aspiration that this powerful collision will ignite a fresh drive within each of us as we move forward on our individual paths.
                <br/><br/>SNU DESIGN WEEK 2023 marks its sixth anniversary, a celebration that reflects upon the profound significance of graduation exhibitions for aspiring student designers. Emerging designers, hailing from diverse backgrounds and experiences, are gearing up to introduce themselves through their design showcases at the Degree Show. This event serves as a dynamic convergence of ideas, experiences, and creative expressions, as the works of numerous designers are brought together in one place, unleashing their energy into the world through SNU DESIGN WEEK. The Great Bump, symbolizing the enthusiastic collision of designers who are poised to venture boldly and fearlessly into the world, will come to life through a series of both online and offline events. This December, we invite you to immerse yourself in the exhilarating synergy generated by the works of 42 talented student designers at SNU DESIGN WEEK 2023.
                <br/><br/>
                </p>
            </div>
        </div>
    );
}

