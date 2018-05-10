import moduleTypes from '../moduleTypes';

const module_02_blocSubmenu1 = {
  /*position: 4,*/
  modulType: moduleTypes.blocSubMenuType1,
  description: {
    __html: `Au cours de l’étape 2, vous avez évalué les fonds actions, obligataires/monétaires et de type mixte, à partir des données et indicateurs extraits de leur fiche de reporting. 
    Choisissez la catégorie de fonds sur laquelle vous souhaitez travailler et un commentaire de reporting à compléter vous sera proposé.`
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'Fond Actions',
      color: 'rgba(255,92,49,1.00)',
      action: 'show_01'
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Fonds Obligataires',
      color: 'rgba(110,19,99,1.00)',
      action: 'show_02'
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Fonds Monétaires',
      color: 'rgba(0,146,60,1.00)',
      action: 'show_03'
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: 'Fonds de type mixte',
      color: 'rgba(91,43,88,1.00)',
      action: 'show_04'
    }
  ]
};

export default module_02_blocSubmenu1;
