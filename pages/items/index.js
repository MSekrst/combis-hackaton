import styled  from 'styled-components'

import Sidebar from '../../src/components/Sidebar'

const ContentWrapper = styled.div`
  margin-left: 200px;
`

export default () => (
  <div>
    <Sidebar items={[{ url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }, { url: '/static/img/icon.png', name: 'Pending', color: '#123456' }]} />
    <ContentWrapper>
      CONTENT
    </ContentWrapper>
  </div>
)
