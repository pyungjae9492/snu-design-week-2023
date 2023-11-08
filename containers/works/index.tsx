import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ellipse from 'public/ellipse.png'

import { MenuBar } from './fragments/MenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'

export const WorksContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getYDiffFromDeg = (deg: number, radius: number) => {
    return 0 - radius * Math.sin((deg * Math.PI) / 180)
  }

  const getXDiffFromDeg = (deg: number, radius: number) => {
    return radius - (radius * Math.cos((deg * Math.PI) / 180))
  }

  console.log(getXDiffFromDeg(21, 600))
  console.log(getYDiffFromDeg(21, 600))

  return (
    <div className='w-full h-max flex-col lg:flex-row'>
      <div className='max-h-screen flex-col mx-6 lg:flex lg:flex-row lg:justify-between'>
        {/*메뉴와 메뉴 설명*/}
        <div className='flex flex-col lg:justify-between lg:mr-12'>
          <div className='flex flex-col items-center gap-10'>
            <Image
              src={ellipse}
              width={30}
              height={30}
              className='invisible lg:visible'
            />
            <div className='fixed text-3xl rotate-[0deg]'>GRAPHIC</div>
            <div className='fixed text-3xl transition-all rotate-[7deg] translate-y-[73px] -translate-x-[5px]'>GRAPHIC</div>
            <div className='fixed text-3xl transition-all rotate-[14deg] translate-y-[145px] -translate-x-[17px]'>GRAPHIC</div>
            <div className='fixed text-3xl transition-all rotate-[21deg] translate-y-[215px] -translate-x-[39px]'>GRAPHIC</div>
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
