import Image from "next/image"
import { Card } from "./fragments/Card"

const PartnersData = [
    {
        "logo": "pxd",
        "description": "pxd는 사람(people)과 디지털미래(digital future)를 행복한 경험(experience)로 연결합니다.  web 2.0 시대에 치열하게 고민했던 최고의 UX/UI 경험을 바탕으로, 블록체인 기술 기반의 WEB3 시대를 맞아 사용자경험디자인의 새로운 역할을 찾기 위한 가슴 설레는 여정을 시작하였습니다.",
    },
    {
        "logo": "yoondesigngroup",
        "description": "윤디자인그룹은 1989년 설립 이래 종이책부터 웹페이지까지 모든 환경에서 탁월한 서체를 만들어오며 한글 서체 개발을 주도하고 있습니다. 윤디자인그룹이 만든 폰트는 20년 넘게 디자이너의 꾸준한 사랑과 선택을 받는 대한민국 대표 서체로 자리잡았습니다."
    },
    {
        "logo": "sandollcloud",
        "description": "국내 최초의 디지털 폰트 회사로 설립된 산돌은 글로벌 수준의 폰트 제작 및 서비스 역량을 보유한 업계 1위 기업입니다. 국내 최대 폰트 플랫폼 산돌구름을 운영하며, 웹폰트, AI 폰트 검색 등 콘텐츠 서비스 영역으로 확장하고 있습니다."
    },
    {
        "logo": "rixfont",
        "description": "빛나는 디자인의 완성! 확 바뀐 RixFont클라우드에서 더 다양해진 브랜드들을 만나 보세요."
    },
    {
        "logo": "cubicon",
        "description": "큐비콘은 3D프린터와 AI로보틱스로 스마트제조혁신을 이룹니다. 그동안 큐비콘이 쌓아 이룬 혁신 융합 기술을 기반으로, 보다 안전하고 효율적인 3D프린팅과 AI로보틱스를 제공합니다."
    },
    {
        "logo": "dstrict",
        "description": "디스트릭트는 디지털 미디어 기술을 활용한 콘텐츠 제작을 통해 혁신적인 공간 경험을 디자인하는 회사입니다."
    },
    {
        "logo": "motemote",
        "description": "사람들의 목표 달성을 효과적으로 돕기 위해 탄생한 모트모트입니다. 서비스의 형태를 국한하지 않고 아날로그 플래너부터 올클 앱 서비스, 커뮤니티, 콘텐츠 등을 만들며 사용자들의 성장을 돕고 있습니다."
    },
    {
        "logo": "josephstacey",
        "description": "A GOOD BAG, A GOOD LIFE\n가장 아름다운 것. 가장 실용적인 것을 위한 탐구. 우리는 라이프와 디자인 사이에서 가치를 찾습니다. 일상에서 영감을 얻어 실용성과 아름다움이 공존하도록 디자인합니다. 기능의 본질을 집요하게 탐구하고 극도의 심플함으로 단순화하면 마침내 생활을 이해한 궁극의 아름다움을 만납니다. 플리츠 기술력을 바탕으로 컬러의 다양함을 구현하며 새로운 기술과 소재를 찾아 지속 가능한 친환경 디자인을 추구합니다"
    },
    {
        "logo": "sungwonadpia",
        "description": "성원애드피아는 인쇄 관련 모든 디자인 컨설팅과 기획, 제작, 배송에 이르기까지 전 공정에 자동화된 원스톱(One-Stop) 시스템을 도입함으로써 한 차원 높고, 차별화된 서비스를 고객에게 제공하고 있습니다.\n\n애드피아몰은 홍보 및 전시 목적으로 포스터, 배너, 현수막, 등신대 등 다양한 인쇄물을 제작할 수 있는 쇼핑몰입니다. ‘인쇄는 쇼핑이다’라는 슬로건 아래 누구나 쉽고 편리하게 이용할 수 있는 장을 제공합니다."
    },
    {
        "logo": "naver",
        // TODO: Change description
        "description": "네이버는 수많은 SME와 창작자, 파트너들이 미래 기술을 활용해글로벌 시장에서 더 큰 성장을 이룰 수 있도록 지원하는 글로벌 테크 플랫폼입니다.",
    },
    {
        "logo": "beattitude",
        "description": "비애티튜드"
    },
    {
        "logo": "moorim",
        "description": "무림페이퍼"
    },
    {
        "logo": "snudesignalumni",
        "description": "서울대학교 디자인동문회"
    }
]

export const PartnersContainer: React.FC = () => {
    return (
        <div className="w-screen h-fit bg-black p-6 gap-8 flex flex-col justify-start items-center">
            <p className="text-[128px] font-snu-regular hidden lg:block leading-[165px]">
                Partners
            </p>
            <p className="whitespace-break-spaces text-sm leading-7 text-center mb-8">
                {"SNU DESIGN WEEK 2023은\n다음과 같은 파트너사 / 동문의 협력 및 후원을 통해 진행됩니다."}
            </p>
            <div className="relative max-w-[500px] w-full aspect-[345/56] shrink-0 mb-8">
                <Image
                    src="/mobile-partners-logo-group.png"
                    layout="fill"
                />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 w-full h-full max-w-[290px] lg:max-w-[870px] lg:gap-2 border-collapse pb-40">
                {PartnersData.map((data, index) => (
                    <Card
                        index={index}
                        key={"partners-logo-" + index}
                        logo={data.logo}
                        description={data.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default PartnersContainer
