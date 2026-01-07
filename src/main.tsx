import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './Auth/Login.tsx'
import Logout from './Auth/Logout.tsx'
import Register from './Auth/Register.tsx'

const route = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
    {
    path:'/login',
    element:<Login/>,
  },
    {
    path:'/logout',
    element:<Logout/>,
  },
    {
    path:'/register',
    element:<Register/>,
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
