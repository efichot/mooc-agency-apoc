import moduleTypes from '../moduleTypes';

const module_06_blocSubmenu1 = {
  /*position: 4,*/
  modulType: moduleTypes.blocSubMenuType1,
  description: {
    __html: `Choisissez les critères sur lesquels vous souhaitez d’abord travailler :`
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'Performance',
      color: 'transparent',
      borderColor: 'rgba(128,128,128,1.00)',
      fontColor: 'rgba(128,128,128,1.00)',
      action: 'show_01'
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'Exposition',
      color: 'transparent',
      borderColor: 'rgba(128,128,128,1.00)',
      fontColor: 'rgba(128,128,128,1.00)',
      action: 'show_02'
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'Risque rendement',
      color: 'transparent',
      borderColor: 'rgba(128,128,128,1.00)',
      fontColor: 'rgba(128,128,128,1.00)',
      action: 'show_03'
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: 'Garantie',
      color: 'transparent',
      borderColor: 'rgba(128,128,128,1.00)',
      fontColor: 'rgba(128,128,128,1.00)',
      action: 'show_04'
    }
  ]
};

export default module_06_blocSubmenu1;
