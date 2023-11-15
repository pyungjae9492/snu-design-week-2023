import * as React from 'react'

import { PersonalWorkContainer } from 'containers/works/individual'

import { Layout } from '@/components/Layout'

import { PageHead } from '../components/PageHead'

export const WorksPage: React.FC = () => {
  const title = '웍스'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <PersonalWorkContainer />
      </Layout>
    </>
  )
}

export default WorksPage
