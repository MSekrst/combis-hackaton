// @flow

import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import Switch from 'rc-switch'

import { store as initStore } from '../../src/store'
import { getHeroes } from '../../src/modules/Heroes/actions'
import Layout from '../../src/components/Layout'
import Hero from '../../src/modules/Heroes/components/Hero'
import {
  Message,
  Title,
  Divider,
  Label,
  FilterItem,
  HeroesWrapper,
  TitleWrapper,
  FilterWrapper,
} from '../../src/modules/Heroes/Styled'

const filterData = (filter, data) => {
  let filtered = [...data]

  data.forEach((item) => {
    let del = true

    filter.forEach((fil) => {
      if (item.specialities.includes(fil)) {
        del = false
      }
    })

    if (del) {
      filtered = filtered.filter(i => i !== item)
    }
  })

  return filtered
}

class Heroes extends PureComponent {

  static getInitialProps({ isServer }) {
    return { isServer }
  }

  state = {
    filter: ['Design', 'Frontend', 'Backend', 'Algorithms'],
  }

  componentDidMount() {
    this.props.getHeroes()
  }

  filterChange(value, field) {
    let filter = [...this.state.filter]

    if (value) {
      filter.push(field)
    } else {
      filter = filter.filter(i => i !== field)
    }

    this.setState({ ...this.state, filter })
  }

  renderHeroes() {
    const ret = []
    let cnt = 0

    const filtered = filterData(this.state.filter, this.props.data)

    if (!filtered.length && !(this.props.data && this.props.data.length)) {
      return <Message> Loading ... </Message>
    }

    if (!filtered.length && this.props.data && this.props.data.length) {
      return <Message>No Heroes selected :(</Message>
    }

    filtered.forEach((h, i) => {
      ret.push(
        <Hero
          key={cnt++}
          name={h.name}
          picture={h.picture}
          role={h.role}
          specialities={h.specialities}
          description={h.description}
          contact={h.contact}
          right={i % 2 !== 0}
        />,
        <Divider key={cnt++} />,
      )
    })
    ret.pop()
    return ret
  }

  render() {
    return (
      <Layout title="Heroes">
        <HeroesWrapper>
          <TitleWrapper>
            <Title>Oure Heroes</Title>
            <FilterWrapper>
              <FilterItem>
                <Label>Design:</Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Design') }}
                />
              </FilterItem>
              <FilterItem>
                <Label>Frontend:</Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Frontend') }}
                />
              </FilterItem>
              <FilterItem>
                <Label>Backend:</Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Backend') }}
                />
              </FilterItem>
              <FilterItem>
                <Label>Algorithms: </Label>
                <Switch
                  className="switch-color"
                  defaultChecked
                  onChange={(e) => { this.filterChange(e, 'Algorithms') }}
                />
              </FilterItem>
            </FilterWrapper>
          </TitleWrapper>
          {this.renderHeroes()}
        </HeroesWrapper>
      </Layout>
    )
  }
}

export default withRedux(
  () => initStore,
  state => ({
    data: state.heroes,
  }),
  dispatch => ({
    getHeroes: bindActionCreators(getHeroes, dispatch),
  }),
)(Heroes)
