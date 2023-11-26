import * as React from 'react'

import { PageHead } from '../components/PageHead'
import { Layout } from '@/components/Layout'
import WorksContainer from 'containers/works'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { domain } from '@/lib/config'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

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