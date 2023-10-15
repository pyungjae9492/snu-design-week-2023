import * as React from 'react'

import { PageHead } from '../components/PageHead'

export const AboutPage: React.FC = () => {
  const title = '어바웃'

  return (
    <>
      <PageHead title={title} />

      <div>
        <h1>어바웃</h1>
      </div>
    </>
  )
}

export default AboutPage