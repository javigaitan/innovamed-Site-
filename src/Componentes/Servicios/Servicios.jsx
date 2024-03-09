import React from "react";
import Equipo from '../../assets/Servicio.jpg';
import { Link } from 'react-router-dom';

function Servicios() {
  return (
    <div id='servicios' className='overflow-y-hidden bg-gray-100 mt-[-40px]'>
      <div className="py-14">
        <section className="mx-auto container bg-white pt-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="w-full lg:w-7/12 bg-purple-950 p-8 rounded-lg flex flex-col items-center text-center text-white relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-montserrat font-semibold leading-tight mb-4 lg:mb-6">
                Nuestros servicios
              </h2>
              <p className="font-montserrat font-light text-lg md:text-xl lg:text-2xl xl:text-2xl text-white mb-4 text-justify">
                Adecuamos y personalizamos a cada paciente de acuerdo a su cuadro clínico. Somos expertos en el tratamiento de pacientes con condiciones médicas diversas, incluyendo disfunciones eréctiles severas.
              </p>
              <div className="w-full lg:w-8/12 mx-auto">
                <img className="block w-full rounded-lg" src={Equipo} alt="people discussing on board" style={{ maxWidth: '100%' }} />
              </div>
            </div>

            <YourComponent />
          </div>
        </section>
      </div>
    </div>
  );
}

function renderServiceCard(title, description, link) {
  return (
    <Link to={link} className="hover:no-underline">
      <div className="bg-white p-6 rounded-md border border-gray-300 hover:border-purple-500 hover:shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-purple-500 font-semibold hover:text-purple-700">Leer más</p>
      </div>
    </Link>
  );
}

function YourComponent() {
  return (
    <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {renderServiceCard("Disfunción eréctil", "La disfunción eréctil se caracteriza por la incapacidad.", "/disfuncion-erectil")}
        {renderServiceCard("Terapia de ondas focales", "Las ondas de energía acústica aceleran los procesos de autocuración y representan una opción terapéutica de primera línea, sin efectos adversos.", "/terapia-ondas-focales")}
        {renderServiceCard("Falta de deseo", "La falta de interés en las relaciones sexuales, junto con la apatía y la ausencia de erecciones matutinas o con estimulación, son síntomas clave de la disfunción eréctil.", "/falta-deseo")}
        {renderServiceCard("Tratamiento de reemplazo hormonal", "El tratamiento se realiza a través de la aplicación subcutánea de pequeños gránulos de Hormonas Bioidénticas.", "/tratamiento-reemplazo-hormonal")}
        {renderServiceCard("Tratamiento de reemplazo de testosterona", "La terapia de testosterona puede ayudar a revertir los efectos del hipogonadismo.", "/tratamiento-testosterona")}
        {renderServiceCard("Eyaculación precoz", "La eyaculación precoz se caracteriza por ocurrir sin control antes de lo deseado por uno mismo o su pareja durante el acto sexual.", "/eyaculacion-precoz")}
      </div>
    </div>
  );
}

export default Servicios;
