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
      color: 'var(--action)',
      action: 'show_01',
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Fonds Obligataires',
      color: 'var(--obligation)',
      action: 'show_02',
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Fonds Monétaires',
      color: 'var(--monetaire)',
      action: 'show_03',
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: 'Fonds de type mixte',
      color: 'linear-gradient(to right, var(--action), var(--obligation), var(--monetaire))',
      action: 'show_04',
    },
  ],
};

export default module_02_blocSubmenu1;
