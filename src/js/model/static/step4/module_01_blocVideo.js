import moduleTypes from '../moduleTypes';

const module_01_blocVideo = {
  position: 1,
  modulType: moduleTypes.blocVideo,
  name: `Vidéo Introductive`,
  firstDescription: {
    __html: `Découvrez l'étape 4 en visionnant la vidéo ci-dessous.`
  },
  videoUrl: 'https://player.vimeo.com/video/259824621',
  secondDescription: {
    __html: `Nous vous proposons d’analyser les fonds proposés par votre entreprise à l’aide des documents de reporting disponibles, Document d’Information Clé pour l’Investisseur (DICI) et fiche de reporting.
    Ces fonds sont tous présents dans le Plan d’Épargne Groupe (PEG), mais pas dans le Plan d’Épargne Retraite Groupe (PERCOG) qui ne peut réglementairement proposer les fonds en titres de l’entreprise, ADP Actionnariat Salarié et ADP Obligations.

    Contrairement au PEG où votre épargne est indisponible pendant 5 ans mais peut être débloquée dans 9 cas, le PERCOG constitue un outil d’épargne longue : les sommes versées sont indisponibles jusqu’à la retraite et les cas de déblocage sont limités à 3 dont l’acquisition de la résidence principale.

    Le PERCOG offre en outre deux modes de gestion :

    - le PERCOG libre où vous choisissez librement les fonds dans lesquels investir,
    - le PERCOG piloté où la répartition et la sécurisation progressive de votre épargne sont faites en fonction du niveau de risque et de l’horizon de placement que vous avez choisis.`
  }
};

export default module_01_blocVideo;
