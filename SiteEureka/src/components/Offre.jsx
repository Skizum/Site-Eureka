import React from "react";

const Offre = () => {
  return (
    <div className="px-4 py-8 sm:px-6 md:py-12 lg:px-8 text-center  xl:py-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs font-semibold text-brandOrange uppercase tracking-wide">
          L’OFFRE DIGITALE DE NOTRE AGENCE MARKETING
        </h3>
        <h2 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
          Votre besoin<span className="text-brandOrange text-5xl">.</span>
        </h2>
        <p className="mt-4 w-2xl text-sm text-gray-800">
          Notre agence distingue 3 phases importantes dans la mise en place
          d’une stratégie marketing digital efficace : la création et/ou
          l’optimisation du site internet, l’acquisition de visiteurs sur ce
          site puis la conversion des visiteurs en pistes commerciales ou
          directement en chiffre d’affaires dans le cas du e-commerce. A chaque
          étape, nous réalisons un travail de précision pour maximiser la
          rentabilité des investissements réalisés.
        </p>
      </div>
    </div>
  );
};

export default Offre;
