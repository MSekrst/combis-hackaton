// @flow
import React, { PureComponent } from 'react'
import {
  ContactsWrapper,
  HeroWrapper,
  InfoWrapper,
  PictureWrapper,
  Picture,
  Specialities,
  Imgs,
  Contact,
  Name,
  Role,
} from '../Styled'

type ContactProp = {
  fb: string,
  in?: string,
  github: string,
  mail: string
}

type Props = {
  name: string,
  picture: string,
  role: string,
  specialities?: string,
  description: string,
  contact?: ContactProp,
  right: boolean,
}

type DefaultProps = {
  contact: ContactProp
}

class Hero extends PureComponent<DefaultProps, Props, void> {

  static defaultProps = { contact: { in: '', fb: '', mail: '', github: '' } };

  render() {
    const {
      name,
      picture,
      role,
      specialities,
      description,
      contact,
      right,
    } = this.props
    return (
      <HeroWrapper right={right}>
        <Imgs right={right}>
          <ContactsWrapper>
            <a href={contact.fb}>
              <Contact src="/static/img/fb.png" alt="facebook" />
            </a>
            {
              contact.in &&
              <a href={contact.in}>
                <Contact src="/static/img/linkedin.png" alt="linkedin" />
              </a>
            }
            <a href={contact.github}>
              <Contact src="/static/img/github.png" alt="github" />
            </a>
            <a href={`mailto:${contact.mail}`}>
              <Contact src="/static/img/mail.png" alt="mail" />
            </a>
          </ContactsWrapper>
          <PictureWrapper>
            <Picture src={picture} />
          </PictureWrapper>
        </Imgs>
        <InfoWrapper right={right}>
          <Name>{name}</Name><br />
          <Role>{role}</Role>
          <Specialities>{specialities}</Specialities>
          <p>{description}</p>
        </InfoWrapper>
      </HeroWrapper>
    )
  }
}

export default Hero
