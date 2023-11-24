import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardsContainer } from "./Produse.style";
import Search from "./search";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import { SubNavBar } from "../Common/SubNavBar/SubNavBar";
import CardProduse from "./CardProduse";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../Common/Cos";

const Produse = () => {
   // Starea pentru gestionarea produselor, rezultatelor
  const [produse, setProduse] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cosCumparaturi, setCosCumparaturi] = useState([]);
  const navigate = useNavigate();
  console.log(searchResults);



  useEffect(() => {
    // Efect pentru a prelua produsele de la server când componenta este montată
    fetch(`http://localhost:3000/produse`)
      .then((response) => response.json())
      .then((produse) => {
        console.log(produse);
        setProduse(produse);
        setSearchResults(produse);
      });
  }, []);

  const addToCart = (product) => {
    // Funcție pentru adăugarea unui produs în coșul de cumpărături
    console.log("Produs adăugat în coș:", product);
    setCosCumparaturi([...cosCumparaturi, product]);
    console.log("Coș actualizat:", cosCumparaturi);
    navigate("/cos");
  };

  return (
    <>
      <NavBar isGuest={true}/>
      <SubNavBar/>
      <Search
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        produse={produse}
      ></Search>
      <h3 style={{
        display:"flex",
        justifyContent:"center",
        margin:"10px"
      }}>Toate Produsele</h3>
      <CardsContainer>
        {searchResults.map((product) => (
        <CardProduse  key={product.id} product={product} addToCart={addToCart}/>
        
        ))}
        
      </CardsContainer>
      <ShoppingCart cosCumparaturi={cosCumparaturi}/>
      <Footer/>
    </>
  );
};
export default Produse;