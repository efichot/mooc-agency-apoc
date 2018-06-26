import moduleTypes from '../moduleTypes';

const module_02_blocSubmenu2 = {
  /*position: 4,*/
  modulType: moduleTypes.blocSubMenuType2,
  description: {
    __html: `Pour les découvrir, choisissez le type de fonds dont vous souhaitez approfondir la gestion.`,
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: '',
      nameBelow: { __html: 'Fonds Actions' },
      color: 'rgba(243,183,156,1.00)',
      borderColor: 'rgba(255,255,255,1.00)',
      fontColor: 'rgba(133,143,158,1.00)',
      action: 'show_01',
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: '',
      nameBelow: { __html: 'Fonds obligataires<br/>Fonds Monétaires' },
      color: 'rgba(19,125,61,1.00)',
      borderColor: 'rgba(255,255,255,1.00)',
      fontColor: 'rgba(133,143,158,1.00)',
      action: 'show_02',
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: '',
      nameBelow: { __html: 'Fonds de type mixte' },
      color: 'rgba(205,99,48,1.00)',
      borderColor: 'rgba(255,255,255,1.00)',
      fontColor: 'rgba(133,143,158,1.00)',
      action: 'show_03',
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: '',
      nameBelow: { __html: "Fonds en titres<br />de l'entreprise" },
      color: 'rgba(255,198,88,1.00)',
      borderColor: 'rgba(255,255,255,1.00)',
      fontColor: 'rgba(133,143,158,1.00)',
      action: 'show_04',
    },
  ],
};

export default module_02_blocSubmenu2;
