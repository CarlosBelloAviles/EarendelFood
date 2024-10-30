import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navegacion from './components/Navegacion';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './Views/Main';
import Footer from './components/Footer';
import { useState } from 'react';




function App() {
  const [categoriaSeleccionada , setCategoriaSeleccionada] = useState('Desayuno')

  return (
   
    <div className='Container'>
    <Navegacion/>
    <Header/>
    <Aside  onSelectCategoria={setCategoriaSeleccionada}/>
    <Main categoria={categoriaSeleccionada}/>
    <Footer/>
    </div>
     
   
  )
}

export default App
