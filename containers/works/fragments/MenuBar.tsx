import Image from 'next/image'
import React, { useState } from 'react'

import ellipse from 'public/ellipse.png'

import styles from './menubar.module.css'

{
  /*props: isMenuOpen, setIsMenuOpen, selectedMenu, setSelectedMenu*/
}
export default function MenuBar(props) {
  const [selectedMenu, setSelectedMenu] = useState(props.selectedMenu)

  const beforeOpenMenu = (menu: string) => (
    <div className={`flex flex-row items-center gap-10`}>
      <Image src={ellipse} width='17px' height='17px' layout='fixed' />
      <div
        onClick={() => onSelectMenu(menu)}
        className='flex flex-wrap text-5xl  cursor-pointer border border-red-400'
      >
        {menu}
      </div>
    </div>
  )

  const onSelectMenu = (menu: string) => {
    props.setIsMenuOpen(!props.isMenuOpen)
    setSelectedMenu(menu)
  }

  return (
    <div className='w-[500px] max-h-[300px]'>
      {props.isMenuOpen ? (
        <div className={styles.circle}>
          <>
            <div className={styles.all}>{beforeOpenMenu('ALL')}</div>
            <div className={styles.brand}>{beforeOpenMenu('BRAND')}</div>
            <div className={styles.uxui}>{beforeOpenMenu('UX/UI')}</div>
            <div className={styles.media}>{beforeOpenMenu('MEDIA')}</div>
            <div className={styles.graphic}>{beforeOpenMenu('GRAPHIC')}</div>
            <div className={styles.product}>
              {beforeOpenMenu('PRODUCT INTERACTION')}
            </div>
            <div className={styles.living}>{beforeOpenMenu('LIVING')}</div>
            <div className={styles.mobility}>{beforeOpenMenu('MOBILITY')}</div>
            <div className={styles.space}>{beforeOpenMenu('SPACE')}</div>
          </>
        </div>
      ) : (
        <div className={styles.circle}>
          <>
            <div
              className={
                selectedMenu === 'ALL' ? styles.allselected : styles.allreverse
              }
            >
              {beforeOpenMenu('ALL')}
            </div>
            <div
              className={
                selectedMenu === 'BRAND'
                  ? styles.brandselected
                  : styles.brandreverse
              }
            >
              {beforeOpenMenu('BRAND')}
            </div>
            <div
              className={
                selectedMenu === 'UX/UI'
                  ? styles.uxuiselected
                  : styles.uxuireverse
              }
            >
              {beforeOpenMenu('UX/UI')}
            </div>
            <div
              className={
                selectedMenu === 'MEDIA'
                  ? styles.mediaselected
                  : styles.mediareverse
              }
            >
              {beforeOpenMenu('MEDIA')}
            </div>
            <div
              className={
                selectedMenu === 'GRAPHIC'
                  ? styles.graphicselected
                  : styles.graphicreverse
              }
            >
              {beforeOpenMenu('GRAPHIC')}
            </div>
            <div
              className={
                selectedMenu === 'PRODUCT INTERACTION'
                  ? styles.productselected
                  : styles.productreverse
              }
            >
              {beforeOpenMenu('PRODUCT INTERACTION')}
            </div>
            <div
              className={
                selectedMenu === 'LIVING'
                  ? styles.livingselected
                  : styles.livingreverse
              }
            >
              {beforeOpenMenu('LIVING')}
            </div>
            <div
              className={
                selectedMenu === 'MOBILITY'
                  ? styles.mobilityselected
                  : styles.mobilityreverse
              }
            >
              {beforeOpenMenu('MOBILITY')}
            </div>
            <div
              className={
                selectedMenu === 'SPACE'
                  ? styles.spaceselected
                  : styles.spacereverse
              }
            >
              {beforeOpenMenu('SPACE')}
            </div>
          </>
        </div>
      )}
    </div>
  )
}
