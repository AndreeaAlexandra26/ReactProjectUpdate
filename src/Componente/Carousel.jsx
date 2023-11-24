

import Carousel from 'react-bootstrap/Carousel';
import MediumShotPharmacistWorking from "../Media/Imagini/medium-shot-pharmacist-working.jpg"
import CarrrouselImage2 from "../Media/Imagini/8935971.jpg"
import CarrouselImage3 from "../Media/Imagini/8559887.jpg"
import "./Carousel.css";
import Newsletter from './Newsletter';
import CustomerReviews from './CustomerReviews';
import ImaginePrincipala from "../Media/Imagini/16209.jpg";

function DarkVariantExample() {
  return (
    <div className='BeforeCarrousel'>
      <div className='ContainerBackground'>
        <div className='CarrouselContainer' style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80vh",
          marginTop: "50px",
          marginBottom: "60px",
          width: "100%",
        }}>
          <div className='TextContainer' style={{ textAlign: "left" }}>
            <h2>Textul dorit</h2>
            <p>Alte informații...</p>
          </div>
          <Carousel data-bs-theme="dark" style={{ width: "60%" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MediumShotPharmacistWorking}
                alt="First slide"
                style={{
                  maxWidth: "1800px",
                  maxHeight: "80vh",
                  margin: "auto",
                }}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CarrrouselImage2}
                alt="Second slide"
                style={{
                  maxWidth: "1800px",
                  maxHeight: "80vh",
                  margin: "auto",
                }}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CarrouselImage3}
                alt="Third slide"
                style={{
                  maxWidth: "1800px",
                  maxHeight: "80vh",
                  margin: "auto",
                }}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <CustomerReviews />
        <Newsletter />
      </div>
    </div>
  );
}

export default DarkVariantExample;

