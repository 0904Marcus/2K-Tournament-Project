import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import "./styleSheets/Variables.css"
import Home from './pages/Home'
import Team from './pages/Team'
import TournamentTreePage from './pages/TournamentTree.tsx'
import "./styleSheets/TournamentTree.css"
function App() {

  return (
    <>
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Team />}/>
        <Route path='/tournamentTree' element={<TournamentTreePage />}/>
      </Routes>
    </div>

    </>
  )
}

export default App
