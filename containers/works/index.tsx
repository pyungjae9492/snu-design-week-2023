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
    <div className='w-[90%] mx-auto lg:w-full flex-col lg:flex lg:flex-row lg:mx-10'>
      <div className='lg:max-w-[35%] lg:h-screen lg:pr-[30px] lg:mb-[72px] lg:flex-col lg:relative'>
        {/*sm메뉴*/}
        <div className='text-center text-4xl font-medium pt-[50px] pb-5 lg:hidden'>GRAPHIC</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="294" height="2" viewBox="0 0 294 2" fill="none" className='mx-auto lg:hidden'>
          <path d="M0 1H294" stroke="url(#paint0_linear_776_20425)" stroke-width="2"/>
          <defs>
            <linearGradient id="paint0_linear_776_20425" x1="1.31839" y1="1.50011" x2="300.592" y2="1.49947" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0.546875"/>
              <stop offset="0.5" stop-color="white"/>
              <stop offset="1" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        {/*lg메뉴*/}
        <div className={`sm:hidden flex flex-row w-[550px] h-[90px] items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 15 15" fill="none">
            <circle cx="7.4084" cy="7.35111" r="6.92308" transform="rotate(50 7.4084 7.35111)" fill="white"/>
          </svg>
        </div>
        <div className='sm:hidden'>
        <MenuBar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          />
        </div>
        {/*메뉴설명*/}
        <div className='lg:pl-8 lg:pr-[30px] lg:absolute lg:left-8 lg:right-[52px] lg:bottom-0'>
          {!isMenuOpen && <MenuExplanation selectedMenu={selectedMenu}/>}
        </div>
      </div>

      <div className='lg:min-w-[60%] lg:h-screen lg:overflow-y-auto'>
        <div className='flex flex-wrap flex-col items-center gap-6 lg:gap-5 lg:grid lg:grid-cols-2'>
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
  )
}

export default WorksContainer
