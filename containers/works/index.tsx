import React, { useState } from 'react'

import MenuBar from './fragments/MenuBar'
import { MobileMenuBar } from './fragments/MobileMenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'
import { ProjectGallery } from './fragments/ProjectGallery'

export const WorksContainer = (props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const [selectedMenu, setSelectedMenu] = useState('ALL')

  return (
    <div className='w-[90%] mx-auto lg:w-full lg:h-[calc(100vh-150px)] flex-col lg:flex lg:flex-row lg:mx-10'>
      <div className='lg:max-w-[35%] lg:h-full lg:pr-[30px] lg:mb-[72px] lg:flex-col lg:relative'>
        {/*sm메뉴*/}
        <div className='lg:hidden'>
          <MobileMenuBar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            />
        </div>
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

      <div className='lg:min-w-[60%] lg:h-full lg:overflow-y-auto'>
        {/* <div className='flex flex-wrap flex-col items-center gap-6 lg:gap-5 lg:grid lg:grid-cols-2'>
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
        </div> */}
        <ProjectGallery {...props} />
      </div>
    </div>
  )
}

export default WorksContainer
