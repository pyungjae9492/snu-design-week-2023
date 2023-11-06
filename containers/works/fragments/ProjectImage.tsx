import Image from 'next/image'
import React from 'react'

import projectcover from 'public/projectcover.png'

export const ProjectImage = () => {
  return (
    <div className='relative aspect-video'>
      <Image src={projectcover} />
    </div>
  )
}
