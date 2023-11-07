import Image from 'next/image'

import projectcover2 from 'public/projectcover2.png'
import projectcover from 'public/projectcover.png'

import { StudentInfo } from './fragments/StudentInfo'
import { WorkExplanation } from './fragments/WorkExplanation'

export const PersonalWorkContainer = () => {
  return (
    <div className='w-full h-screen flex-col'>
      {/*작품 설명*/}
      <div className='bg-blue-900 w-full h-1/3 lg:h-screen flex justify-start items-end'>
        <div className='lg:w-[35%] ml-6 mb-6 lg:ml-16 lg:mb-16'>
          <WorkExplanation />
        </div>
      </div>
      {/*작품 상세*/}
      <div className=' w-[90%] mx-auto mt-6 lg:mt-16 lg:w-[60%]'>
        <Image src={projectcover} layout='responsive' />
      </div>

      <div className='flex flex-wrap gap-3 justify-center mt-6 lg:mt-16'>
        <div className='flex justify-center lg:w-[30%]'>
          <div className='text-justify text-sm leading-7 w-[90%]'>
            서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의
            길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다.
            우리는 이 찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로
            명명하고 이를 깊이 들여다보고자 합니다. 당차게 서로의 이야기를
            나누고 응원해줄 충돌의 순간은 짧지만 가장 진실하고 뜨거울 것입니다.
            이 한 번의 뜨거운 충돌이 한 사람 한 사람에게 새로운 추진력으로
            작용하길 바라며, ‘The Great Bump’를 관측해 전달합니다.
          </div>
        </div>
        <div className='flex justify-center lg:w-[30%]'>
          <div className='text-justify text-sm leading-7 w-[90%]'>
            서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의
            길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다.
            우리는 이 찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로
            명명하고 이를 깊이 들여다보고자 합니다. 당차게 서로의 이야기를
            나누고 응원해줄 충돌의 순간은 짧지만 가장 진실하고 뜨거울 것입니다.
            이 한 번의 뜨거운 충돌이 한 사람 한 사람에게 새로운 추진력으로
            작용하길 바라며, ‘The Great Bump’를 관측해 전달합니다.
          </div>
        </div>
      </div>

      <div className='w-[90%] lg:w-[70%] flex flex-row justify-between mx-auto mt-10 lg:mt-16 gap-3 lg:gap-16'>
        <div className='w-[50%]'>
          <Image src={projectcover2} layout='responsive' />
        </div>
        <div className='w-[50%]'>
          <Image src={projectcover2} layout='responsive' />
        </div>
      </div>

      <div className='flex flex-wrap gap-3 justify-center mt-6 lg:mt-16'>
        <div className='flex justify-center lg:w-[30%]'>
          <div className='text-justify text-sm leading-7 w-[90%]'>
            서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의
            길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다.
            우리는 이 찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로
          </div>
        </div>
        <div className='flex justify-center lg:w-[30%]'>
          <div className='text-justify text-sm leading-7 w-[90%]'>
            서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의
            길로 나아가기 전 SNU DESIGN WEEK에서 마지막으로
          </div>
        </div>
      </div>

      <div className='w-[90%] mx-auto mt-10 lg:mt-16 lg:w-[60%]'>
        <Image src={projectcover} layout='responsive' />
      </div>

      <div className='w-[90%] mx-auto mt-10 lg:mt-16 lg:w-[50%] text-center text-sm leading-7'>
        서로 다른 목적을 향해 나아가던 우리는 한 단계 도약해 다시 각자의 길로
        나아가기 전 SNU DESIGN WEEK에서 마지막으로 다함께 마주칩니다. 우리는 이
        찰나의 대단한 마주침을 ‘The Great Bump’라는 충돌 사건으로 명명하고 이를
        깊이 들여다보고자 합니다. 당차게 서로의 이야기를 나누고 응원해줄 충돌의
        순간은 짧지만 가장 진실하고 뜨거울 것입니다. 이 한 번의 뜨거운 충돌이 한
        사람 한 사람에게 새로운 추진력으로 작용하길 바라며, ‘The Great Bump’를
        관측해 전달합니다.
      </div>

      <div className='w-[90%] mx-auto mt-10 lg:mt-72 border border-white'></div>

      <div className='flex w-[90%] lg:w-[80%] mx-auto mt-6 lg:mt-24'>
        <StudentInfo />
      </div>

      <div className='w-[90%] lg:w-[85%] mx-auto mt-10 lg:mt-12'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col lg:flex-row-reverse lg:items-center gap-2 lg:gap-7'>
            <p>Previous</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='52'
              height='11'
              viewBox='0 0 52 11'
              fill='none'
            >
              <path
                d='M7.1042 0.57008C4.59995 -0.625493 1.62777 0.493843 0.465648 3.07019C-0.696471 5.64653 0.391545 8.70428 2.8958 9.89985C5.40005 11.0954 8.37223 9.97609 9.53435 7.39974C10.6965 4.8234 9.60846 1.76565 7.1042 0.57008Z'
                fill='white'
              />
              <path
                d='M52 4.84312L4 5.8125L4.01184 3.8125L52 4.84312Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='flex flex-col items-end lg:flex-row lg:items-center gap-2 lg:gap-7'>
            <p>Next</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='52'
              height='11'
              viewBox='0 0 52 11'
              fill='none'
            >
              <path
                d='M42.513 0.57008C45.0172 -0.625493 47.9894 0.493843 49.1515 3.07019C50.3137 5.64653 49.2256 8.70428 46.7214 9.89985C44.2171 11.0954 41.245 9.97609 40.0828 7.39974C38.9207 4.8234 40.0087 1.76565 42.513 0.57008Z'
                fill='white'
              />
              <path
                d='M-4.37892e-08 5.03062L48 6L47.9882 4L-4.37892e-08 5.03062Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
