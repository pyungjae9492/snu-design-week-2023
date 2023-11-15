import Image from 'next/image'

import projectcover from 'public/projectcover.png'

export const StudentInfo = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full gap-6 lg:gap-[130px]'>
      <div className='flex flex-col lg:flex-grow lg:justify-center'>
        <p className='text-2xl lg:text-5xl font-medium lg:font-normal mb-6 lg:mb-11'>
          홍길동
        </p>
        <div className='flex flex-row gap-x-16 lg:gap-44'>
          <div className='flex flex-col gap-2'>
            <p className='text-[#6F6F6F] text-base'>EMAIL</p>
            <p className='text-sm font-medium'>hongildong@gmail.com</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[#6F6F6F] text-base'>INSTAGRAM</p>
            <p className='text-sm font-medium'>@hongildong</p>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col lg:flex-grow lg:my-auto gap-2'>
        <p className='text-[#6F6F6F] text-base lg:hidden'>OTHER WORK</p>
        <div className='h-full'>
          <Image src={projectcover} layout='responsive' />
<<<<<<< HEAD
          <div className='absolute top-0 right-0 p-5 text-white hidden lg:block'>
=======
          <div className='absolute top-0 right-0 p-5 text-white sm:hidden'>
>>>>>>> 4b81155 (feat: individual work page without 'more works in...' part in lg)
            OTHER WORK
          </div>
        </div>
      </div>
    </div>
  )
}
