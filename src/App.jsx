import { useState} from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css'

//Link Webpage for Router
import Board from './scenes/board';
import Project from './scenes/project';

import Team from './scenes/team';
import SingleTeam from './scenes/team/SingleTeam';
import NewTeam from './scenes/team/NewTeam';

import Client from './scenes/client';
import SingleClient from './scenes/client/SingleClient';
import NewClient from './scenes/client/NewClient';

import Message from './scenes/message';
import Calendar from './scenes/calendar';

//Global components
import Login from './scenes/login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [theme, colorMode] = useMode();
  const [user] = useAuthState(auth);

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {user ? 
          <Routes>
            <Route path='/' element={<Board/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/team'>
              <Route index element={<Team/>}/>
              <Route path=':teamId' element={<SingleTeam/>}/>
              <Route path='newTeam' element={<NewTeam/>}/>
            </Route>
            <Route path='/client' >
              <Route index element={<Client/>}/>
              <Route path=':clientId' element={<SingleClient/>}/>
              <Route path='newClient' element={<NewClient/>}/>
            </Route>
            <Route path='/message' element={<Message/>}/>
            <Route path='/calendar' element={ <Calendar/>}/>
          </Routes>
          : <Navigate to="/login"/>
          }
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
