import moduleTypes from '../moduleTypes';

const module_X_blocSubmenu1 = {
  position: X,
  modulType: moduleTypes.blocSubMenuType1,
  description: `Choisissez le marché financier (actions, obligations, monétaire) sur lequel vous souhaitez d’abord travailler :`,
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché actions',
      color: 'rgba(255,97,35,1.00)',
      action: 'showMarketActions'
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché obligataire',
      color: 'rgba(131,0,125,1.00)',
      action: 'showMarketObligatary'
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché monétaire',
      color: 'rgba(0,156,44,1.00)',
      action: 'showMarketMonetary'
    }
  ]
};

export default module_X_blocSubmenu1;
