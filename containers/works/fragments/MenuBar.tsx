import React, { useEffect, useState } from 'react'

import styles from './menubar.module.css'

{
  /*props: isMenuOpen, setIsMenuOpen, focusedMenu, setSelectedMenu*/
}
export default function MenuBar(props) {
  const { isMenuOpen, setIsMenuOpen, selectedMenu, setSelectedMenu } = props

  const [focusedMenu, setFocusedMenu] = useState(props.selectedMenu)
  const [onlyShown, setOnlyShown] = useState('')

  useEffect(() => {
    setIsMenuOpen(true)
  }, [])

  const CircleMenu = (props: { menu: string; isFocused: boolean }) => (
    <div
      className={`flex flex-row w-fit h-[90px] items-center gap-10 transition-opacity ${
        !props.isFocused && 'opacity-30'
      }`}
      onPointerEnter={() => setFocusedMenu(props.menu)}
      onPointerLeave={() => setFocusedMenu(selectedMenu)}
    >
      <svg
        className='shrink-0'
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
      <div
        onClick={() => onSelectMenu(props.menu)}
        className='flex text-5xl cursor-pointer'
      >
        {props.menu}
      </div>
    </div>
  )

  const AfterOpenMenu = (props: { menu: string }) => (
    <div className={`flex flex-row w-[550px] h-[90px] items-center gap-10`}>
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
      <div
        onClick={() => reselectMenu(props.menu)}
        className='flex text-5xl cursor-pointer'
      >
        {props.menu}
      </div>
    </div>
  )

  const onSelectMenu = (menu: string) => {
    if (menu === 'ALL') {
      setIsMenuOpen(isMenuOpen)
      setSelectedMenu('ALL')
      setOnlyShown('ALL')
      return
    }
    setIsMenuOpen(!isMenuOpen)
    setSelectedMenu(menu)
  }

  const reselectMenu = (menu: string) => {
    setIsMenuOpen(!isMenuOpen)
    setOnlyShown(menu)
  }

  useEffect(() => {
    setFocusedMenu(selectedMenu)
    setOnlyShown(selectedMenu)
  }, [selectedMenu])

  const isAllShown = onlyShown === 'ALL'

  return (
    <>
      {isMenuOpen ? (
        <div className='absolute top-0 -left-[500px] z-50'>
          <div className={isAllShown ? styles.ALLS : styles.ALL}>
            <CircleMenu menu='ALL' isFocused={focusedMenu === 'ALL'} />
          </div>
          <div
            className={onlyShown === 'BRAND' ? styles.BRANDSHOWN : styles.BRAND}
          >
            <CircleMenu menu='BRAND' isFocused={focusedMenu === 'BRAND'} />
          </div>
          <div
            className={onlyShown === 'UX/UI' ? styles.UXUISHOWN : styles.UXUI}
          >
            <CircleMenu menu='UX/UI' isFocused={focusedMenu === 'UX/UI'} />
          </div>
          <div
            className={onlyShown === 'MEDIA' ? styles.MEDIASHOWN : styles.MEDIA}
          >
            <CircleMenu menu='MEDIA' isFocused={focusedMenu === 'MEDIA'} />
          </div>
          <div
            className={
              onlyShown === 'GRAPHIC' ? styles.GRAPHICSHOWN : styles.GRAPHIC
            }
          >
            <CircleMenu menu='GRAPHIC' isFocused={focusedMenu === 'GRAPHIC'} />
          </div>
          <div
            className={
              onlyShown === 'PRODUCT INTERACTION'
                ? styles.PRODUCTSHOWN
                : styles.PRODUCT
            }
          >
            <CircleMenu
              menu='PRODUCT INTERACTION'
              isFocused={focusedMenu === 'PRODUCT INTERACTION'}
            />
          </div>
          <div
            className={
              onlyShown === 'LIVING' ? styles.LIVINGSHOWN : styles.LIVING
            }
          >
            <CircleMenu menu='LIVING' isFocused={focusedMenu === 'LIVING'} />
          </div>
          <div
            className={
              onlyShown === 'MOBILITY' ? styles.MOBILITYSHOWN : styles.MOBILITY
            }
          >
            <CircleMenu
              menu='MOBILITY'
              isFocused={focusedMenu === 'MOBILITY'}
            />
          </div>
          <div
            className={onlyShown === 'SPACE' ? styles.SPACESHOWN : styles.SPACE}
          >
            <CircleMenu menu='SPACE' isFocused={focusedMenu === 'SPACE'} />
          </div>
        </div>
      ) : (
        <div className='absolute top-0 -left-[500px]'>
          <div className={focusedMenu === 'ALL' ? styles.ALLS : styles.ALLR}>
            <AfterOpenMenu menu='ALL' />
          </div>
          <div
            className={focusedMenu === 'BRAND' ? styles.BRANDS : styles.BRANDR}
          >
            <AfterOpenMenu menu='BRAND' />
          </div>
          <div
            className={focusedMenu === 'UX/UI' ? styles.UXUIS : styles.UXUIR}
          >
            <AfterOpenMenu menu='UX/UI' />
          </div>
          <div
            className={focusedMenu === 'MEDIA' ? styles.MEDIAS : styles.MEDIAR}
          >
            <AfterOpenMenu menu='MEDIA' />
          </div>
          <div
            className={
              focusedMenu === 'GRAPHIC' ? styles.GRAPHICS : styles.GRAPHICR
            }
          >
            <AfterOpenMenu menu='GRAPHIC' />
          </div>
          <div
            className={
              focusedMenu === 'PRODUCT INTERACTION'
                ? styles.PRODUCTS
                : styles.PRODUCTR
            }
          >
            <AfterOpenMenu menu='PRODUCT INTERACTION' />
          </div>
          <div
            className={
              focusedMenu === 'LIVING' ? styles.LIVINGS : styles.LIVINGR
            }
          >
            <AfterOpenMenu menu='LIVING' />
          </div>
          <div
            className={
              focusedMenu === 'MOBILITY' ? styles.MOBILITYS : styles.MOBILITYR
            }
          >
            <AfterOpenMenu menu='MOBILITY' />
          </div>
          <div
            className={focusedMenu === 'SPACE' ? styles.SPACES : styles.SPACER}
          >
            <AfterOpenMenu menu='SPACE' />
          </div>
        </div>
      )}
    </>
  )
}
