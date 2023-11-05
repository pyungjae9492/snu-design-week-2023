import Image from 'next/image'
import React, { useState } from 'react'

import ellipse from 'public/ellipse.png'

export const MenuBar = () => {
  const menuItems = [
    'ALL',
    'BRAND',
    'UX/UI',
    'MEDIA',
    'GRAPHIC',
    'PRODUCT INTERACTION',
    'LIVING',
    'MOBILITY',
    'SPACE'
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='flex flex-col w-1/2 gap-[50px]'>
      {isMenuOpen &&
        menuItems.map((item, index) => (
          <div
            key={index}
            className='flex flex-row'
            style={{ transform: `rotate(${isMenuOpen ? index * 7 : 0}deg)` }}
          >
            <Image src={ellipse} width='18px' height='18px' />
            <div className='text-white text-3xl'>{item}</div>
          </div>
        ))}
    </div>
  )
}
