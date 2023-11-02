import React, { useState } from 'react'
import { MenuExplanation } from './fragments/MenuExplanation'
import { ProjectImage } from './fragments/ProjectImage'
import Image from 'next/image';
import ellipse from 'public/ellipse.png'

export const WorksContainer = () => {
  return (
    <div className='w-full h-max'>
      <div className='flex flex-row items-center fixed left-10 gap-10 '>
        <Image src={ellipse} className='width={4.5} height={4.5}'/>
        <div className='text-5xl'>
          GRAPHIC
        </div>
      </div>
        <MenuExplanation />
      <div 
        className='flex flex-wrap absolute right-10 gap-5 overflow-y-hidden overscroll-none' 
        style={{ width: `${global.innerWidth * 0.6 + 30}px` }}>
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
  )
}

export default WorksContainer