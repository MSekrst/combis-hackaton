import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Sidebar from '../../src/components/Sidebar'
import Pending from '../../src/modules/Items/components/Pending'
import Stats from '../../src/modules/Items/components/Statistics'
import Complaint from '../../src/modules/Items/components/Complaint'
import Completed from '../../src/modules/Items/components/Completed'

const FullCover = styled.div`
  top: 0;
  left: 180px;
  position: absolute;
  height: 100vh;
  width: calc(100vw - 200px);
  max-width: 100%;
`

const ContentWrapper = styled(FullCover) `

`

export default class Items extends PureComponent {
  render() {
    return (
      <div>
        <Sidebar />
        <ContentWrapper>
          <Pending />
          <Completed />
          <Complaint />
          <Stats />
        </ContentWrapper>
      </div>)
  }
}

