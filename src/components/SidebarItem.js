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
  max-height: 75%;
  max-width: 75%;
  margin: 0 auto;
`

const Text = styled.span`
  font-weight: 300;
`

const SidebarItem = ({ handler, url, name }) => (
  <Item onClick={() => { handler(name) }}>
    <Icon src={url} alt={name} />
    <br />
    <Text>{name}</Text>
  </Item>
)

SidebarItem.propTypes = {
  handler: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


export default SidebarItem

