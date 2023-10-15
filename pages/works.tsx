import * as React from 'react'

import { PageHead } from '../components/PageHead'

export const WorksPage: React.FC = () => {
  const title = '웍스'

  return (
    <>
      <PageHead title={title} />

      <div>
        <h1>웍스</h1>
      </div>
    </>
  )
}

export default WorksPage