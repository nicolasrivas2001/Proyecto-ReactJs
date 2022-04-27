import './App.css';
import { NavBar } from './Componentes/NavBar';
import React from 'react';
import {CartProvider} from "./Componentes/Context";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Form } from './Componentes/Form';
import { Footer } from './Componentes/Footer';
import { Carrito } from './Componentes/Carrito';
import { ItemListConteiner } from './Componentes/ItemListConteiner';
import { ItemDetailConteinter } from './Componentes/ItemDetailConteiner';
import { Main } from './Componentes/Main';
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet"></link>

function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Main></Main>
        <Routes>
          <Route path="/" element={<ItemListConteiner/>}></Route>
          <Route path="/category/:id" element={<ItemListConteiner/>}></Route>
          <Route path="/item/:id" element={<ItemDetailConteinter/>}></Route>
          <Route path="/formulario" element={<Form/>}></Route>
        </Routes>
        <Footer></Footer>
        <Carrito></Carrito>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
