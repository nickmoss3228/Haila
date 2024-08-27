import './App.css'
import Cons from './pages/Cons.tsx'
import Vowels from './pages/Vowels.tsx'
import Home from './pages/Home'
import Navbar from './components/Navbar.tsx'
import Tenses from './pages/Tenses.tsx'
import Irregulars from './pages/Irregulars.tsx'
import Phrasals from './pages/Phrasals.tsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {AppContextProvider} from "./context/context.tsx"
import Repetition from './components/Repetition.tsx'
import Alphabet from './pages/Alphabet.tsx'
import List from './pages/List.tsx'
import Levels from './pages/Levels.tsx'
import Beginner from './pages/Aspects.tsx'
import Aspects from './pages/Aspects.tsx'
import Units from './pages/Units.tsx'

function App() {
  return (
    <>
    <AppContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/List" element={<List/>} />
          <Route path="/List/alphabet" element={<Alphabet/>} /> 
          <Route path="/List/levels" element={<Levels/>} />
          <Route path="/List/vowels" element={<Vowels/>} />
          <Route path="/List/cons" element={<Cons/>} />
          <Route path="/List/tenses" element={<Tenses/>}/>
          <Route path="/List/irregulars" element={<Irregulars/>}/>
          <Route path="/List/phrasals" element={<Phrasals/>}/>
          <Route path="/List/repetition" element={<Repetition/>}/>
          <Route path="/List/levels/aspects" element={<Aspects/>}/>
        </Routes>
      </Router>
    </AppContextProvider>
    </>
  )
}
export default App