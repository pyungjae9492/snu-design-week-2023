import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ellipse from 'public/ellipse.png'

import MenuBar from './fragments/MenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'

export const WorksContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const [selectedMenu, setSelectedMenu] = useState('ALL')

  return (
    <div className='w-full h-max flex-col lg:flex-row'>
      <div className='max-h-screen flex-col mx-6 lg:flex lg:flex-row lg:justify-between'>
        {/*메뉴와 메뉴 설명*/}
        <div className='border border-white flex flex-col lg:justify-between lg:pr-12'>

          <div className='border border-red-400 flex flex-start mt-4 ml-[25px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 15 15" fill="none" className='invisible lg:visible'>
              <circle cx="7.4084" cy="7.35111" r="6.92308" transform="rotate(50 7.4084 7.35111)" fill="white"/>
            </svg>
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
