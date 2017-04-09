import React, { PureComponent } from 'react'
import styled from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { store } from '../../src/store'

import Sidebar from '../../src/components/Sidebar'
import Pending from '../../src/modules/Items/components/Pending'
import Stats from '../../src/modules/Items/components/Statistics'
import Complaint from '../../src/modules/Items/components/Complaint'
import Completed from '../../src/modules/Items/components/Completed'

import { getItems, removePending } from '../../src/modules/Items/actions'

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

class Items extends PureComponent {

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    return (
      <div>
        <Sidebar />
        <ContentWrapper>
          <Pending removePending={(id) => this.props.removePending(id)} items={this.props.items.filter(d => d.status === 'Pending')} />
          <Completed items={this.props.items.filter(d => d.status !== 'Pending')} />
          <Complaint />
          <Stats />
        </ContentWrapper>
      </div>)
  }
}

export default withRedux(
  () => store,
  state => ({ items: state.items }),
  dispatch => ({
    getItems: bindActionCreators(getItems, dispatch),
    removePending: bindActionCreators(removePending, dispatch),
  }),
)(Items)
