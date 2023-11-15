import React, { useState } from 'react'

{
  /*props로 selectedMenu 넘겨받기*/
}
export const MenuExplanation = () => {
  const [menuName, setMenuName] = useState('GRAPHIC')
  const [professor, setProfessor] = useState('배민기')
  const [advisor, setAdvisor] = useState('Bae Minkee')
  const [description, setDescription] = useState(
    '시각디자인의 조형적 특성과 다양한 활용에 대해 숙지하고, 디자인 작업에 있어 제작의 방향 설정 및 표현 방법과 커뮤니케이션 컨셉을 이해한다. 체계적인 프로세스를 통해 개인 주제의 일관성 있는 디자인 구현과 창조적인 표현을 가능하게 하고, 그래픽디자인의 외연을 넓히는 경험을 쌓는 것을 목표로 한다.'
  )

  return (
    <div className='flex flex-col my-6'>
      <p className='text-3xl font-medium mb-3 lg:mb-6'>{menuName}</p>
      <div className='text-sm leading-7 mb-3 lg:mb-6 '>
        <p>지도교수 | {professor}</p>
        <p>Advisor | {advisor}</p>
      </div>
      <p className='text-sm leading-7'>{description}</p>
    </div>
  )
}
