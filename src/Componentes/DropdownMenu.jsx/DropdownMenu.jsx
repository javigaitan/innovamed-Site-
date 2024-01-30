// src/components/DropdownMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ options, onClose }) {
    const handleItemClick = () => {
        // Cerrar el menú desplegable después de hacer clic en un elemento
        onClose();
    };

    return (
        <div className="absolute bg-white text-gray-800 p-4 mt-2 rounded">
            {options.map((option) => (
                <Link
                    key={option.id}
                    to={`/Nuestros servicios/${option.slug}`}
                    onClick={handleItemClick}
                    className="block hover:underline"
                >
                    {option.title}
                </Link>
            ))}
        </div>
    );
}

export default DropdownMenu;
