import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { Link } from "react-router-dom";
import Contact from "../Componente/Contact";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function NavBar({ isGuest, isUser, isAdmin }) {
  return (
    <div className="ContainerPrincipal">
      <div
        className={isGuest ? "nav-guest" : isUser ? "nav-user" : "nav-admin"}
      >
        <div className="ContainerName">
          <Link to="/logo">
            <img
              className="Logo"
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/122010/logo__farmacia_farmacotecnica2.png?itok=e1vOr5TE"
              alt="logo"
              style={{
                width: "80px",
                height: "80px",
              }}
            />
          </Link>
          <div className="Title">
            <h1
              style={{
                display: "flex",
                justifyContent: "flex-start",
                // color: "green",
                fontFamily: "lato",
                marginLeft: "20px",
              }}
            >
              PharmaPlus
            </h1>
          </div>
        </div>

        <div className="ContainerButoane">
          <div>
            <Link to="/cont">
              <Button
                variant="link"
                style={{
                  margin: "10px",
                  padding: "4px",
                  // color: "green",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Înregistrare
              </Button>
            </Link>
            <Link to="/logare">
              <Button
                variant="link"
                style={{
                  margin: "10px",
                  padding: "4px",
                  // color: "green",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                <FaUser size={20} style={{ marginRight: "5px" }} />
                Intra in cont
              </Button>
            </Link>
            <Link to="/guest">
              <Button
                className="link"
                variant="link"
                style={{
                  margin: "10px",
                  padding: "4px",
                  // color: "green",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Log Out
              </Button>
            </Link>

            <Link to="/componente">
              <Button
                variant="link"
                style={{
                  margin: "10px",
                  padding: "4px",
                  // color: "green",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Produse
              </Button>
            </Link>

            <Link to="/pageContact">
              <Button
                variant="link"
                style={{
                  margin: "10px",
                  padding: "4px",
                  // color: "green",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Contact
              </Button>
            </Link>
            <Link to="/Cos">
            <FaShoppingCart size={30} color="black" style={{ marginRight: '20px' }} />
            
             </Link>

             {isAdmin && (
             <Link to = "/lista/produse">

              <Button variant="link"
              style={{
                margin:"10px",
                padding:"4px",
                // color:"green",
                fontSize:"20px",
              fontWeight:"700",textDecoration:"none"}}>
                Add/Delete
              </Button>
        
           </Link>

           

             )}

{isGuest && (
          <Link to="/admin">
            <Button
              variant="link"
              style={{
                margin: "10px",
                padding: "4px",
                // color: "green",
                fontSize: "20px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Admin Page
            </Button>
          </Link>
        )}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
