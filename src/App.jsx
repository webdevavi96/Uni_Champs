import React from 'react'
import {  Home, Friends, ProfilePage } from './components'
import Routes from './Routes.jsx';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom'

import './App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(<Route path='/' element={<Routes />}>
      <Route path='' element={<Home />} />
      <Route path='firends' element={<Friends />} />
      <Route path='profile' element={<ProfilePage
       />} />
    </Route>)
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
