import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Acuaticos from './components/acuaticos.jsx'
import Terrestres from './components/terrestres.jsx'
import Preguntas from './components/preguntas.jsx'
import ConsultasUser from './components/consultasUser.jsx'
import Eventos from './components/eventos.jsx'
import Funcionarios from './components/funcionarios.jsx'
import Formulario from './components/formulario.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/preguntas',
    element:<Preguntas/>
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
  },
  {
    path:'/formulario',
    element:<Formulario/>
  },
  {
    path:'/consultasUser',
    element:<ConsultasUser/>
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
