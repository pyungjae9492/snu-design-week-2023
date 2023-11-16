import * as React from 'react'

import { PageHead } from 'components/PageHead'
import { Layout } from 'components/Layout'
import PartnersContainer from 'containers/partners'

export const PartnersPage: React.FC = () => {
  const title = '파트너스'

  return (
    <>
      <PageHead title={title} />

      <Layout>
        <PartnersContainer />
      </Layout>
    </>
  )
}

export default PartnersPage