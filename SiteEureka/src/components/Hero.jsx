import React from 'react';

const Hero = () => {
  return (
    <div className="back5 h-screen flex  items-center">
      <div className='bg-black/75  h-screen flex  items-center'>
      <div className="w-full  py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              À propos de notre agence de marketing digital
            </h2>
            <p className="mt-3 text-xl text-gray-300 sm:mt-4">
              Chez [nom de l'agence], nous sommes passionnés par le marketing digital et nous sommes déterminés à aider nos clients à réussir en ligne.
            </p>
          </div>
          
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#first_name" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Nous contacter
              </a>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
