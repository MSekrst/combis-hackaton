import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Sidebar from '../../src/components/Sidebar'
import List from '../../src/modules/Items/components/Items'

const FullCover = styled.div`
  top: 0;
  left: 200px;
  position: absolute;
  height: 100vh;
  width: calc(100vw - 200px);
  max-width: 100%;
`

const ContentWrapper = styled(FullCover) `

`

export default class Items extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { active: 'Pending' }

    this.sidebarChange = this.sidebarChange.bind(this)
  }

  componentDidMount() {
    let active = 'Pending';

    if (typeof window !== undefined) {
      const hash = window.location.hash || '#Pending'
      active = hash.substr(1, hash.length - 1)
    }

    this.setState({ ...this.state, active });
  }

  sidebarChange(active) {
    this.setState({ ...this.state, active })
  }

  render() {
    return (
      <div>
        <Sidebar
          handler={this.sidebarChange}
        />
        <ContentWrapper>
          {this.state.active === 'Statistics' ? <div>Stats</div> : <List />}
        </ContentWrapper>
      </div>)
  }
}


