import React, { PropTypes } from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  padding: 60px 30px;
  transition: 0.5s all;
  display: flex;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  justify-content: space-around;
  @media (max-width:  980px) {
    flex-direction: column;
    padding: 0;
  }
`

const ContactsWrapper = styled.div`
  width: 80px;
  height: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width:  980px) {
    width: auto;
    height: auto;
    display: block;
  }
`

const Contact = styled.img`
  height: 20px;
  margin: 10px;
  cursor: pointer;
`

const Picture = styled.img`
  width: 200px;
  height: 200px;
  transform: rotate(-45deg);
  transition: 0.3s all;
`
const PictureWrapper = styled.div`
  margin: 20px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  transform: rotate(45deg);
  transition: 0.3s all;
  &:hover{
    transform: rotate(60deg);
    border-radius: 50%;
    & img{
      transform: rotate(-60deg);
    }
  }
`

const InfoWrapper = styled.div`
  max-width: 600px;
  float: ${props => !props.right ? 'right' : 'left'};
  text-align: ${props => props.right ? 'left' : 'right'};
  font-family: 'Source Code Pro', monospace;
  & p{
    text-align: justify;
  }
  @media (max-width:  980px) {
    max-width: 100%;
    float: none;
  }
`

const Name = styled.h1`
  margin: 0;
  padding: 10px 0 5px;
  font-size: 70px;
  font-family: 'Open-sans', sans-serif;
  font-weight: 700;
  @media (max-width:  980px) {
    font-size: 2.5em;
  }
`

const Specialities = styled.h3`
  margin: 0;
  margin-top: -10px;
  padding: 5px 0 5px 0;
  font-weight: 200;
`

const Role = styled.h3`
  margin: 0;
  padding: 5px 0 5px 0;
  color: rgba(146, 57, 255, 0.75);
`

const Imgs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
  @media (max-width:  980px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`

const Hero = ({ name, picture, role, specialities, description, contact, right }) => (
  <HeroWrapper right={right}>
    <Imgs right={right}>
      <ContactsWrapper>
        {contact.fb && <a href={contact.fb}><Contact src="/static/img/fb.png" alt="facebook" /></a>}
        {contact.in && <a href={contact.in}>
          <Contact src="/static/img/linkedin.png" alt="linkedin" /></a>}
        {contact.github && <a href={contact.github}>
          <Contact src="/static/img/github.png" alt="github" /></a>}
        {contact.mail && <a href={`mailto:${contact.mail}`}>
          <Contact src="/static/img/mail.png" alt="mail" /></a>}
      </ContactsWrapper>
      <PictureWrapper>
        <Picture src={picture} />
      </PictureWrapper>
    </Imgs>
    <InfoWrapper right={right}>
      <Name>{name}</Name><br />
      <Role>{role}</Role>
      <Specialities>{specialities}</Specialities>
      <p>
        {description}
      </p>
    </InfoWrapper>
  </HeroWrapper>
)

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  role: PropTypes.string,
  specialities: PropTypes.string,
  description: PropTypes.string,
  contact: PropTypes.object,
  right: PropTypes.bool,
}

Hero.defaultProps = {
  name: 'Ivo Ivić',
  picture: 'url to the picture',
  role: 'Team leader',
  specialities: 'Backend',
  description: 'Lorem ipsum dolor sit amet...',
  contact: {
    fb: 'facebook url',
    in: 'linked in url',
    github: 'sithub url',
    mail: 'someone@somewhere.com',
  },
  right: false,
}

export default Hero

