import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { HomeMovies } from './pages/HomeMovies'
import { CreateMovies } from './pages/CreateMovies'
import { MovieId } from './pages/MovieId'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<HomeMovies/>}/>
        <Route path='/create' element={<CreateMovies/>}/>
        <Route path='/movie/:id' element={<MovieId/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
