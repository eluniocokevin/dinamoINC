import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Acuaticos from './components/acuaticos.jsx'
import Terrestres from './components/terrestres.jsx'
import Eventos from './components/eventos.jsx'
import Funcionarios from './components/funcionarios.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/terrestres',
    element:<Terrestres/>
  },
  {
    path:'/acuaticos',
    element:<Acuaticos/>
  },
  {
      path:'/funcionarios',
      element:<Funcionarios/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
