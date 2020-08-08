import React from 'react'
import './App.css'
import CrimeContainer from './Components/CrimeContainer'
import { ThemeProvider } from '@chakra-ui/core'

function App () {
  return (
    <div className='App'>
      <ThemeProvider>
        <CrimeContainer />
      </ThemeProvider>
    </div>
  )
}

export default App
