import Main from './pages/Main'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Error from './components/Error'
import DayList from './pages/DayList'
import DaySection from './components/DaySection'
import WeekList from './pages/WeekList'
import WeekSection from './components/WeekSection'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Main/>} />
            <Route path="day" element={<DayList />}>
              <Route path=":area" element={<DaySection />}/>
            </Route>
            <Route path="week" element={<WeekList />}>
              <Route path=":area" element={<WeekSection />}/>
            </Route>
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
