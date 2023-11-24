import React from 'react';
import "./CustomerReviews.css";
import { FaStar } from 'react-icons/fa'; // Importă iconul stelelor
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import client1 from "../Media/Imagini/client1.jpg";
import client2 from "../Media/Imagini/client2.jpeg";
import client3 from "../Media/Imagini/client3.jpeg";
import client4 from "../Media/Imagini/client4.jpeg";




function CustomerReviews() {
    return (
        <div className="CustomerReviews">
            <h2>Recenzii de la Clienți</h2>
            <br></br>
      <CardGroup className="ReviewCardGroup">
        <Card className="ReviewCard">
          <Card.Img variant="top" src={client1}
          style= {{
            
            width: "80px",
            height: "80px",
            margin:"auto",
            paddingTop: "10px",
            borderRadius: "50%",
    
          
      
          }} />
          <Card.Body>
            <Card.Title>Raluca</Card.Title>
            <div className="Rating">
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
        </div>
            <Card.Text>
            "Am avut o experiență excelentă la Farmacia PharmaPlus. Farmacistul a fost extrem de informat și mi-a explicat cu atenție toate detaliile despre medicamentele pe care le-am cumpărat. O farmacie de încredere!"
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 10 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="ReviewCard">
          <Card.Img variant="top" src={client2} 
            style= {{
            
                width: "80px",
                height: "80px",
                margin:"auto",
                paddingTop: "10px",
                borderRadius: "50%",
        
              
          
              }} 
          />
          <Card.Body>
            <Card.Title>Andrei</Card.Title>
            <div className="Rating">
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           </div>
            <Card.Text>
            "Farmacia PharmaPlus oferă o gamă largă de produse farmaceutice și personalul este întotdeauna dispus să ajute. Au un serviciu rapid și eficient. Sunt un client fidel de ani de zile."{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card className="ReviewCard">
          <Card.Img variant="top" src={client3} 
          style= {{
            
            width: "80px",
            height: "80px",
            margin:"auto",
            paddingTop: "10px",
            borderRadius: "50%",
    
          
      
          }} />
          <Card.Body>
            <Card.Title>Ioana</Card.Title>
            <div className="Rating">
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           </div>
            <Card.Text>
            "Farmacia PharmaPlus are o gamă variată de produse, iar atmosfera este mereu prietenoasă. Am avut nevoie de un medicament urgent și au făcut tot posibilul să mă ajute. Sunt recunoscător pentru promptitudinea și amabilitatea lor."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 2 weeks ago</small>
          </Card.Footer>
        </Card>
        <Card className="ReviewCard">
          <Card.Img variant="top" src={client4}
          style= {{
            
            width: "80px",
            height: "80px",
            margin:"auto",
            paddingTop: "10px",
            borderRadius: "50%",
    
          
      
          }}  />
          <Card.Body>
            <Card.Title>Alexandra</Card.Title>
            <div className="Rating">
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           <FaStar className="Star" />
           </div>
            <Card.Text>
            "Această farmacie se distinge prin profesionalism și respect față de clienți. Am beneficiat de consiliere individuală, iar farmacistul a răspuns cu răbdare tuturor întrebărilor mele."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 month ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
    );
  }
  
  export default CustomerReviews;

