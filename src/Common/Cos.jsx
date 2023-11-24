
import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom"; //hook pentru a naviga intre pagini

const ShoppingCart = () => {
  //useState ce include cart(cosul de cumparaturi), product(produsele disponibile), filteredProducts(produsele din cos)
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulăm preluarea de produse dintr-un server
    fetch(`http://localhost:3000/produse`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => cart.find((item) => item.id === product.id)
    );
    setFilteredProducts(filteredProducts);
  }, [cart, products]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };  // este apelata cand utilizatorul doreste sa adauge un produs in cos

  return (
    <div>
      <NavBar isGuest={true} />

      <Row>
        {/* Produse disponibile */}
        <Col md={6}>
          <h2>Produse disponibile</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={6}>
                <Card style={{ width: "12rem", margin: "10px" }}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button onClick={() => addToCart(product)}>Adaugă în coș</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Coș de cumpărături */}
        <Col md={6}>
          <h2>Coș de cumpărături</h2>
          <Row>
          {filteredProducts.map((product) => (
              <Col key={product.id} md={6}>
                <Card style={{ width: "12rem", margin: "10px" }}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price} lei </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingCart;
