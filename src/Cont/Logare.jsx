import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import { useNavigate } from "react-router-dom"; 


export const Logare = () => {
  const [users, setUsers] = useState();
  const [email, setEmail] = useState();
  const [parola, setParola] = useState();
  const navigate = useNavigate ();

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  }, []);

  console.log(email, parola, users);

  const handleLogin = (e) => {
    e.preventDefault();
    // Verifică credențialele și decide dacă autentificarea este validă
    const isValidUser = users.find((user) => user.email === email && user.password === parola);

    if (isValidUser) {
      // Dacă autentificarea este validă, redirecționează către pagina /user
      navigate("/user");
    } else {
      // Altfel, poți afișa un mesaj de eroare sau lua alte acțiuni
      alert("Autentificare eșuată. Verificați emailul și parola.");
    }
  };



  return (
    <div>
      <NavBar isGuest={true} />
      <div
        className="Style"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form style={{ 
          width: "500px", 
          height: "50vh" ,
          padding: "20px",
          border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          
          }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setParola(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Pastreaza-ma logat" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleLogin}>
            Autentificare
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Logare;




