import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const FullCover = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
`

const showTitle = keyframes`
  from {
    transform: translateY(-90px);
    opacity: 0.3;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const showP = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0.3;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const showButton = keyframes`
  from {
    opacity: 0.01;
  }
  to {
    opacity: 1;
  }
`

const HomeWrapper = styled(FullCover) `
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/static/img/landing.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  
  .titles{
    max-width: 90%;
    z-index: 999999;
    & h1{
      color: white;
      font-weight: 900;
      font-size: 10vh;
      text-align: center;
      margin-bottom: 2vh;
      animation: ${showTitle} 0.5s ease-in-out;
    }
    & p{
      font-family: 'Source Code Pro', monospace;
      animation: ${showP} 0.3s ease-in-out;
      text-align: justify;
      margin-bottom: 30px;
    }
  }
`

const Action = styled.div`
  opacity: 0;
  animation: ${showButton} 0.3s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  margin-top: 20;
  text-align: center;
  & span{
    display: none;
    font-weight: bold;
  }
  & a:hover span{
    display: inline-block;
  }
`

const ItemsWrapper = styled.div`
  display: flex;
  column-align: center;
  justify-content: center;
  flex-direction: column;
`

const Row = styled.div`
  padding: 10px;
`

const Icon = styled.div`
  display: inline-block;
  background-color: purple;
  padding: 20px;
  border-radius: 20px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
`

export default () =>
    <HomeWrapper>
      <FullCover />
      <div className="titles">
        <Title>Welcome to Hotel Assistant</Title>
        <br />
        <Action>
          <ItemsWrapper>
            <Row>
              <Link prefetch href="/items#Pending"><a href="/items#Pending"><Icon>
                <img src="/static/img/pending.png" alt="Pending" width="80px" height="80px"/>
              </Icon></a></Link>
              <Link prefetch href="/items#Completed"><a href="/items#Completed"><Icon style={{ marginLeft: "20px" }}>
                <img src="/static/img/checkmark.png" alt="Completed" width="80px" height="80px"/>
              </Icon></a></Link>
            </Row>
            <Row>
              <Link prefetch href="/items#Damages"><a href="/items#Complaint"><Icon>
                <img src="/static/img/complaint.png" alt="Complaint" width="80px" height="80px"/>
              </Icon></a></Link>
                <Link prefetch href="/items#Statistics"><a href="/items#Statistics"><Icon style={{ marginLeft: "20px" }}>
                <img src="/static/img/statistics.png" alt="Completed" width="80px" height="80px"/>
                </Icon></a></Link>
            </Row>
          </ItemsWrapper>
        </Action>
      </div>
    </HomeWrapper>