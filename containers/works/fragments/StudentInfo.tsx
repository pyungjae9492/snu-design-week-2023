import Image from 'next/image'

import projectcover from 'public/projectcover.png'

export const StudentInfo = (props) => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between gap-6'>
      <div className='flex flex-col gap-6 lg:gap-11'>
        <p className='text-2xl lg:text-5xl font-medium lg:font-normal'>
            {props['designer-name-ko']}
        </p>
        <div className='flex flex-row gap-[68px] lg:gap-[150px]'>
          <div className='flex flex-col gap-4'>
              <p className='text-[#6F6F6F] text-base'>EMAIL</p>
              <p className='text-sm font-medium'>{props['email']}</p>
          </div>
          <div className='flex flex-col gap-4'>
              <p className='text-[#6F6F6F] text-base'>INSTAGRAM</p>
              <p className='text-sm font-medium'>{props['instagram']}</p>
          </div>
        </div>
      </div>
      <div className='lg:w-[300px] lg:h-[180px] flex-col gap-2 lg:relative'>
        <p className='text-[#6F6F6F] text-base lg:hidden'>OTHER WORK</p>
        <Image src={projectcover} layout='responsive' />
        <div className='absolute top-0 right-0 p-5 text-base sm:hidden'>
            OTHER WORK
        </div>
      </div>
    </div>
  )
}
