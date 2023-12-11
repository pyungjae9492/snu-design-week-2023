import { getAllPagesInSpace, uuidToId } from 'notion-utils'
import pMemoize from 'p-memoize'

import * as config from './config'
import * as types from './types'
import { includeNotionIdInUrls } from './config'
import { getCanonicalPageId } from './get-canonical-page-id'
import { notion } from './notion-api'

const uuid = !!includeNotionIdInUrls

export async function getSiteMap(): Promise<types.SiteMap> {
  const partialSiteMap = await getAllPages(
    config.rootNotionPageId,
    config.rootNotionSpaceId || ""
  )

  return {
    site: config.site,
    ...partialSiteMap
  } as types.SiteMap
}

const getAllPages = pMemoize(getAllPagesImpl, {
  cacheKey: (...args) => JSON.stringify(args)
})

async function getAllPagesImpl(
  rootNotionPageId: string,
  rootNotionSpaceId: string
): Promise<Partial<types.SiteMap>> {
  const getPage = async (pageId: string, ...args: any[]) => {
    return notion.getPage(pageId, ...args)
  }

  const pageMap = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    getPage
  )

  const canonicalPageMap = Object.keys(pageMap).reduce(
    (map, pageId: string) => {
      const recordMap = pageMap[pageId]
      if (!recordMap) {
        console.log(`Error loading page "${pageId}"`)
        return map
      }

      let canonicalPageId = getCanonicalPageId(pageId, recordMap, {
        uuid
      })
      // @ts-ignore
      if (map[canonicalPageId]) {
        // you can have multiple pages in different collections that have the same id
        // TODO: we may want to error if neither entry is a collection page
        console.warn('error duplicate canonical page id', {
          canonicalPageId,
          pageId,
          // @ts-ignore
          existingPageId: map[canonicalPageId]
        })

  
        return {
          ...map,
          // @ts-ignore
          [canonicalPageId+pageId]: pageId
        }
      } 
      
        return {
          ...map,
          // @ts-ignore
          [canonicalPageId]: pageId
        }
      
    },
    {}
  )

  return {
    pageMap,
    canonicalPageMap
  }
}
