import React, { PureComponent } from 'react'
import { VictoryBar, VictoryChart, VictoryTooltip } from 'victory';
import { Wrapper } from './Styled'

export default class Statistics extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <Wrapper id="Statistics">
        {data ?
          <div
            style={{
              padding: '10px 30px',
              boxShadow: '0px 0px 3px 0px rgba(0,0,0,.3)',
              background: 'white',
            }}
          >
            <h2>Najtraženije iz ponude</h2>
            <VictoryChart>
              <VictoryBar
                data={data}
                labels={data.map(d => d.counter)}
                labelComponent={<VictoryTooltip />}
                y="counter"
              />
            </VictoryChart>

          </div>
          :
          "Loading..."
        }
      </Wrapper>
    )
  }
}
