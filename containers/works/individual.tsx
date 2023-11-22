import Image from 'next/image'

import projectcover2 from 'public/projectcover2.png'
import projectcover from 'public/projectcover.png'
import otherwork1 from 'public/otherwork1.png'
import otherwork2 from 'public/otherwork2.png'

import { StudentInfo } from './fragments/StudentInfo'
import { WorkExplanation } from './fragments/WorkExplanation'

export const PersonalWorkContainer = () => {
  return (
    <>
      <div className='w-full h-[250px] lg:h-screen bg-blue-600 relative'>
        <div className='absolute lg:w-[35%] left-6 bottom-6 lg:left-[110px] lg:bottom-[100px]'>
          <WorkExplanation />
        </div>
      </div>

      <div className='flex flex-col w-[90%] lg:w-[70%] mx-auto pt-6 lg:pt-[100px] gap-10 lg:gap-16'>
        <Image src={projectcover} layout='responsive' className='lg:w-[80%]' />
        <div className='flex flex-wrap lg:justify-between lg:w-[80%] gap-3 lg:gap-12 mx-auto '>
          <div className='lg:w-[45%] text-sm text-justify leading-7'>
            콜렉티브 커피는 국내 커피 농가의 원두를 브랜드화하고 이를 다시 전국으로 전하는 국산 스페셜티 커피 브랜드입니다. 국내 각지의 커피 장인들의 손에서 탄생한 한국 커피 원두를 콜렉티브 커피만의 원칙과 기준으로 수집하여 정성스레 선보입니다. 모두가 커피의 아름다움을 오래 즐길 수 있도록, 한국 커피의 지속가능성을 고민하고 실천하는 공동체를 만들어갑니다. 콜렉티브 커피가 수집한 한국 커피의 아름다움을 즐겨보세요.
          </div>
          <div className='lg:w-[45%] text-sm text-justify leading-7'>
            Collective Koffee is a Korean Specialty Coffee Brand that brands coffee beans from local coffee farms and delivers them to the whole country. We collect coffee beans from the hands of local coffee craftsmen and present them carefully based on our delicate principles and standards. To make everyone enjoy the beauty of coffee for a long time, we create a community that considers and practices the sustainability of Korean coffee.
          </div>
        </div>

        <div className='flex flex-row w-full lg:w-[85%] gap-[10px] lg:gap-14 justify-between mx-auto'>
          <div className='w-[50%]'>
            <Image src={projectcover2} layout='responsive' />
          </div>
          <div className='w-[50%]'>
            <Image src={projectcover2} layout='responsive' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-between lg:w-[80%] gap-3 lg:gap-12 mx-auto'>
          <div className='lg:w-[45%] text-sm text-justify leading-7'>
            콜렉티브 커피는 국내 커피 농가의 원두를 브랜드화하고 이를 다시 전국으로 전하는 국산 스페셜티 커피 브랜드입니다. 국내 각지의 커피 장인들의 손에서 탄생한 한국 커피 원두를 콜렉티브 커피만의 원칙과 기준으로 수집하여 정성스레 선보입니다. 모두가 커피의 아름다움을 오래 즐길 수 있도록, 한국 커피의 지속가능성을 고민하고 실천하는 공동체를 만들어갑니다. 콜렉티브 커피가 수집한 한국 커피의 아름다움을 즐겨보세요.
          </div>
          <div className='lg:w-[45%] text-sm text-justify leading-7'>
            Collective Koffee is a Korean Specialty Coffee Brand that brands coffee beans from local coffee farms and delivers them to the whole country. We collect coffee beans from the hands of local coffee craftsmen and present them carefully based on our delicate principles and standards. To make everyone enjoy the beauty of coffee for a long time, we create a community that considers and practices the sustainability of Korean coffee.
          </div>
        </div>

        <Image src={projectcover} layout='responsive' className='lg:w-[80%]' />

        <div className='lg:w-[80%] text-justify lg:text-center text-sm leading-7 mx-auto'>
          서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의 길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다. 우리는 이 찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로 명명하고 이를 깊이 들여다보고자 합니다. 당차게 서로의 이야기를 나누고 응원해줄 충돌의 순간은 짧지만 가장 진실하고 뜨거울 것입니다. 이 한 번의 뜨거운 충돌이 한 사람 한 사람에게 새로운 추진력으로 작용하길 바라며, ‘The Great Bump’를 관측해 전달합니다.
        </div>
      </div>


      <div className='lg:hidden pt-10 pb-6'>
          <svg xmlns="http://www.w3.org/2000/svg" width="294" height="2" viewBox="0 0 294 2" fill="none" className='mx-auto'>
            <path d="M0 1H294" stroke="url(#paint0_linear_780_20366)" stroke-width="2"/>
            <defs>
              <linearGradient id="paint0_linear_780_20366" x1="1.31839" y1="1.50011" x2="300.592" y2="1.49947" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0.546875"/>
                <stop offset="0.5" stop-color="white"/>
                <stop offset="1" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
      </div>
      <div className='sm:hidden py-[100px]'>
          <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 1400 2" fill="none" className='w-[90%] mx-auto'>
            <path d="M0 1H1400" stroke="white" stroke-width="0.853058"/>
          </svg>
      </div>

      <div className='w-[90%] lg:w-[75%] mx-auto'>
        <StudentInfo />
      </div>

      <div className='sm:hidden py-[100px]'>
          <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 1400 2" fill="none" className='w-[90%] mx-auto'>
            <path d="M0 1H1400" stroke="white" stroke-width="0.853058"/>
          </svg>
      </div>

      <div className='sm:hidden max-w-[75%] mx-auto'>
        <p className='text-sm leading-7'>MORE WORKS IN...</p>
        <p className='text-5xl font-normal pt-4 pb-[50px]'>Brand Design Project</p>
        {brandDesign()}
      </div>


      <div className='sm:hidden pt-[100px]'>
          <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 1400 2" fill="none" className='w-[90%] mx-auto'>
            <path d="M0 1H1400" stroke="white" stroke-width="0.853058"/>
          </svg>
      </div>

      <div className='flex flex-row justify-between mx-auto w-[90%] lg:w-[75%] mt-10 lg:mt-[50px] mb-[130px] lg:mb-[180px]'>
        <div className='flex flex-col lg:flex-row-reverse lg:items-center gap-2 lg:gap-7'>
          <p className='text-base lg:text-2xl'>Previous</p>
          <svg xmlns='http://www.w3.org/2000/svg' width='52' height='11' viewBox='0 0 52 11' fill='none'>
            <path d='M7.1042 0.57008C4.59995 -0.625493 1.62777 0.493843 0.465648 3.07019C-0.696471 5.64653 0.391545 8.70428 2.8958 9.89985C5.40005 11.0954 8.37223 9.97609 9.53435 7.39974C10.6965 4.8234 9.60846 1.76565 7.1042 0.57008Z' fill='white'/>
            <path d='M52 4.84312L4 5.8125L4.01184 3.8125L52 4.84312Z' fill='white'/>
          </svg>
        </div>
        <div className='flex flex-col items-end lg:flex-row lg:items-center gap-2 lg:gap-7'>
          <p className='text-base lg:text-2xl'>Next</p>
          <svg xmlns='http://www.w3.org/2000/svg' width='52' height='11' viewBox='0 0 52 11' fill='none'>
            <path d='M42.513 0.57008C45.0172 -0.625493 47.9894 0.493843 49.1515 3.07019C50.3137 5.64653 49.2256 8.70428 46.7214 9.89985C44.2171 11.0954 41.245 9.97609 40.0828 7.39974C38.9207 4.8234 40.0087 1.76565 42.513 0.57008Z' fill='white'/>
            <path d='M-4.37892e-08 5.03062L48 6L47.9882 4L-4.37892e-08 5.03062Z' fill='white'/>
          </svg>
        </div>
      </div>
    </>
  )
}

const brandDesign = () => {
  return (
    <div className='sm:hidden flex flex-col w-full h-[445px] overflow-x-scroll'>
      <div className='flex flex-row w-[2200px] h-[50%] gap-[100px]'>
        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center relative'>
          <Image src={otherwork2} className='abosolute'/>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <Image src={otherwork1} className='abosolute'/>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <Image src={otherwork2} className='abosolute'/>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>
      </div>

      <div className= 'flex flex-row w-[2200px] h-[50%] gap-[100px]'>
        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <Image src={otherwork1} className='abosolute'/>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <Image src={otherwork2} className='abosolute'/>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <Image src={otherwork1} className='abosolute'/>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="white"/>
          </svg>
        </div>

        <div className='flex w-[220px] h-[220px] items-center justify-center'>
          <Image src={otherwork2} className='abosolute'/>
        </div>
      </div>
    </div>
  )
}