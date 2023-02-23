import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom';
import './index.css'


//Link Webpage for Router
import Board from './scenes/board';
import Project from './scenes/project';
import Team from './scenes/team';
import Client from './scenes/client';
import Message from './scenes/message';
import Calendar from './scenes/calendar';

//Global components
import Sidebar from './scenes/global/Sidebar';
import { Topbar } from './scenes/global/Topbar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path='/' element={<Board/>}/>
              <Route path='/project' element={<Project/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/client' element={<Client/>}/>
              <Route path='/message' element={<Message/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
            </Routes>
          </main>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
