import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Wrapper } from './Styled'

const Item = styled.div`

`

export default class Completed extends PureComponent {
  render() {
    const { items } = this.props
    return (
      <Wrapper id="Pending">
        <div
          style={{
            padding: '10px 30px',
            boxShadow: '0px 0px 3px 0px rgba(0,0,0,.3)',
            background: 'white',
          }}
        >
          <h2>Completed</h2>
          {items && items.map((item, i) =>
            <Item
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: 80, marginRight: 20, height: 'auto' }} src={item.artikl.pictureUrl} alt=""
              />
              <div style={{ maxWidth: 350, minWidth: 350 }}>
                <h4 style={{ display: 'inline' }}>{item.artikl.naziv}</h4>
                <span style={{
                  borderRadius: 20,
                  background: 'black',
                  minWidth: 30,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 10,
                  float: 'right',
                  padding: '8px 10px',
                  fontWeight: 'bold',
                }}>{item.tag}</span>
                <p>{item.artikl.opis}</p>
              </div>
            </Item>
          )}
        </div>
      </Wrapper >
    )
  }
}
