import motionPoster from '@/public/about_motion_poster.json'
import { Player } from "@lottiefiles/react-lottie-player"
import { useRef } from "react"

const title1 = "전시 비주얼 아이덴티티";
const contentsKO1 = "‘찰나의 뜨거운 충돌 사건'인 ‘THE GREAT BUMP’를 별들의 충돌이라는 모티브를 통해 시각화했습니다. 포스터의 메인 그래픽은 우주공간 속 별들을 연상시키는 동시에 충돌지점으로 뻗어나가는 졸업전시자 개개인을 상징합니다. 우주와 별이라는 거대한 스케일감의 메타포를 통해 SNUD 2023의 폭발적인 에너지를 전달합니다.";
const contentsEN1 = "'The Great Bump,' an instance of 'momentous collision,' has been artistically represented using the metaphor of celestial star collisions. The prominent graphic featured on the poster draws inspiration from the appearance of stars in the vast expanse of outer space, signifying the individual journey of each graduating student as they reach the point of collision and radiate outwards. This grand-scale metaphor of the cosmos and its stars vividly conveys the explosive energy encapsulated within SNU DESIGN WEEK 2023.";

const title2 = "타입페이스";
const contentsKO2 = "포스터 그래픽에 사용된 점들이 모여 글자를 이루는 디테일로 응축된 에너지를 표현한 기하학적인 메인 로고타입을 제작하고, 이를 한 벌의 서체로 확장해 여러 매체에 적용할 수 있도록 했습니다.";
const contentsEN2 = "We've crafted a geometric primary logotype that encapsulates the energy found in the intricate dots used in the poster graphics, which amalgamate to shape the letters. Furthermore, we've extended this into a comprehensive set of fonts, ensuring its versatile applicability across various media.";

const title3 = "모션포스터";
const contentsKO3 = "모션포스터는 발산과 회전, 두 가지 버전으로 구성했습니다. 발산 버전은 충돌 사건을 발판 삼아 더 넓은 공간으로 뻗어나가는 별들의 움직임을 시각적으로 나타냅니다. 회전 버전은 빛나는 별들과 그 궤적으로 이루어진 충돌 사건 전체의 볼륨을 360도에서 포착하여 관측합니다.";
const contentsEN3 = "The motion poster consists of two versions: divergence and rotation. The divergence version visually represents the movement of stars stretching out into a wider space using a collision event as a springboard. The rotating version captures and observes the volume of the glowing stars and their trajectories of the entire impact event at 360 degrees.";

const VisualIdentityComponent: React.FC<{title: string, contentsKO: string, contentsEN: string}> = ({title, contentsKO, contentsEN}) => {
    return (
        <>
            <p className="text-[30px] font-normal leading-[40px] tracking-[-1.5px] sm:text-[20px] sm:font-medium">{title}</p>
            <div className="flex flex-row gap-[72px] mt-[31.5px] mb-[64.18px] sm:justify-center sm:mt-[24px] sm:mb-0">
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] sm:text-[14px] sm:w-full sm:font-medium">{contentsKO}</p>
                <p className="text-white text-[15px] leading-[30px] tracking-[-0.165px] font-normal w-[50%] sm:hidden">{contentsEN}</p>
            </div>
        </>
    );
}

export const VisualIdentity = () => {
    const lottieRef = useRef(null);

    return (
        <div className="flex flex-col mt-[96px] sm:mt-[10px]">
            <VisualIdentityComponent title={title1} contentsKO={contentsKO1} contentsEN={contentsEN1} />
            <img src="/about_visual_identity.png" width="904.001px" height="353.996px" className="self-center mt-[8.32px] mb-[120.5px] sm:mt-[24px] sm:mb-[60px]" />
            <VisualIdentityComponent title={title2} contentsKO={contentsKO2} contentsEN={contentsEN2} />
            <div className="flex flex-row items-center mb-[91px] sm:mt-[12px] sm:mb-[60px] sm:justify-center sm:flex-col sm:gap-[11px]">
                <p className="text-white text-[45.297px] font-normal leading-[40.444px] tracking-[-0.498px] font-snu-regular mr-[55px] sm:text-[28px] sm:leading-[30px] sm:mr-0 sm:text-center sm:tracking-normal">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?-+
                </p>
                <p className="text-white text-[56px] font-normal leading-[50px] tracking-[-0.616px] font-snu-regular sm:text-[32px] sm:leading-[30px] sm:tracking-[-0.352px]">
                the great bump<br/>2023 snu design week
                </p>
            </div>
            <VisualIdentityComponent title={title3} contentsKO={contentsKO3} contentsEN={contentsEN3} />
            <div className='w-[612px] h-[863px] self-center mt-[82px] mb-[294.36px] sm:mt-[97px] sm:mb-[120px] sm:w-[243px] sm:h-[343px]'>
                <Player
                    speed={2}
                    autoplay={true}
                    loop={true}
                    controls={false}
                    keepLastFrame={true}
                    lottieRef={(ref) => {
                        if (ref) lottieRef.current = ref;
                    }}
                    src={motionPoster}
                />
            </div>
        </div>
    );
}

