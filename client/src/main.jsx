import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LobbyScreen from './screens/LobbyScreen.jsx'
import { SocketProvider } from './context/SocketProvider.jsx'
import Room from './screens/Room.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<LobbyScreen />}/>
    <Route path='/room/:roomId' element={<Room/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <RouterProvider router={route} />
    </SocketProvider>
  </React.StrictMode>,
)
