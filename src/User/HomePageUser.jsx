import NavBar from "../Common/NavBar";
import React from "react";
import Footer from "../Common/Footer";
import DarkVariantExample from "../Componente/Carousel";


const MainContainerUser = () => {
  return (
    <>
      <NavBar isUser={true} />

      <DarkVariantExample/>
      <Footer />
    </>
  );
};

export default MainContainerUser;
