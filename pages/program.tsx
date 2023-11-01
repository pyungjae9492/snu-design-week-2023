import * as React from 'react'

import { PageHead } from '../components/PageHead'
import ProgramContainer from 'containers/program'
import { Layout } from '@/components/Layout'

export const ProgramPage: React.FC = () => {
  const title = '프로그램'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <ProgramContainer />
      </Layout>
    </>
  )
}

export default ProgramPage