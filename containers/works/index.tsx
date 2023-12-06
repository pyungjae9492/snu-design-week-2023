import React, { useState } from 'react'

import MenuBar from './fragments/MenuBar'
import { MobileMenuBar } from './fragments/MobileMenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectGallery } from './fragments/ProjectGallery'

export const WorksContainer = (props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [selectedMenu, setSelectedMenu] = useState('ALL')

  const notionProps = props[selectedMenu]

  return (
    <div className={`w-full sm:max-w-[640px] mx-auto lg:w-full lg:h-[calc(100vh-150px)] flex-col lg:flex lg:flex-row px-7 lg:px-10 sm:pb-20 overflow-y-hidden ${isMenuOpen && "sm:h-[calc(100vh-88px)]"}`}>
      <div className='lg:max-w-[50%] lg:h-full lg:mb-[72px] lg:flex-col lg:relative'>
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
          <MenuExplanation isMenuOpen={isMenuOpen} selectedMenu={selectedMenu}/>
        </div>
      </div>

      <div className='lg:w-full lg:max-w-[60%] lg:h-full lg:overflow-y-auto scrollbar-hide'>
        <ProjectGallery {...notionProps} />
      </div>
    </div>
  )
}

export default WorksContainer
