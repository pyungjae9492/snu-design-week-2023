import * as React from 'react'

import { PageHead } from '@/components/PageHead'
import { Layout } from '@/components/Layout'
import WorksContainer from 'containers/works'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { domain } from '@/lib/config'

const ALL_PAGE_ID = "ALL-e096d4b7f90c4aadb73d6185af9ae27b"
const BRAND_PAGE_ID = "BRAND-b362b3b9690c4505a58b6a9956ded982"
const UXUI_PAGE_ID = "UX-UI-40fb400aa6b74f4e9569fb9ced44263a"
const MEDIA_PAGE_ID = "MEDIA-bf189adfa2304ee68e7989d7d3c4a04d"
const GRAPHIC_PAGE_ID = "GRAPHIC-748acfe067004df1b34935e5c8ad3083"
const PRODUCT_INTERACTION_PAGE_ID = "PRODUCT-INTERACTION-f559a0019ab143fcbbf9104aa4f7b856"
const LIVING_PAGE_ID = "LIVING-805cb782d2a64865bab1dd0f2da44de6"
const MOBILITY_PAGE_ID = "MOBILITY-24cc3bbcb1b34fcbae589f821b09cc3e"
const SPACE_PAGE_ID = "SPACE-4a58162b0a6e46d2a9195636c113d9d3"

export const getStaticProps = async () => {
  try {
    // const propsALL = await resolveNotionPage(domain, ALL_PAGE_ID)
    // const propsBRAND = await resolveNotionPage(domain, BRAND_PAGE_ID)
    // const propsUXUI = await resolveNotionPage(domain, UXUI_PAGE_ID)
    // const propsMEDIA = await resolveNotionPage(domain, MEDIA_PAGE_ID)
    // const propsGRAPHIC = await resolveNotionPage(domain, GRAPHIC_PAGE_ID)
    // const propsPRODUCT_INTERACTION = await resolveNotionPage(domain, PRODUCT_INTERACTION_PAGE_ID)
    // const propsLIVING = await resolveNotionPage(domain, LIVING_PAGE_ID)
    // const propsMOBILITY = await resolveNotionPage(domain, MOBILITY_PAGE_ID)
    // const propsSPACE = await resolveNotionPage(domain, SPACE_PAGE_ID)

    const props = {
      // "ALL": propsALL,
      // "BRAND": propsBRAND,
      // "UX/UI": propsUXUI,
      // "MEDIA": propsMEDIA,
      // "GRAPHIC": propsGRAPHIC,
      // "PRODUCT INTERACTION": propsPRODUCT_INTERACTION,
      // "LIVING": propsLIVING,
      // "MOBILITY": propsMOBILITY,
      // "SPACE": propsSPACE,
    }

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export const WorksPage: React.FC = (props) => {
  const title = '웍스'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <WorksContainer {...props} />
      </Layout>
    </>
  )
}

export default WorksPage