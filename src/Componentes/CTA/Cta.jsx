import Banner from '../../assets/fondobanner.webp';

function Cta() {
  const mensajeWhatsApp = "Hola, quiero sacar un turno en Innovamed soy ";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=3512117686&text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center relative ">
        {/* Capa de fondo con opacidad púrpura */}
        <div className="absolute inset-0 bg-purple-950 opacity-40"></div>

        {/* Imagen principal */}
        <img className="object-cover w-full h-80 md:hidden " src={Banner} alt="fondo" />

        {/* Imagen para pantallas medianas y grandes con opacidad */}
        <img className="hidden md:block object-cover w-full h-80 lg:h-90 opacity-40 " src={Banner} alt="background" />

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-2 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-montserrat font-semibold leading-tight text-center mb-4 mt-4">
            TU SALUD ES IMPORTANTE
          </h1>
          <p className="w-11/12 sm:w-10/12 lg:w-8/12 mt-3 font-montserrat font-light text-base md:text-lg lg:text-xl xl:text-xl text-center">
            Y la salud con tu pareja también lo es <br />Prioriza tu bienestar sexual y fortalece tu relación de pareja
          </p>
          <br />
          <button className="mt-4 xl:mt-2 transition duration-300 ease-in-out bg-gradient-to-r from-purple-700 to-purple-400 hover:from-purple-600 hover:to-purple-300 flex justify-center items-center space-x-2 px-6 py-3 rounded-full" onClick={handleWhatsAppClick}>
            <p className="text-white text-lg font-semibold font-montserrat">Agenda un turno</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;