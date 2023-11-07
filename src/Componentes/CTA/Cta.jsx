import Banner from '../../assets/fondobanner.webp'


function Cta() {

  const mensajeWhatsApp = "Hola, quiero sacar un turno en Innovamed soy ";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=3512075102&text=${encodeURIComponent(mensajeWhatsApp)}`, "_blank");
  };

    return (
      <div className>
        <div className="flex justify-end items-center">
          <img className="object- md:hidden  w-full h-60" src={Banner} alt="background" />
          <img className="hidden md:block object-cover  w-full h-56 lg:h-52" src={Banner} alt="background" />
          <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
            <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">Tu salud es importante</h1>
            <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-gray-800">Y la salud con tu pareja, tambien . No pierdas tiempo  </p>
            <button className="mt-5 xl:mt-6 hover:underline underline-offset-4 transition duration-300 ease-in-out flex justify-start items-center space-x-2">
              <p className="mt-5 xl:mt-6 hover:underline underline-offset-4 transition duration-300 ease-in-out flex justify-start items-center space-x-2 cursor-pointer"
            onClick={handleWhatsAppClick}>Solicita un turno!</p>
          
            </button>
          </div>
        </div>
      </div>
  
  
    )
  }

  export default Cta