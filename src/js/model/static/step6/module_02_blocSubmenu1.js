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
      color: 'rgba(255,92,49,1.00)',
      action: 'show_01',
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché obligataire',
      color: 'rgba(133,0,121,1.00)',
      action: 'show_02',
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché monétaire',
      color: 'rgba(116,198,147,1.00)',
      action: 'show_03',
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché des dérivés',
      color: 'rgba(150,87,37,1.00)',
      action: 'show_04',
    },
  ],
};

export default module_02_blocSubmenu1;
