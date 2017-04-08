import React, { PureComponent } from 'react'
import styled  from 'styled-components'

import Sidebar from '../../src/components/Sidebar'

const ContentWrapper = styled.div`
  margin-left: 200px;
`

export default class Items extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { active: 'Pending' }

    this.sidebarChange = this.sidebarChange.bind(this)
  }

  sidebarChange(e) {
    console.log('novi state', e)
  }

  render() {
    return <div>
      <Sidebar handler={this.sidebarChange} items={[{ url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }]} />
      <ContentWrapper>
        CONTENT
      </ContentWrapper>
    </div>
  }
}


