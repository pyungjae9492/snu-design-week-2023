export const MenuExplanation = ({selectedMenu}) => {

  let title = ''
  let professor = ''
  let advisor = ''
  let description = ''

  if (selectedMenu === 'ALL') {
    description = '서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의 길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다. 이 찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로 명명하고 이를 깊이 들여다보고자 합니다. 이 한 번의 뜨거운 충돌이 새로운 추진력으로 작용하길 바라며, ‘The Great Bump’를 관측해 전달합니다.'
  } else if (selectedMenu === 'GRAPHIC') {
    title = '그래픽디자인프로젝트'
    professor = '배민기'
    advisor = 'Bae Minkee'
    description = '시각디자인의 조형적 특성과 다양한 활용에 대해 숙지하고, 디자인 작업에 있어 제작의 방향 설정 및 표현 방법과 커뮤니케이션 컨셉을 이해한다. 체계적인 프로세스를 통해 개인 주제의 일관성 있는 디자인 구현과 창조적인 표현을 가능하게 하고, 그래픽디자인의 외연을 넓히는 경험을 쌓는 것을 목표로 한다.'
  } else if (selectedMenu === 'BRAND') {
    title = '브랜드디자인프로젝트'
    professor = '이장섭'
    advisor = 'Lee Jangsup'
    description = '정체성을 구축하기 위한 시각적 응용 항목과 이를 대외적으로 확산시키고 일관적으로 관리하는 시스템 전체의 디자인을 포함하는 ‘브랜드 디자인’ 개념을 이해하고, 기존의 브랜드와 사회의 움직임을 관찰하여 개인, 단체, 서비스, 제품, 작품을 넘어 문화적 현상, 조직적인 움직임, 생각의 방식으로 확장되는 새로운 브랜드 디자인을 제안한다.'
  } else if (selectedMenu === 'MEDIA') {
    title = '미디어디자인프로젝트'
    professor = '김수정'
    advisor = 'Kim Suzung'
    description = '미디어를 디스플레이로서의 도구가 아닌 디자인의 요소로 인식하고, 이 특성을 적극 활용하는 프로세스를 학습한다. 확장된 미디어 개념의 역사를 이해하고 이를 기반으로 커뮤니케이션을 위한 콘텐츠를 제작한다. 개인 주제를 미디어 중심으로 재해석하여 다른 분야와 구별되는 자신만의 미디어 해석 방법과 표현 방법을 토론한다.'
  } else if (selectedMenu === 'UX/UI') {
    title = 'UI/UX디자인프로젝트'
    professor = '이준원'
    advisor = 'Lee Junwon'
    description = 'UI/UX 디자인은 현대 비즈니스와 기술 분야에서 핵심 역할을 한다. 뛰어난 UI/UX 디자인은 제품 또는 서비스의 성공에 결정적인 역할을 하며 사용자의 만족도와 충성도를 높인다. 본 수업을 통해 UI/UX의 기본 개념과 사용자 연구, 디자인 도구와 기술, 유용한 디자인 원칙, 그리고 실제 프로젝트로 적용하는 과정을 통해 현업에서 요구되는 문제해결 역량을 향상 시키는 것이 목표이다.'
  } else if (selectedMenu === 'PRODUCT INTERACTION') {
    title = '제품인터랙션디자인프로젝트'
    professor = '조상은'
    advisor = 'Jo Sangeun'
    description = '인간, 사회, 문화, 경제, 기술, 환경의 변화 속에서 미래 가치를 조망하는 주관적 통찰과 해석을 기반으로 디자인에 접근한다. ‘나’의 관점으로 해석한 변화하는 현상을 표현할 수 있는 디자인 언어를 개발하고, 이를 제품인터랙션 시스템 디자인을 통해 구체화하여 방향성을 제시한다.'
  } else if (selectedMenu === 'LIVING') {
    title = '리빙디자인프로젝트'
    professor = '장성연'
    advisor = 'Jang Sungyun'
    description = '인간의 삶을 구성하는 환경에서 필요한 사물 및 공간을 탐구하여 새로운 리빙의 형태를 디자인한다. 재료 본연의 물성을 고민하고 미학적 아름다움에 기반하여 리빙디자인에 대한 새로운 방향성을 제안한다.'
  } else if (selectedMenu === 'MOBILITY') {
    title = '모빌리티디자인프로젝트'
    professor = '유병준'
    advisor = 'Yoo Byungjun'
    description = "본 프로젝트는 <제품 혹은 오브젝트>의 큰 범주 안에서 모빌리티 디자인을 목표로 한다. 모빌리티 디자인의 개념은 기존의 운송기기 디자인과 다르게 보다 스마트하고, 지속가능하며, 인간중심적이다. 더 이상 단순한 'People mover'가 아닌 'People helper'로 인류에게 보다 혁신적이고 가치 있는 미래 모빌리티의 비전을 제안한다."
  } else if (selectedMenu === 'SPACE') {
    title = '공간디자인프로젝트'
    professor = '안성모'
    advisor = 'Ahn Sungmo'
    description = '공간을 형성시키는 필수적인 장치이자 우리가 일상 속에서 항상 접하는 ‘문’이라는 공간요소를 통해 공간이 담고 있는 복잡한 힘들을 규명하고 열림과 닫힘의 고유한 작동방식을 디자인 함으로써 방문자와 거주자 간의 새로운 소통의 관계를 제시한다. 이러한 과정을 통해 자신만의 시각으로 공간 고유의 속성과 문제를 드러내고 공간에 대한 사고를 확장한다.'
  }

  return (
    <div className='flex flex-col py-6 gap-3 lg:gap-6'>
      <p className='text-3xl font-medium'>{title}</p>
      { selectedMenu !== 'ALL' && (
      <div className='text-sm leading-7'>
        <p>지도교수 | {professor}</p>
        <p>Advisor | {advisor}</p>
      </div>
      )}
      <p className='text-sm leading-7'>{description}</p>
    </div>
  )
}
