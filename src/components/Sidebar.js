import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const SidebarLeft = styled.div`
  top: 0;
  left: 0;
  width: 145px;
  height: 100%;
  display: flex;
  position: fixed;
  border-right: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 0 5px -1px rgba(0,0,0,.3);
  background-color: whitesmoke;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const LogoWrapper = styled.div`
  height: 20%;
  border-bottom: 1px solid #d9d9d9;
  padding: 20px;
`

const Logo = styled.img`
  max-height: 100%;
  max-width: 90%;
  margin: 0 auto;
`

const Item = styled.a`
  cursor: pointer;
  height: 20%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  &:hover {
    background-color: rgba(211,211,211,0.5);
  }
`

const Text = styled.span`
  font-weight: 300;
`

const Sidebar = () => (
  <SidebarLeft>
    <LogoWrapper>
      <Link prefetch href="/"><a href="/"><Logo src="/static/img/logoNew.png" /></a></Link>
    </LogoWrapper>
    <Item href="#Pending" >
      <i className="material-icons">cached</i>
      <br />
      <Text>Pending</Text>
    </Item>
    <Item href="#Completet">
      <i style={{ width: 25 }} className="material-icons">checked</i>
      <br />
      <Text>Completet</Text>
    </Item>
    <Item href="#Complaint">
      <i className="material-icons">mood_bad</i>
      <br />
      <Text>Complaint</Text>
    </Item>
    <Item href="#Statistics">
      <i className="material-icons">equalizer</i>
      <br />
      <Text>Stats</Text>
    </Item>
  </SidebarLeft >
)

Sidebar.propTypes = {
  handler: PropTypes.func.isRequired,
}

export default Sidebar

