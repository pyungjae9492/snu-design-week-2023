import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ellipse from 'public/ellipse.png'

import { MenuBar } from './fragments/MenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'

export const WorksContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full h-screen flex-col lg:flex-row'>
      <div className='max-h-screen flex-col lg:flex lg:flex-row lg:justify-between mx-6'>
        <div className='flex flex-col lg:justify-between lg:max-w-[30%] lg:mr-12'>
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <Image src={ellipse} width={30} height={30} />
            <div className='text-5xl'>GRAPHIC</div>
          </div>
          <div>{!isMenuOpen && <MenuExplanation />}</div>
        </div>

        <div className='overflow-auto'>
          <div className='flex flex-wrap flex-col items-center lg:grid lg:grid-cols-2 gap-5'>
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
            <ProjectImage />
            <ProjectImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksContainer
