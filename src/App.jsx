import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from  './pages/home'
import { Route, Routes } from 'react-router-dom'
import Favorite from './pages/favorite'


function App() {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element= {<Favorite />} />
      </Routes>
    </main>
  );
}

export default App;
