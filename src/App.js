import './App.css';
import { NavBar } from './Componentes/NavBar';
import { Home } from './Componentes/Home';
import React from 'react';
import {CartProvider} from "./Componentes/Context";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Promos } from './Componentes/Promos/Promos';
import { Piezas } from './Componentes/Combos/Piezas';
import { ItemListPiezas } from './Componentes/ItemListPiezas';
import { ItemDetail } from './Componentes/ItemDetail';
import { Form } from './Componentes/Form';
import { PokeSalads } from './Componentes/PokeSalads';
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet"></link>

function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Promos' element={<Promos/>}></Route>
        <Route path='/piezas' element={<Piezas/>}></Route>
        <Route path='/detalle' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/formulario' element={<Form/>}></Route>
        <Route path='/poke-salads' element={<PokeSalads/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
