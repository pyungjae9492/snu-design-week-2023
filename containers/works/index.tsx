import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ellipse from 'public/ellipse.png'

import MenuBar from './fragments/MenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'

export const WorksContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const [selectedMenu, setSelectedMenu] = useState('ALL')

  const getYDiffFromDeg = (deg: number, radius: number) => {
    return 0 - radius * Math.sin((deg * Math.PI) / 180)
  }

  const getXDiffFromDeg = (deg: number, radius: number) => {
    return radius - radius * Math.cos((deg * Math.PI) / 180)
  }

  return (
    <div className='w-full h-max flex-col lg:flex-row'>
      <div className='max-h-screen flex-col mx-6 lg:flex lg:flex-row lg:justify-between'>
        {/*메뉴와 메뉴 설명*/}
        <div className='flex flex-col lg:justify-between lg:mr-12'>
          <div className='flex mt-4 ml-[25px]'>
            <Image
              src={ellipse}
              width='17px'
              height='17px'
              layout='fixed'
              className='visible sm:invisible'
            />
            <MenuBar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              selectedMenu={selectedMenu}
              setSelectedMenu={selectedMenu}
            />
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
