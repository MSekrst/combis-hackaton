import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import SidebarItem from './SidebarItem'

const SidebarLeft = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const LogoWrapper = styled.div`
  height: 20%;
  border-bottom: 1px solid black;
  padding: 10px;
`

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
`

const renderItems = (handler, items) => {
  const ret = []
  let index = 0

  items.forEach((item) => {
    ret.push(<SidebarItem handler={handler} name={item.name} url={item.url} color={item.color} key={index++} />)
  })

  return ret
}

const Sidebar = ({ handler, items }) => (
  <SidebarLeft>
    <LogoWrapper>
      <Link prefetch href="/"><a href="/"><Logo src="/static/img/logo.png"/></a></Link>
    </LogoWrapper>
    { renderItems(handler, items) }
  </SidebarLeft>
)

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired,
}

export default Sidebar

