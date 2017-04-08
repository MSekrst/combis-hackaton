import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const FullCover = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  z-index: 0;
  background: linear-gradient(351deg, rgba(120, 96, 252, 0.75) 20%, rgba(255, 154, 251, 0.75) 50%, rgba(255, 231, 57, 0.75) 90%);
`

export const Button = styled.a`
  background: black;
  color: white;
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 20px;
  text-transform: uppercase;
  font-family: 'Source Code Pro', monospace;
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.5);
`

const showTitle = keyframes`
  from {
    transform: translateY(50px);
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
  background-image: url('/static/img/pozadina2.jpg');
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
    & p{
      font-family: 'Source Code Pro', monospace;
      animation: ${showP} 0.3s ease-in-out;
      text-align: justify;
      margin-bottom: 30px;
    }
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

const Subtitle = styled.h2`
  text-align: center;
  font-style: italic;
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
  width: 80px;
  height: 80px;
  padding: 20px;
  border-radius: 20px;
  opacity: 0.8;
  & p{
    opacity: 0.01;
    color: black;
    font-weight: bold;
  }
  &:hover {
    opacity: 1;
    & p{
      opacity: 1;
    }
  }
  & i{
    font-size: 60px;
  }
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
  @media (max-width: 780px) {
    font-size: 8vh;
  }
`

export default () =>
  <HomeWrapper>
    <FullCover />
    <div className="titles">
      <Subtitle> Anything you need, all the time. </Subtitle>
      <Title> Hotel <span style={{ color: '#505BAD' }}>Assistant</span></Title>
      <br />
      <Action>
        <ItemsWrapper>
          <Row>
            <Link
              prefetch
              href="/items#Pending"
            >
              <a href="/items#Pending">
                <Icon>
                  <i className="material-icons">cached</i>
                  <p>Pending</p>
                </Icon>
              </a>
            </Link>
            <Link
              prefetch
              href="/items#Completed"
            >
              <a href="/items#Completed">
                <Icon style={{ marginLeft: '20px' }}>
                  <i className="material-icons">check</i>
                  <p>Completed</p>
                </Icon>
              </a>
            </Link>
            <Link prefetch href="/items#Damages">
              <a href="/items#Complaint">
                <Icon>
                  <i className="material-icons">mood_bad</i>
                  <p>Complaint</p>
                </Icon>
              </a>
            </Link>
            <Link prefetch href="/items#Statistics">
              <a href="/items#Statistics">
                <Icon style={{ marginLeft: '20px' }}>
                  <i className="material-icons">equalizer</i>
                  <p>Statistics</p>
                </Icon>
              </a>
            </Link>
          </Row>
        </ItemsWrapper>
      </Action>
    </div>
  </HomeWrapper>
