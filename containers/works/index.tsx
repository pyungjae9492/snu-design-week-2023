import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import MenuBar from './fragments/MenuBar'
import { MenuExplanation } from './fragments/MenuExplanation'
import { MobileMenuBar } from './fragments/MobileMenuBar'
import { ProjectGallery } from './fragments/ProjectGallery'

export const WorksContainer = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollRef = React.useRef(null)

  const router = useRouter()

  const { menu } = router.query

  const selectedMenu = menu ? (menu as string) : 'ALL'
  const notionProps = props[selectedMenu]

  function setSelectedMenu(newMenu: string) {
    if (newMenu !== 'ALL') {
      // set selectedMenu to url query
      router.push(
        {
          pathname: '/works',
          query: { menu: newMenu }
        },
        undefined,
        { shallow: true }
      )
    }
    if (newMenu === 'ALL') {
      router.push(
        {
          pathname: '/works'
        },
        undefined,
        { shallow: true }
      )
    }
    // scroll to top
    scrollRef.current.scrollTo(0, 0)
  }

  useEffect(() => {
    if (menu) {
      setIsMenuOpen(false)
    }
  }, [])

  return (
    <div
      className={`w-full mx-auto lg:w-full lg:h-[calc(100vh-150px)] flex-col lg:flex lg:flex-row px-7 lg:px-10 sm:pb-20 overflow-y-hidden ${
        isMobileMenuOpen && 'sm:h-[calc(100vh-88px)]'
      }`}
    >
      <div className='lg:max-w-[50%] lg:h-full lg:mb-[72px] lg:flex-col lg:relative'>
        {/*sm메뉴*/}
        <div className='lg:hidden'>
          <MobileMenuBar
            isMenuOpen={isMobileMenuOpen}
            setIsMenuOpen={setIsMobileMenuOpen}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        {/*lg메뉴*/}
        <div
          className={`sm:hidden flex flex-row w-[550px] h-[90px] items-center`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='17'
            height='17'
            viewBox='0 0 15 15'
            fill='none'
          >
            <circle
              cx='7.4084'
              cy='7.35111'
              r='6.92308'
              transform='rotate(50 7.4084 7.35111)'
              fill='white'
            />
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
          <MenuExplanation
            isMenuOpen={isMenuOpen}
            selectedMenu={selectedMenu}
          />
        </div>
      </div>

      <div
        className='max-w-[90vw] lg:w-full lg:h-full lg:overflow-y-auto scrollbar-hide'
        ref={scrollRef}
      >
        <ProjectGallery {...notionProps} />
      </div>
    </div>
  )
}

export default WorksContainer
