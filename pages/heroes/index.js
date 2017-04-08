import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components'
import Switch from 'rc-switch'

import Layout from '../../src/components/Layout'
import Hero from '../../src/components/Hero'

const show = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0.01;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeroesWrapper = styled.div`
  margin: 0 5% 0 5%;
  animation: ${show} 0.5s ease-in-out;
`

const TitleWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > *{
    width: 50%;
  }
  @media (max-width:  980px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 20px;
    & > *{
      width: 100%;
    }
  }
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 50px;
  padding-top: 5px;
  float: left;
  display: flex;
  border-right: 5px solid black;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media (max-width:  980px) {
    border-right: none;
  }
`

const FilterItem = styled.div`
  margin-bottom: 10px;
  & label{
    font-family: 'Source Code Pro', monospace;
  }
`

const Label = styled.label`
  width: 110px;
  display: inline-block;
  font-weight: 300;
  text-align: right;
`

const Divider = styled.hr`
  width: 95%;
  border-color: rgba(0,0,0,.12);
`
const Message = styled.h1`
  padding: 35px;
  text-align: center;
  font-size: 50px;
  font-weight: 300;
  color: #9239ff;
`

const data = [
  {
    name: 'Bruna Anđelić',
    picture: '/static/img/bruna.jpeg',
    role: 'Team leader',
    specialities: 'Design + Frontend',
    description: 'Atypical fourth year student of Software Engineering at FER Zagreb that primary loves art and likes to play with it through all of her project. Some of her first contacts with web development was last year on Combis hackathon and she would love to give this competition a new try to show her improvement. She was a part of App Start Contest Competition where she gain some experience in public speaking and fell in love more with web design and web development.',
    contact: {
      fb: 'https://www.facebook.com/bruna.andjelic',
      github: 'https://github.com/bAndelic',
      mail: 'bruna.andelic@fer.hr',
    },
  }, {
    name: 'Frane Polić',
    picture: '/static/img/frane.jpeg',
    role: 'Developer',
    specialities: 'Frontend + Backend',
    description: 'Third year student at FER, Zagreb. Has 2 years experience in web and mobile development. Really passionate about technology, programming and web. Favourite technologies are: React, RN, Node.js and Go.',
    contact: {
      fb: 'https://www.facebook.com/frane.polic.1',
      github: 'https://github.com/fPolic',
      mail: 'frane.polic@fer.hr',
    },
  }, {
    name: 'Mihael Marović',
    picture: '/static/img/mihael.jpeg',
    role: 'Developer',
    specialities: 'Backend + Algorithms',
    description: 'Studies Computer Science (4h year) at FER. Has experience in various projects (including web-sites, android apps and games). Wants to write fast and efficient apps. Check his recent projects at GitHub.',
    contact: {
      fb: 'https://www.facebook.com/mihael.marovic',
      in: 'https://www.linkedin.com/in/mihael-marovi%C4%87-27021a125/',
      github: 'https://github.com/mihaelM',
      mail: 'mihael.marovic@fer.hr',
    },
  }, {
    name: 'Matija Šekrst',
    picture: '/static/img/matija.jpeg',
    role: 'Developer',
    specialities: 'Frontend + Backend',
    description: `Currently tackling fourth year of Software Engineering at FER Zagreb. 
    Passionate about web development. Enjoys writing fast and scalable Node APIs with 
    a bit of React twist. Currently working as software intern in SofaScore.
    Check his recent projects at GitHub.`,
    contact: {
      fb: 'https://www.facebook.com/matija.sekrst',
      in: 'https://www.linkedin.com/in/matija-sekrst/',
      github: 'https://github.com/MSekrst',
      mail: 'matija.sekrst@fer.hr',
    },
  }]

const filterData = (filter) => {
  let filtered = [...data];

  data.forEach(item => {
    let del = true;

    filter.forEach(fil => {
      if (item.specialities.includes(fil)) {
        del = false;
      }
    })

    if (del) {
      filtered = filtered.filter(i => i !== item)
    }
  })

  return filtered;
}


export default class Heroes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { filter: ['Design', 'Frontend', 'Backend', 'Algorithms'] };

    this.renderHeroes = this.renderHeroes.bind(this);
    this.filterChange = this.filterChange.bind(this);
  }

  renderHeroes = () => {
    const ret = []
    let cnt = 0

    const filtered = filterData(this.state.filter);

    if (!filtered.length) {
      return <Message>No Heroes selected :(</Message>
    }

    filtered.forEach((h, i) => {
      ret.push(
        <Hero
          key={cnt++}
          name={h.name}
          picture={h.picture}
          role={h.role}
          specialities={h.specialities}
          description={h.description}
          contact={h.contact}
          right={i % 2 !== 0}
        />,
        <Divider key={cnt++} />,
      )
    })
    ret.pop()
    return ret
  }

  filterChange = (value, field) => {
    let filter = [... this.state.filter]

    if (value) {
      filter.push(field)
    } else {
      filter = filter.filter(i => i !== field)
    }

    this.setState({ ...this.state, filter })
  }

  render() {
    return <Layout title="Heroes">
      <HeroesWrapper>
        <TitleWrapper>
          <Title>Our Heroes</Title>
          <FilterWrapper>
            <FilterItem>
              <Label>Design:</Label>
              <Switch
                className="switch-color"
                defaultChecked
                onChange={(e) => { this.filterChange(e, 'Design') }} />
            </FilterItem>
            <FilterItem>
              <Label>Frontend:</Label>
              <Switch
                className="switch-color"
                defaultChecked
                onChange={(e) => { this.filterChange(e, 'Frontend') }} />
            </FilterItem>
            <FilterItem>
              <Label>Backend:</Label>
              <Switch
                className="switch-color"
                defaultChecked
                onChange={(e) => { this.filterChange(e, 'Backend') }} />
            </FilterItem>
            <FilterItem>
              <Label>Algorithms: </Label>
              <Switch
                className="switch-color"
                defaultChecked
                onChange={(e) => { this.filterChange(e, 'Algorithms') }} />
            </FilterItem>
          </FilterWrapper>
        </TitleWrapper>
        <hr />
        {this.renderHeroes()}
      </HeroesWrapper>
    </Layout>
  }
}
