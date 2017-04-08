import React, { PropTypes } from 'react'
import styled from 'styled-components'

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

const renderItems = (items) => {
  const ret = []
  let index = 0

  items.forEach((item) => {
    ret.push(<SidebarItem name={item.name} url={item.url} color={item.color} key={index++} />)
  })

  return ret
}

const Sidebar = ({ items }) => (
  <SidebarLeft>
    { renderItems(items) }
  </SidebarLeft>
)

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Sidebar

