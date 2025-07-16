import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber= 1
  return (
    <>
    {movieNumber === 1 ? (
    <MovieCard movie={{title: "F1", release_date: "26 june 2025"}} />
    ) : (
    <MovieCard movie={{title: "gorilla", release_date: "26 june 2025"}} />
    )}
    </>
  )
}

export default App
