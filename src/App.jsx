import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

  

function App() {
  const tituloApp = 'Tienda de Ceramica y Mosaiquismo'
  return (
    <>
      <NavBar/>
      <Titulo Titulo = {tituloApp}  /> 
      <ItemListContainer greeting ='Bienvenidos a la Tienda' />  
    </>
  )
}

export default App
