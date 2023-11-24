import NavBar from "../Common/NavBar";
import React from "react";
import Footer from "../Common/Footer";

import DarkVariantExample from "../Componente/Carousel";


const MainContainerGuest = () => {
  return (
    
    <div className="main-container guest">
      <NavBar isGuest={true} />

<DarkVariantExample/>


      <Footer />
    
    </div>
  );
};

export default MainContainerGuest;
