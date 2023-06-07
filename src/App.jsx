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

function App() {
  const [theme, colorMode] = useMode();

  const currentUser = true;

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  console.log(currentUser);

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route path='/' element={<RequireAuth><Board/></RequireAuth>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/project' element={<RequireAuth><Project/></RequireAuth>}/>
            <Route path='/team'>
              <Route index element={<RequireAuth><Team/></RequireAuth>}/>
              <Route path=':teamId' element={<SingleTeam/>}/>
              <Route path='newTeam' element={<NewTeam/>}/>
            </Route>
            <Route path='/client' >
              <Route index element={<RequireAuth> <Client/> </RequireAuth>}/>
              <Route path=':clientId' element={<SingleClient/>}/>
              <Route path='newClient' element={<NewClient/>}/>
            </Route>
            <Route path='/message' element={<RequireAuth> <Message/> </RequireAuth>}/>
            <Route path='/calendar' element={<RequireAuth> <Calendar/> </RequireAuth>}/>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
