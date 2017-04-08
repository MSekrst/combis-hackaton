import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Item = styled.div`
  height: 20%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid black;
  &:hover {
    background-color: rgba(211,211,211,0.5);
  }
`

const Icon = styled.img`
  max-height: 80%;
  max-width: 80%;
  margin: 0 auto;
`

const Text = styled.div`
  font-weight: 300;
  font-size: 15px;
`

const SidebarItem = ({ handler, url, name, color }) => (
  <Item color={color}>
    <Icon src={url} alt={name} />
    <Text>{name}</Text>
  </Item>
)

SidebarItem.propTypes = {
  handler: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}


export default SidebarItem

