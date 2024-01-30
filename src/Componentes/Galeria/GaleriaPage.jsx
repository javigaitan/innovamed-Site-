import React from 'react';
import consultorio from '../../assets/Consultorio.jpg';
import consultorio2 from '../../assets/consultorio2.jpg';
import consultorio3 from '../../assets/consultorio3.jpg';
import consultorio4 from '../../assets/consultorio4.jpg';
import consultorio5 from '../../assets/consultorio5.jpg';

const GaleriaPage = () => {
    return (
        <div id="galeria" className="container mx-auto mt-8">
            <h2 className="text-4xl font-bold font-montserrat text-purple-950 mb-6">Nuestro consultorio</h2>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img className="block w-full rounded-lg" src={consultorio} alt="Consultorio" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img className="block w-full rounded-lg" src={consultorio2} alt="Consultorio" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img className="block w-full rounded-lg" src={consultorio3} alt="Consultorio" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img className="block w-full rounded-lg" src={consultorio4} alt="Consultorio" />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img className="block w-full rounded-lg" src={consultorio5} alt="Consultorio" />

                </div>
            </div>
        </div>
    );
}

export default GaleriaPage;
