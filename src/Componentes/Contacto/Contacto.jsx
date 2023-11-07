import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contacto() {

    const refForm = useRef();

    const handleSubmit =(event) =>{
        event.preventDefault();

        const serviceId = 'service_ejdwsjt';
        const templateId ='template_lz23sl4';
        const apikey = 'QeUg4kpv-PPtqFrNC';

        emailjs.sendForm(serviceId, templateId, refForm.current , apikey)
        .then((result) => {
            Swal.fire({
                title: 'Mensaje Enviado',
                text: '¡Tu mensaje ha sido enviado correctamente!',
                icon: 'success',
        });

        refForm.current.reset();
    })

        .catch((error) => {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente más tarde.',
                icon: 'error',
              });
              console.error(error);
        });
    };
  return (
    <>
      <div id='contacto' className="container mx-auto pt-16 xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
        <form ref={refForm} onSubmit={handleSubmit} id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br mx-auto max-w-sm">
          <h1 className="text-4xl text-gray-800 font-extrabold mb-6 text-center">Contacto</h1>
          <div className="mb-6">
            <div className="flex flex-col mb-4">
              <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold mb-2">
                
              </label>
              <input
                required
                id="full_name"
                name="full_name"
                type="text"
                className="focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 pl-3 text-sm border-gray-300 rounded border"
                placeholder="Nombre"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-800 text-sm font-semibold mb-2">
                
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 pl-3 text-sm border-gray-300 rounded border"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="phone" className="text-gray-800 text-sm font-semibold mb-2">
                
              </label>
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                className="focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 pl-3 text-sm border-gray-300 rounded border"
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
              Consulta
            </label>
            <textarea
              placeholder="Escribe tu consulta aquí"
              name="message"
              className="border-gray-300 border rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
              rows={8}
              id="message"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 mx-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Contacto;
