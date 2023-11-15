import * as React from 'react'

import { PageHead } from '../components/PageHead'
import HomeContainer from 'containers/home'
import { Layout } from '@/components/Layout'

export const HomePage: React.FC = () => {
  const title = '홈'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <HomeContainer />
      </Layout>
    </>
  )
}

export default HomePage