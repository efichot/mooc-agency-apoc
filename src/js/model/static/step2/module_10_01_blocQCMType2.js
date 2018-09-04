import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_10_01_blocQCMType2.png';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const module_10_01_blocQCMType2 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: false,
  noPopup: true,
  chapter: `Analyse comparative`,
  duration: 1,
  title: `Mécanisme de garantie des fonds structurés`,
  firstDescription: {
    __html: `En quoi consistent les mécanismes de garantie ?
    Ils font souvent référence à la Valeur Liquidative (ou VL) qui représente le prix auquel s’effectuent les achats et les ventes de parts du fonds. 

    À partir des données fournies ci-dessous, analysez la performance du fonds de type mixte D en sélectionnant les bonnes réponses grâce au bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div>.

    <img src="${image}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Quel type de garantie offre le fonds ?`,
      choices: [
        {
          value: "À l'échéance",
          label: "À l'échéance",
        },
        {
          value: 'Annuelle',
          label: 'Annuelle',
        },
        {
          value: 'À tout moment',
          label: 'À tout moment',
        },
      ],
      answer: 'À tout moment',
    },
    {
      questionNumber: 2,
      title: 'Sur quoi porte la garantie ?',
      choices: [
        {
          value: '100% du capital investi',
          label: '100% du capital investi',
        },
        {
          value: '90% du capital investi',
          label: '90% du capital investi',
        },
        {
          value: 'Au moins 90% du capital investi',
          label: 'Au moins 90% du capital investi',
        },
      ],
      answer: 'Au moins 90% du capital investi',
    },
  ],
  synthese: {
    firstDescription: {
      __html: `La garantie porte sur 90% de la plus haute valeur de part du fonds de type mixte D (VL ou Valeur Liquidative) constatée historiquement. L’investisseur ne peut donc jamais perdre plus de 10% du capital qu’il a investi mais, en fonction de la date d’investissement, il peut bénéficier d’une garantie susceptible d’aller jusqu’à 100% de ce capital puisque calculée sur une VL historique. En fin de période (cf. graphique ci-dessus), l’investisseur acquiert ainsi la part du fonds à 118,4€ et bénéficie d’une garantie à hauteur de 112,67€, soit 95% du capital investi.
      Cette garantie s’applique à tout moment. Mais il existe aussi des fonds où la garantie ne s’applique qu’à l’échéance (cf. Fiche du fonds actions E qui garantit à l’échéance 90% du capital investi, le risque de perte sur 8 ans ne pouvant excéder 10%, soit -1,31% par an) ; si l’investisseur vend ses parts avant l’échéance, le prix sera fonction des marchés et pourra être différent de la formule annoncée.`,
    },
  },
};

export default module_10_01_blocQCMType2;
