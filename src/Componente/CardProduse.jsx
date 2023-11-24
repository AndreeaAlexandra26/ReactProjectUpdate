
import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import DetaliiProdus from "./DetaliiProdus";
import { useNavigate } from "react-router-dom";
import "./CardProduse.css";


export default function CardProduse({ product, addToCart }) {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const handleAdaugaInCos = () => {
   
    addToCart(product);
    navigate("/cos");
    
   
  };

  return (
    <Card className="card">
      <Card.Img variant="top" src={product.img} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{product.name}</Card.Title>
        <Card.Text className="card-text">Pret: {product.price} Lei</Card.Text>
        <button className="details-button" onClick={handleDetailsClick}>
          Detalii
        </button>
        <Button variant="primary" className="add-to-cart-button" onClick={handleAdaugaInCos}>
          Adauga in cos <FaShoppingCart />
        </Button>
        <Modal show={showDetails} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalii produs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DetaliiProdus product={product} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Închide
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}
