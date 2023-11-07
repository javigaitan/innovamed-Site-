import React from "react"
import  Navbar  from "./Componentes/Navbar/Navbar"
import Banner from "./Componentes/Banner/Banner"
import Servicios from "./Componentes/Servicios/Servicios"
import Nosotros from "./Componentes/Nosotros/Nosotros"
import Footer from "./Componentes/Footer/Footer"
import WhatsAppButton from "./Componentes/BtnWs/WhatsAppButton"
import Cta from "./Componentes/CTA/Cta"
import Contacto from "./Componentes/Contacto/Contacto"

function App() {
  

  return (
    <>
    <Navbar/>
    <WhatsAppButton/>
    <Banner/>
    <Servicios/>
    <Nosotros/>
    <Contacto/>
    <Footer/>


    </>
  )
}

export default App
