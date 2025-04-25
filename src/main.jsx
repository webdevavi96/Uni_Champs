import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Sidebar, Home, Footer } from './components/index.js';
import Routes from './Routes.jsx';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromChildren(<Route path='/' element={<Routes />}>
    <Route path='' element={<Home />} />
  </Route>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
