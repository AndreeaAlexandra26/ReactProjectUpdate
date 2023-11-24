import NavBar from "../Common/NavBar";
import React from "react";
import Footer from "../Common/Footer";
import DarkVariantExample from "../Componente/Carousel";


const MainContainerAdmin = ({}) => {

  return (
    <>
      <NavBar isAdmin  />

      <DarkVariantExample/>

      <Footer />
    </>
  );
};

export default MainContainerAdmin;