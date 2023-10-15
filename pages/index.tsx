import * as React from 'react'

import { PageHead } from '../components/PageHead'
import HomeContainer from 'containers/home'

export const HomePage: React.FC = () => {
  const title = '홈'

  return (
    <>
      <PageHead title={title} />

      <HomeContainer />
    </>
  )
}

export default HomePage