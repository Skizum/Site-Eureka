
// import React from "react";
import React, { useState } from "react";
import Projet from "./Projet";
// import {ResetPassword} from '../components';

export default function Modal({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username) {
      errors.username = "Veuillez entrer votre nom d'utilisateur";
      isValid = false;
    }

    if (!password) {
      errors.password = "Veuillez entrer votre mot de passe";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Ajouter ici la logique pour soumettre les données du formulaire
    }
  };

  return (
    <div className="fixed z-50 top-0 w-screen flex items-center justify-center h-screen bg-gray-900/30 backdrop-blur ">
      <div className="  w-full mt-20 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
        <div className="w-full h-[8vh] grid justify-items-end">
          <button
            className="flex items-center justify-center mx-50 rounded-full  text-[#00296b] font-bold w-9 h-9"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <Projet/>
      </div>
    </div>
  );
}
