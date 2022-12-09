import { useState } from 'react'
import { HashRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokeDetails from './components/PokeDetails'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<InputName/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedex/:id' element={<PokeDetails/>} />

          </Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
