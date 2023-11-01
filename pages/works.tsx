import * as React from 'react'

import { PageHead } from '../components/PageHead'
import { Layout } from '@/components/Layout'
import WorksContainer from 'containers/works'

export const WorksPage: React.FC = () => {
  const title = '웍스'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <WorksContainer />
      </Layout>
    </>
  )
}

export default WorksPage