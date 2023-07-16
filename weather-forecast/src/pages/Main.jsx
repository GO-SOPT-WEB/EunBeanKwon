import { styled } from 'styled-components'
import PageLayout from '../components/PageLayout'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
        <PageLayout>
            <Outlet />
        </PageLayout>
  )
}

export default Main;