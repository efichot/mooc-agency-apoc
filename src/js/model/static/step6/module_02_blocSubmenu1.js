import moduleTypes from '../moduleTypes';
import button_finger from '../../../../assets/img/icons/button-arrow-right.png';

const module_02_blocSubmenu1 = {
  /*position: 4,*/
  modulType: moduleTypes.blocSubMenuType1,
  description: {
    __html: `Hormis les États qui ne peuvent émettre des actions, les autres acteurs peuvent être présents sur les différentes classes d’actifs, à savoir le marché des actions, le marché obligataire et le marché monétaire. S’y ajoute le marché des dérivés dont le fonctionnement spécifique sera détaillé plus loin. 
    Commencez par choisir la classe d'actifs actions, obligataire ou monétaire que vous souhaitez d’abord approfondir à l'aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div>`,
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché actions',
      color: process.env.REACT_APP_ACTION,
      action: 'show_01',
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché obligataire',
      color: process.env.REACT_APP_OBLIGATION,
      action: 'show_02',
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché monétaire',
      color: process.env.REACT_APP_MONETAIRE,
      action: 'show_03',
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché des dérivés',
      color: process.env.REACT_APP_DERIVES,
      action: 'show_04',
    },
  ],
};

export default module_02_blocSubmenu1;
