import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import Layout from '../src/components/Layout'
import { Button } from '../src/modules/Heroes/Styled'

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
  background-image: url('/static/img/background.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  
  .titles{
    width: 500px;
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

const Cover = styled(FullCover) `
  z-index: 0;
  background: linear-gradient(351deg, rgba(252, 180, 96, 0.75) 20%, rgba(255, 154, 251, 0.75) 50%, rgba(146, 57, 255, 0.75) 90%);
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

export default () =>
  <Layout showHeader={false} title="Tigrovi">
    <HomeWrapper>
      <Cover />
      <div className="titles">
        <h1>Tigrovi</h1>
        <p>
          Four people are coming to make <span style={{ color: '#fffb00', fontWeight: 'bold' }}>history</span>.<br /> We are ready to solve any task that
          comes upon us. Our web applications are blazing fast and use the hottest web technology
          available. We utilize React with Node to make isomorphic web apps of 21st century.
          Heard for service workers, progressive web apps, styled-components, flow... for us it
          doesn&apos;t matter, we&apos;ve tried it all.
        </p>
        <Action>
          <Link prefetch href="/heroes">
            <Button style={{ fontWeight: 'bold' }}>
              Heroes
            <span>&nbsp; -&gt;</span>
            </Button>
          </Link>
        </Action>
      </div>
    </HomeWrapper>
  </Layout>
