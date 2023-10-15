import * as React from 'react'

import { PageHead } from '../components/PageHead'

export const ProgramPage: React.FC = () => {
  const title = '프로그램'

  return (
    <>
      <PageHead title={title} />

      <div>
        <h1>프로그램</h1>
      </div>
    </>
  )
}

export default ProgramPage