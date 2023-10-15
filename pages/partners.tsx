import * as React from 'react'

import { PageHead } from '../components/PageHead'

export const PartnersPage: React.FC = () => {
  const title = '파트너스'

  return (
    <>
      <PageHead title={title} />

      <div>
        <h1>파트너스</h1>
      </div>
    </>
  )
}

export default PartnersPage