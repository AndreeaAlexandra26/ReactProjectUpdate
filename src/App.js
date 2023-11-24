import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";




import { Route, Routes } from "react-router-dom";
import MainContainerAdmin from "./Admin/HomePageAdmin";
import MainContainerGuest from "./Guest/HomePageGuest"
import MainContainerUser from "./User/HomePageUser"
import Inregistrare from "./Cont/Inregistrare";

import CardProdus from "./Componente/Produse";
import CategoryProduse from "./Componente/categoryProduse";
import Contact from "./Componente/Contact";
import Logare from "./Cont/Logare";
import DetaliiProdus from "./Componente/DetaliiProdus";
import CardProduse from "./Componente/CardProduse";
import AddProduse from "./Admin/addDelete/AddProduse";
import DetaliiProduse from "./Admin/addDelete/DetaliiProduse";
import EditProduse from "./Admin/addDelete/EditProduse";
import ListaProduse from "./Admin/addDelete/ListaProduse";
import ShoppingCart from "./Common/Cos";





function App({}) {
  const [cosCumparaturi, setCosCumparaturi] = useState([]);
  return (
    
    <div>
    
      <Routes>
        <Route path="/admin/" element={<MainContainerAdmin />} />
        <Route path="/guest" element={<MainContainerGuest />} />
        <Route path="/user" element={<MainContainerUser />} />
        <Route path="/cont" element={<Inregistrare />} />
        <Route path="/componente" element={<CardProdus />} />
        <Route path="/produse/:category" element={<CategoryProduse />} />
        <Route path="/pageContact" element={<Contact />} />
        <Route path="/logare" element={<Logare />} />
        <Route path="/logo" element={<MainContainerGuest  />} />
        <Route path="/produse/:id" element={<DetaliiProdus/> } />
        <Route path="/cardProduse" element={<CardProduse/> } />
        <Route path='/lista/produse' element={<ListaProduse/>}></Route>
          <Route path='/adauga/produse' element={<AddProduse />}></Route>
          <Route path='/produse/detalii/:productid' element={<DetaliiProduse />}></Route>
          <Route path='/produse/edit/:productid' element={<EditProduse />}></Route>
          <Route path="/cos" element={<ShoppingCart />} />

        

         


  
        <Route path="/" element={<MainContainerGuest />} />
      </Routes>
    </div>
  
  );
}

export default App;
