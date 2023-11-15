import Image from 'next/image'
import React, { useState } from 'react'

import ellipse from 'public/ellipse.png'

import styles from './menubar.module.css'

{
  /*props: isMenuOpen, setIsMenuOpen, selectedMenu, setSelectedMenu*/
}
export default function MenuBar(props) {
  const [selectedMenu, setSelectedMenu] = useState(props.selectedMenu)
  const [onlyShown, setOnlyShown] = useState('')

  const circleMenu = (menu: string) => (
    <div className={`flex flex-row w-[550px] h-[90px] items-center gap-10`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 15 15" fill="none">
        <circle cx="7.4084" cy="7.35111" r="6.92308" transform="rotate(50 7.4084 7.35111)" fill="white"/>
      </svg>
      <div
        onClick={() => onSelectMenu(menu)}
        className='flex text-5xl cursor-pointer'
      >
        {menu}
      </div>
    </div>
  )

  const afterOpenMenu = (menu: string) => (
    <div className={`flex flex-row w-[550px] h-[90px] items-center gap-10`}>
      <Image src={ellipse} width='17px' height='17px' layout='fixed' />
      <div
        onClick={() => reselectMenu(menu)}
        className='flex text-5xl cursor-pointer'
      >
        {menu}
      </div>
    </div>
  )

  const onSelectMenu = (menu: string) => {
    props.setIsMenuOpen(!props.isMenuOpen)
    setSelectedMenu(menu)
  }

  const reselectMenu = (menu: string) => {
    props.setIsMenuOpen(!props.isMenuOpen)
    setOnlyShown(menu)
    console.log('only shown menu: ', onlyShown)
  }

  return (
    <div className='w-[500px] max-h-[300px] border border-white'>
      {props.isMenuOpen ? (
        <div className='absolute top-[10%] -left-[450px]'>
          <div className={onlyShown === 'ALL' ? styles.ALLSHOWN : styles.ALL}>
            {circleMenu('ALL')}
          </div>
          <div
            className={onlyShown === 'BRAND' ? styles.BRANDSHOWN : styles.BRAND}
          >
            {circleMenu('BRAND')}
          </div>
          <div
            className={onlyShown === 'UX/UI' ? styles.UXUISHOWN : styles.UXUI}
          >
            {circleMenu('UX/UI')}
          </div>
          <div
            className={onlyShown === 'MEDIA' ? styles.MEDIASHOWN : styles.MEDIA}
          >
            {circleMenu('MEDIA')}
          </div>
          <div
            className={
              onlyShown === 'GRAPHIC' ? styles.GRAPHICSHOWN : styles.GRAPHIC
            }
          >
            {circleMenu('GRAPHIC')}
          </div>
          <div
            className={
              onlyShown === 'PRODUCT INTERACTION'
                ? styles.PRODUCTSHOWN
                : styles.PRODUCT
            }
          >
            {circleMenu('PRODUCT INTERACTION')}
          </div>
          <div
            className={
              onlyShown === 'LIVING' ? styles.LIVINGSHOWN : styles.LIVING
            }
          >
            {circleMenu('LIVING')}
          </div>
          <div
            className={
              onlyShown === 'MOBILITY' ? styles.MOBILITYSHOWN : styles.MOBILITY
            }
          >
            {circleMenu('MOBILITY')}
          </div>
          <div
            className={onlyShown === 'SPACE' ? styles.SPACESHOWN : styles.SPACE}
          >
            {circleMenu('SPACE')}
          </div>
        </div>
      ) : (
        <div className='absolute top-[10%] -left-[450px]'>
          <div className={selectedMenu === 'ALL' ? styles.ALLS : styles.ALLR}>
            {afterOpenMenu('ALL')}
          </div>
          <div
            className={selectedMenu === 'BRAND' ? styles.BRANDS : styles.BRANDR}
          >
            {afterOpenMenu('BRAND')}
          </div>
          <div
            className={selectedMenu === 'UX/UI' ? styles.UXUIS : styles.UXUIR}
          >
            {afterOpenMenu('UX/UI')}
          </div>
          <div
            className={selectedMenu === 'MEDIA' ? styles.MEDIAS : styles.MEDIAR}
          >
            {afterOpenMenu('MEDIA')}
          </div>
          <div
            className={
              selectedMenu === 'GRAPHIC' ? styles.GRAPHICS : styles.GRAPHICR
            }
          >
            {afterOpenMenu('GRAPHIC')}
          </div>
          <div
            className={
              selectedMenu === 'PRODUCT INTERACTION'
                ? styles.PRODUCTS
                : styles.PRODUCTR
            }
          >
            {afterOpenMenu('PRODUCT INTERACTION')}
          </div>
          <div
            className={
              selectedMenu === 'LIVING' ? styles.LIVINGS : styles.LIVINGR
            }
          >
            {afterOpenMenu('LIVING')}
          </div>
          <div
            className={
              selectedMenu === 'MOBILITY' ? styles.MOBILITYS : styles.MOBILITYR
            }
          >
            {afterOpenMenu('MOBILITY')}
          </div>
          <div
            className={selectedMenu === 'SPACE' ? styles.SPACES : styles.SPACER}
          >
            {afterOpenMenu('SPACE')}
          </div>
        </div>
      )}
    </div>
  )
}
