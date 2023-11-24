import React, { useState,  } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Search = ({searchResults, setSearchResults, produse}) => 
// Starea pentru gestionarea valorii introduse în câmpul de căutare
{
  const [query, setQuery] = useState("")

  // Funcție pentru gestionarea căutării
const handleSearch = () => {
   // Filtrarea rezultatelor în funcție de conținutul introdus în câmpul de căutare
    const filteredResults = produse.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Actualizarea rezultatelor de căutare în funcție de filtrare
    setSearchResults(filteredResults);
};

  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cauta produs"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" onClick={handleSearch}>Cauta</Button>
      </Form>

     
    </>
  );
};

export default Search
