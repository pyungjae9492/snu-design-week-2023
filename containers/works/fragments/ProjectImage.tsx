import Image from 'next/image'
import React from 'react'

import projectcover from 'public/projectcover.png'

export const ProjectImage = () => {
  return (
    <div className='w-full relative'>
      <Image src={projectcover} layout='responsive'/>
      <div className='absolute left-5 bottom-4 lg:hidden'>
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-col'>
            <div className='text-base font-medium'>무슨 프로젝트</div>
            <div className='text-base font-medium'>Design Project</div>
          </div>
          <div className='flex flex-col'>
            <div className='text-xs font-medium'>디자이너 |  김이름</div>
            <div className='text-xs font-medium'>Designer | Name</div>
          </div>
        </div>
      </div>
    </div>
  )
}
