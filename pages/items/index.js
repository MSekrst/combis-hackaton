import React, { PureComponent } from 'react'
import styled  from 'styled-components'

import Sidebar from '../../src/components/Sidebar'
import List from '../../src/components/List'

const FullCover = styled.div`
  top: 0;
  left: 200px;
  position: absolute;
  height: 100vh;
  width: calc(100vw - 200px);
  max-width: 100%;
`

const ContentWrapper = styled(FullCover) `
  background-image: url('/static/img/geo-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
`

export default class Items extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { active: 'Pending' }

    this.sidebarChange = this.sidebarChange.bind(this)
  }

  componentDidMount() {
    let active = 'Pending';

    // console.log('window is undefined', typeof window);

    if (typeof window !== undefined) {
      const hash = window.location.hash || '#Pending'
      active = hash.substr(1, hash.length - 1)

      console.log('', active);
    }
  }

  sidebarChange(active) {
    this.setState({ ...this.state, active })
  }

  render() {
    return <div>
      <Sidebar handler={this.sidebarChange} items={[{ url: '/static/img/pending.png', name: 'Pending' }, { url: '/static/img/checkmark.png', name: 'Completed' }, { url: '/static/img/complaint.png', name: 'Complaint' }, { url: '/static/img/statistics.png', name: 'Statistics' }]} />
      <ContentWrapper>
        { this.state.active === 'Statistics' ? <div>Stats</div> : <List /> }
      </ContentWrapper>
    </div>
  }
}


