import { useState, useEffect } from 'react'
import { AuthContext } from "./contexts.js"
import styled from 'styled-components'
import Menu from './components/Menu'
import Home from './components/Home'
import Spot from './components/Spot'
import Search from './components/Search'
import { HashRouter as Router, Routes, Route } from "react-router-dom"

const MainContainer =  styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  const [location, setLocation] = useState('')
  const [keyword, setKeyword] = useState('')
  const [type, setType] = useState('ScenicSpot')
  return (
    <AuthContext.Provider value={{ location, setLocation, keyword, setKeyword, type, setType }}>
      <MainContainer>
        <Router>
          <Menu/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/spot/:type/:id' element={<Spot/>}/>
          </Routes>
        </Router>
      </MainContainer>
    </AuthContext.Provider>
  );
}

export default App;
