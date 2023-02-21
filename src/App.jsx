import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import './index.css'
import { Topbar } from './scenes/global/Topbar';
import { Dashboard } from '@mui/icons-material';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
          <main className="content">
            <Topbar/>
            <Routes>
              
            </Routes>
          </main>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
