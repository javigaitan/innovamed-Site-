import React from "react"
import  Navbar  from "./Componentes/Navbar/Navbar"
import Banner from "./Componentes/Banner/Banner"
import Servicios from "./Componentes/Servicios/Servicios"
import Nosotros from "./Componentes/Nosotros/Nosotros"
import Footer from "./Componentes/Footer/Footer"
import WhatsAppButton from "./Componentes/BtnWs/WhatsAppButton"
import Cta from "./Componentes/CTA/Cta"

function App() {
  

  return (
    <>
    <Navbar/>
    <Banner/>
    <WhatsAppButton/>
    <Servicios/>
    <Nosotros/>
    <Footer/>


    </>
  )
}

export default App
