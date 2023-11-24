import React, { useState } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { Container } from "./Inregistrare.style";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Inregistrare = () => {
  
  const [isFormValid, setIsFormValid] = useState(false);
  const [name, setname] = useState("");
  const [nameError, setNameError] = useState(true);
  const [prenumeError, setPrenumeError] = useState(true);
  const [prenume, setprenume] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [email, setemail] = useState("");
  const [comfirmareEmailError, setComfirmareEmailError] = useState(true);
  const [comfirmareEmail, setcomfirmareEmail] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const [password, setpassword] = useState("");
  const [comfirmarePasswordError, setComfirmarePasswordError] = useState(true);
  const [comfirmarePassword, setComfirmarePassword] = useState("");

  const navigate=useNavigate();

  //la apasarea butonului de inregistrare se construieste un obiect stocare care contine inf introduse si este trimis catre server folosind o cerere post la url
  const handlesubmit = (e) => {
    e.preventDefault();
    let stocare = { name, prenume,email, password};
    console.log(stocare);


    fetch("http://localhost:3000/users", {
      method: "POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(stocare)
    }).then((res)=>{
alert('Felicitari, ai fost inregistrat cu succes!')
navigate('/user');


}).catch((err)=>{
  alert(' Inregistrare esuata:'+err.message);
});
};


  const changeName = (value) => {
    let lowercaseRegex = /^[a-z 0-9]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Numele trebuie să contina între 3 și 9 caractere.");
      setNameError(true);
    } else if (!lowercaseRegex.test(value)) {
      alert("Numele trebuie să contina doar caractere minuscule.");
      setNameError(true);
    } else {
      setNameError(false);
      setname(value);
    }
    checkFormValidity();
  };

  const changePrenume = (value) => {
    let lowercaseRegex = /^[a-z  0-9]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Prenumele trebuie să contina între 3 și 9 caractere.");
      setPrenumeError(true);
    } else if (!lowercaseRegex.test(value)) {
      alert("Prenumele trebuie să contina doar caractere minuscule.");
      setPrenumeError(true);
    } else {
      setPrenumeError(false);
      setprenume(value);
    }
    checkFormValidity();
  };

  const changeEmail = (value) => {
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (value.length < 3 || value.length >= 20) {
      alert("Emailul trebuie să contina între 3 și 19 caractere.");
      setEmailError(true);
    } else if (!emailRegex.test(value)) {
      alert("Emailul trebuie să contina doar caractere minuscule.");
      setEmailError(true);
    } else {
      setEmailError(false);
      setemail(value);
    }
    checkFormValidity();
  };

  const changeComfirmareEmail = (value) => {
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (value.length < 3 || value.length >= 20) {
      alert("Emailul trebuie să contina între 3 și 19 caractere.");
      setComfirmareEmailError(true);
    } else if (!emailRegex.test(value)) {
      alert("Emailul trebuie să contina doar caractere minuscule.");
      setComfirmareEmailError(true);
    } else {
      setComfirmareEmailError(false);
      setcomfirmareEmail(value);
    }
    checkFormValidity();
  };

  const changePassword = (value) => {
    let lowercaseRegex = /^[a-z 0-9]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Parola trebuie să contina între 3 și 19 caractere.");
      setPasswordError(true);
    } else if (!lowercaseRegex.test(value)) {
      alert("Parola trebuie să contina doar caractere minuscule.");
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setpassword(value);
    }
    checkFormValidity();
  };

  const changeComfirmarePassword = (value) => {
    let lowercaseRegex = /^[a-z 0-9]+$/;
    if (value.length < 3 || value.length >= 10) {
      alert("Parola trebuie să contina între 3 și 19 caractere.");

      setComfirmarePasswordError(true);
    } else if (!lowercaseRegex.test(value)) {
      alert("Parola trebuie să contina doar caractere minuscule.");
      setComfirmarePasswordError(true);
    } else {
      setComfirmarePasswordError(false);
      setComfirmarePassword(value);
    }
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (!nameError && !prenumeError && !emailError && !comfirmareEmailError && !passwordError && !comfirmarePasswordError) {alert("Toate campurile sunt obligatorii");
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };
  

  return (
    <>
      <NavBar isGuest={true} />
      <Container style={{
        height:"83vh",
      
      }}>
        <InputGroup hasValidation > 
          <Form.Control
            placeholder="Nume"
            type="text"
            required
            isInvalid={nameError}
            isValid={!nameError}
            onBlur={(e) => changeName(e.target.value)}
          />
          <Form.Control.Feedback type={nameError ? "invalid" : "valid"}>
            Introduceti un nume
          </Form.Control.Feedback>

          <Form.Control
            placeholder="Prenume"
            type="text"
            required
            isInvalid={prenumeError}
            isValid={!prenumeError}
            onBlur={(e) => changePrenume(e.target.value)}
          />
          <Form.Control.Feedback type={nameError ? "invalid" : "valid"}>
            Introduceti prenumele
          </Form.Control.Feedback>

          <Form.Control
            placeholder="Email"
            type="email"
            required
            isInvalid={emailError}
            isValid={!emailError}
            onBlur={(e) => changeEmail(e.target.value)}
          />
          <Form.Control.Feedback type={nameError ? "invalid" : "valid"}>
            Introduceti Email
          </Form.Control.Feedback>

          <Form.Control
            placeholder="Confirmare Email"
            type="email"
            required
            isInvalid={comfirmareEmailError}
            isValid={!comfirmareEmailError}
            onBlur={(e) => changeComfirmareEmail(e.target.value)}
          />
          <Form.Control.Feedback type={nameError ? "invalid" : "valid"}>
            Introduceti Email
          </Form.Control.Feedback>

          <Form.Control
            placeholder="Parola"
            type="password"
            required
            isInvalid={passwordError}
            isValid={!passwordError}
            onBlur={(e) => changePassword(e.target.value)}
          />
          <Form.Control.Feedback type={nameError ? "invalid" : "valid"}>
            Introduceti o parola
          </Form.Control.Feedback>

          <Form.Control
            placeholder="Confirmare Parola"
            type="password"
            required
            isInvalid={comfirmarePasswordError}
            isValid={!comfirmarePasswordError}
            onBlur={(e) => changeComfirmarePassword(e.target.value)}
          />
          <Form.Control.Feedback type={nameError ? "invalid" : "valid"}>
            Introduceti parola din nou
          </Form.Control.Feedback>
        </InputGroup>
        <div className="checkBoxContainer">
          <input type="checkbox" />
          <p>Accept Termenii si Conditiile</p>
        </div>
        <Link to="/user">
          <Button
            variant="primary"
            onClick={handlesubmit}
            disabled={!isFormValid}
          >
            Inregistrare
          </Button>
        </Link>
      </Container>

      <Footer />
    </>
  );
};

export default Inregistrare;
