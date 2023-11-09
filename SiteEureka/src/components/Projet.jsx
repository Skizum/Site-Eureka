import React, { useState } from 'react';

const Projet = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [objectives, setObjectives] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données du formulaire
    // à votre backend ou effectuer toute autre action requise
    console.log('Données du formulaire soumises:', {
      projectName,
      description,
      objectives,
      targetAudience,
      budget,
      deadline,
      contactInfo,
    });
    // Réinitialisez les valeurs du formulaire après la soumission
    setProjectName('');
    setDescription('');
    setObjectives('');
    setTargetAudience('');
    setBudget('');
    setDeadline('');
    setContactInfo('');
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Formulaire de suggestion de projet</h2>
      <div className="mb-4">
        <label htmlFor="projectName" className="block mb-2 font-medium">
          Nom du projet<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="projectName"
          className="w-full p-2 border border-gray-300 rounded"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          className="w-full p-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      
      <div className="mb-4">
        <label htmlFor="targetAudience" className="block mb-2 font-medium">
          Noms & prenoms<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="targetAudience"
          className="w-full p-2 border border-gray-300 rounded"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="block mb-2 font-medium">
          Telphone<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="budget"
          className="w-full p-2 border border-gray-300 rounded"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
      </div>
     
      <div className="mb-4">
        <label htmlFor="contactInfo" className="block mb-2 font-medium">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="Email"
          id="contactInfo"
          className="w-full p-2 border border-gray-300 rounded"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brandPrimary text-white py-2 px-4 rounded-full mt-4"
      >
        Soumettre
      </button>
    </form>
  );
};

export default Projet;
