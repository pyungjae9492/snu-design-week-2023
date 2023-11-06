import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ellipse from 'public/ellipse.png'

import { MenuBar } from './fragments/MenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'

export const WorksContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full h-max flex-col lg:flex-row'>
      <div className='max-h-screen flex-col mx-6 lg:flex lg:flex-row lg:justify-between'>
        {/*메뉴와 메뉴 설명*/}
        <div className='flex flex-col lg:justify-between lg:mr-12'>
          <div className='flex flex-col items-center gap-10 lg:flex-row '>
            <Image
              src={ellipse}
              width={30}
              height={30}
              className='hidden lg:block'
            />
            <div className='text-5xl'>GRAPHIC</div>
          </div>
          <div className='lg:ml-16 lg:mb-10'>
            {!isMenuOpen && <MenuExplanation />}
          </div>
        </div>
        {/*작품들*/}
        <div className='overflow-y-auto lg:justify-stretch lg:min-w-[60%]'>
          <div className='flex flex-wrap flex-col items-center gap-5 lg:grid lg:grid-cols-2'>
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
            <ProjectImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksContainer
