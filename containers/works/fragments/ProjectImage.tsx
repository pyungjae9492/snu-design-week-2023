import Image from 'next/image'
import projectcover from 'public/projectcover.png'

export const ProjectImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <Image
        src={projectcover}
        className='aspect-video'
        width={global.innerWidth * 0.3}
      />
    </div>
  )
}
