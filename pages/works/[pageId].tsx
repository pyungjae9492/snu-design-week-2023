import * as React from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BRAND_PAGE_LENGTH = 20
const UXUI_PAGE_LENGTH = 9
const GRAPHIC_PAGE_LENGTH = 18
const MEDIA_PAGE_LENGTH = 7
const PRODUCT_INTERACTION_PAGE_LENGTH = 8
const LIVING_PAGE_LENGTH = 3
const MOBILITY_PAGE_LENGTH = 6
const SPACE_PAGE_LENGTH = 5

const pageLengths = {
  "brand": BRAND_PAGE_LENGTH,
  "uiux": UXUI_PAGE_LENGTH,
  "graphic": GRAPHIC_PAGE_LENGTH,
  "media": MEDIA_PAGE_LENGTH,
  "product-interaction": PRODUCT_INTERACTION_PAGE_LENGTH,
  "living": LIVING_PAGE_LENGTH,
  "mobility": MOBILITY_PAGE_LENGTH,
  "space": SPACE_PAGE_LENGTH,
}

import { StudentInfo } from 'containers/works/fragments/StudentInfo'
import { WorkExplanation } from 'containers/works/fragments/WorkExplanation'
import { getPageProperty, parsePageId } from 'notion-utils'
import otherwork1 from 'public/otherwork1.png'
import otherwork2 from 'public/otherwork2.png'

import * as config from '@/lib/config'
import { Layout } from '@/components/Layout'
import { Loading } from '@/components/Loading'
import { NotionPage } from '@/components/NotionPage'
import { domain, isDev } from '@/lib/config'
import { getSiteMap } from '@/lib/get-site-map'
import { mapImageUrl } from '@/lib/map-image-url'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { PageBlock, PageProps, Params } from '@/lib/types'

const DATABASE_ID = '5d3b9be4bc694747af03443a296b6dd2'

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawPageId = context.params.pageId as string

  try {
    const props = await resolveNotionPage(domain, rawPageId)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  const siteMap = await getSiteMap()

  const staticPaths = {
    paths: Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
      params: {
        pageId
      }
    })),
    // paths: [],
    fallback: true
  }

  console.log(staticPaths.paths)
  return staticPaths
}

export default function NotionDomainDynamicPage(props) {
  const pageId = parsePageId(props.pageId)
  const recordMap = props.recordMap!
  const router = useRouter()
  if (!props.recordMap) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  const collection = recordMap.collection

  // get a item from collection that item.value.parent_id is equal to the dbId
  const pageData = Object.values(collection).find((item: any) => {
    // if item has value and value has parent_id
    if (item && item.value && item.value.parent_id) {
      // if item.value.parent_id without - is equal to dbId
      if (item.value.parent_id.replace(/-/g, '') === DATABASE_ID) {
        return item
      }
    }
  })

  // @ts-ignore
  const schema = pageData?.value.schema || {};
  // convert schema to array w/ name
  const schemaArray = Object.values(schema).map((item) => {
    // @ts-ignore
    return item.name
  })

  const pageBlock = recordMap.block[pageId].value
  // get blocks without pageBlock
  const blocks = Object.values(recordMap.block).filter(
    // @ts-ignore
    (block) => block.value?.id !== pageId
  )
  // console.log("BLOCKs", blocks);
  // get types of blocks
  // @ts-ignore
  const blockTypes = blocks.map((block) => block.value?.type)
  // print blockTypes
  // console.log("BLOCK TYPES", blockTypes);

  // get page properties object from pageBlock with schemaArray
  const pageProperties: { [x: string]: string | undefined } = {}
  schemaArray.map((item) => {
    pageProperties[item] = getPageProperty<string>(item, pageBlock, recordMap)
  })

  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  const socialImage = mapImageUrl(
    getPageProperty<string>('Social Image', block, recordMap) ||
      (block as PageBlock).format?.page_cover ||
      config.defaultPageCover,
    block
  )

  const slug = router.query.pageId as string
  const course = slug.split('-')[0]
  const pageLength = slug.split('-')[1]

  const prevPage = Number(pageLength) > 1 ? `${course}-${Number(pageLength) - 1}` : null
  const nextPage = Number(pageLength) < pageLengths[course] ? `${course}-${Number(pageLength) + 1}` : null

  return (
    <Layout>
      <div
        className='w-full aspect-[1/0.8] sm:max-h-[500px] lg:h-screen bg-blue-600 relative'
        style={{
          backgroundImage: `url(${socialImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 57%)`,
            width: '100%',
            height: '100%'
          }}
        />
        <div className='absolute lg:w-[35%] left-6 bottom-6 lg:left-[110px] lg:bottom-[100px]'>
          <WorkExplanation {...pageProperties} />
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-[90vw] max-w-[90vw] lg:w-full lg:max-w-[1000px] pt-6 lg:pt-[100px] gap-16'>
          <NotionPage {...props} />
        </div>
      </div>

        <div className='w-full flex justify-center'>
          <div className='max-w-[1600px] w-full'>
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
              <StudentInfo {...pageProperties} />
            </div>
            <div className='sm:hidden pt-[100px]'>
                <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 1400 2" fill="none" className='w-[90%] mx-auto'>
                  <path d="M0 1H1400" stroke="white" stroke-width="0.853058"/>
                </svg>
            </div>
            <div className='flex flex-row justify-between mx-auto w-[90%] lg:w-[75%] mt-10 lg:mt-[50px] mb-[130px] lg:mb-[180px]'>
              {prevPage && (
                <div 
                  className='flex flex-col lg:flex-row-reverse lg:items-center gap-2 lg:gap-7 cursor-pointer'
                  onClick={() => {
                    router.push(`/works/${prevPage}`)
                  }}
                >
                  <p className='text-base lg:text-2xl'>Previous</p>
                  <svg xmlns='http://www.w3.org/2000/svg' width='52' height='11' viewBox='0 0 52 11' fill='none'>
                    <path d='M7.1042 0.57008C4.59995 -0.625493 1.62777 0.493843 0.465648 3.07019C-0.696471 5.64653 0.391545 8.70428 2.8958 9.89985C5.40005 11.0954 8.37223 9.97609 9.53435 7.39974C10.6965 4.8234 9.60846 1.76565 7.1042 0.57008Z' fill='white'/>
                    <path d='M52 4.84312L4 5.8125L4.01184 3.8125L52 4.84312Z' fill='white'/>
                  </svg>
                </div>
              )}
              {nextPage && (
                <div 
                  className='flex flex-col items-end lg:flex-row lg:items-center gap-2 lg:gap-7 cursor-pointer'
                  onClick={() => {
                    router.push(`/works/${nextPage}`)
                  }}
                >
                  <p className='text-base lg:text-2xl'>Next</p>
                  <svg xmlns='http://www.w3.org/2000/svg' width='52' height='11' viewBox='0 0 52 11' fill='none'>
                    <path d='M42.513 0.57008C45.0172 -0.625493 47.9894 0.493843 49.1515 3.07019C50.3137 5.64653 49.2256 8.70428 46.7214 9.89985C44.2171 11.0954 41.245 9.97609 40.0828 7.39974C38.9207 4.8234 40.0087 1.76565 42.513 0.57008Z' fill='white'/>
                    <path d='M-4.37892e-08 5.03062L48 6L47.9882 4L-4.37892e-08 5.03062Z' fill='white'/>
                  </svg>
                </div>
              )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
