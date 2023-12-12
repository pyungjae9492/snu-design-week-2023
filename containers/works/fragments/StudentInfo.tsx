import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { get } from 'http'
import { idToUuid, uuidToId } from 'notion-utils'
import projectcover from 'public/projectcover.png'

import { api } from '@/lib/config'

export const StudentInfo = (props) => {
  const otherWorkLink = props['other-work']

  const [otherData, setOtherData] = useState(null)

  async function getInfoFromUrl(url) {
    // split / or -
    const splitedUrl = url.split(/[-/]/)
    const id = splitedUrl[splitedUrl.length - 1]

    const apiUrl = api.getNotionPageInfo

    // method : POST
    // body : {pageId : id}
    // with axios
    const res = await axios.post(apiUrl, { pageId: id })

    const data = res.data
    console.log(data)

    const { image, pageId, slug } = data
    const uuid = idToUuid(pageId)

    setOtherData({ image, uuid, slug })
  }

  useEffect(() => {
    if (otherWorkLink) {
      getInfoFromUrl(otherWorkLink)
    }
  }, [otherWorkLink])

  const router = useRouter()

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
      <div
        className='lg:w-[300px] lg:h-[180px] flex-col gap-2 relative cursor-pointer'
        onClick={() => {
          if (otherWorkLink) {
            router.push(`/works/${otherData?.slug}`)
          }
        }}
      >
        {otherWorkLink && (
          <>
            <p className='text-[#6F6F6F] text-base lg:hidden z-50 relative'>
              OTHER WORK
            </p>
            <Image
              src={otherData?.image}
              layout='responsive'
              width={300}
              height={180}
            />
            <div className='absolute top-0 right-0 p-5 text-base sm:hidden z-50'>
              OTHER WORK
            </div>
          </>
        )}
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            // gradient
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
            zIndex: 1
          }}
        />
      </div>
    </div>
  )
}
