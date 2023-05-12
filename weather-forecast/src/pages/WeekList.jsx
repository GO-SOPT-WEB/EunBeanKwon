
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import PageLayout from '../components/PageLayout'

const WeekList = () => {
  return (
    <PageLayout>
        <St.Container>
            <Outlet />
        </St.Container>
    </PageLayout>
  )
}

export default WeekList

const St = {
  Container : styled.section `
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 75vw;
  margin: 0 auto;
`,
}