import './App.css';
import { NavBar } from './Componentes/NavBar';
import { Home } from './Componentes/Home';
import React from 'react';
import {CartProvider} from "./Componentes/Context";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Piezas } from './Componentes/Combos/Piezas';
import { ItemDetail } from './Componentes/ItemDetail';
import { Form } from './Componentes/Form';
import { PokeSalads } from './Componentes/PokeSalads';
import { Footer } from './Componentes/Footer';
import { Carrito } from './Componentes/Carrito';
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet"></link>

function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/piezas' element={<Piezas/>}></Route>
        <Route path='/detalle' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/formulario' element={<Form/>}></Route>
        <Route path='/poke-salads' element={<PokeSalads/>}></Route>
      </Routes>
    <Footer></Footer>
    <Carrito></Carrito>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
