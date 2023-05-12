import Main from './pages/Main'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import WeatherContainer from './components/WeatherList'
import WeatherSection from './components/WeatherSection'
import Error from './components/Error'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Main/>} />
            <Route path="day" element={<WeatherContainer />}>
              <Route path=":area" element={<WeatherSection />}/>
            </Route>
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
