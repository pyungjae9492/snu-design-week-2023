import * as React from 'react'

import { PageHead } from '../components/PageHead'
import { Layout } from '@/components/Layout'
import AboutContainer from 'containers/about'

export const AboutPage: React.FC = () => {
  const title = '어바웃'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <AboutContainer />
      </Layout>
    </>
  )
}

export default AboutPage