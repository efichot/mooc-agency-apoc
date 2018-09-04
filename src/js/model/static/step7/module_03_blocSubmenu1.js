import moduleTypes from '../moduleTypes';
import button_finger from '../../../../assets/img/icons/button-arrow-right.png';

const module_03_blocSubmenu1 = {
  /*position: 4,*/
  modulType: moduleTypes.blocSubMenuType1,
  description: {
    __html: `Choisissez le marché financier (actions, obligations, monétaire) sur lequel vous souhaitez d’abord travailler à l'aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div>&nbsp;:`,
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché actions',
      color: 'rgba(255,97,35,1.00)',
      action: 'show_01',
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché obligataire',
      color: 'rgba(131,0,125,1.00)',
      action: 'show_02',
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Entrer sur le marché monétaire',
      color: 'rgba(0,156,44,1.00)',
      action: 'show_03',
    },
  ],
};

export default module_03_blocSubmenu1;
