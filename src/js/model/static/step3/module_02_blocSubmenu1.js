import moduleTypes from '../moduleTypes';

const module_02_blocSubmenu1 = {
  /*position: 4,*/
  modulType: moduleTypes.blocSubMenuType1,
  description: {
    __html: `Au cours de l’étape 2, vous avez évalué les fonds actions, obligataires/monétaires et de type mixte, à partir des données et indicateurs extraits de leur fiche de reporting. 
    Choisissez la catégorie de fonds sur laquelle vous souhaitez travailler et un commentaire de reporting à compléter vous sera proposé.`,
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'Fond Actions',
      color: process.env.REACT_APP_ACTION,
      action: 'show_01',
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Fonds Obligataires',
      color: process.env.REACT_APP_OBLIGATION,
      action: 'show_02',
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Fonds Monétaires',
      color: process.env.REACT_APP_MONETAIRE,
      action: 'show_03',
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: 'Fonds de type mixte',
      color: `linear-gradient(to right, ${process.env.REACT_APP_ACTION}, ${process.env.REACT_APP_MONETAIRE} 50%, ${
        process.env.REACT_APP_OBLIGATION
      } 100%)`,
      action: 'show_04',
    },
  ],
};

export default module_02_blocSubmenu1;
