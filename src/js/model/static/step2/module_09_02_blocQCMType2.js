import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_09_02_blocQCMType2.png';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const module_09_02_blocQCMType2 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: true,
  noPopup: true,
  chapter: `Questionnaire`,
  duration: 2,
  title: `Par rapport au taux sans risque et à l’indice de référence`,
  firstDescription: {
    __html: `Préférez-vous un fonds performant avec beaucoup de risque ou un fonds qui a la même performance avec moins de risque ?
    Deux ratios permettent d’analyser la performance (ou le rendement) d’un fonds en fonction du risque pris :
    - le Ratio de Sharpe mesure la performance par rapport au taux sans risque, et le risque par la volatilité ; 
    - le Ratio d’information mesure la performance par rapport à l’indice de référence, et le risque par l’écart par rapport à ce même indice (Tracking Error). 

    À partir des données fournies ci-dessous, qualifiez les performances du fonds actions B en sélectionnant les bonnes réponses grâce au bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div>.

    <img src="${image}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Sur quelle période y a-t-il surperformance par rapport ?`,
      answer: 'no-question',
    },
    {
      questionNumber: 2,
      title: `À l’indice de référence et au taux sans risque`,
      choices: [
        {
          value: '1 an',
          label: '1 an',
        },
        {
          value: '3 ans',
          label: '3 ans',
        },
        {
          value: '5 ans',
          label: '5 ans',
        },
      ],
      answer: '3 ans',
    },
    {
      questionNumber: 3,
      title: `À l’indice de référence mais pas au taux sans risque`,
      choices: [
        {
          value: '1 an',
          label: '1 an',
        },
        {
          value: '3 ans',
          label: '3 ans',
        },
        {
          value: '5 ans',
          label: '5 ans',
        },
      ],
      answer: '1 an',
    },
    {
      questionNumber: 4,
      title: `En période de sous-performance, le gérant a-t-il eu tendance par rapport à l’indice à ?`,
      choices: [
        {
          value: 'Accroître la prise de risque',
          label: 'Accroître la prise de risque',
        },
        {
          value: 'Diminuer la prise de risque',
          label: 'Diminuer la prise de risque',
        },
      ],
      answer: 'Diminuer la prise de risque',
    },
    {
      questionNumber: 5,
      title: `Quel est selon vous l’objectif de cette décision ?`,
      choices: [
        {
          value: 'Stabiliser la performance',
          label: 'Stabiliser la performance',
        },
        {
          value: 'Renoncer à surperformer',
          label: 'Renoncer à surperformer',
        },
      ],
      answer: 'Stabiliser la performance',
    },
  ],
  synthese: {
    firstDescription: {
      __html: `La capacité du gérant à ajouter de la performance en fonction du risque pris est mesurée soit par rapport à l’indice de référence (Ratio d’information positif), soit par rapport au taux sans risque (Ratio de Sharpe positif), soit par rapport aux deux (3 ans pour le fonds actions B).
      Sur 1 an le gérant a ajouté de la performance par rapport à l’indice de référence mais, compte-tenu de la baisse du marché, cela n’a pas suffi à créer un supplément de performance par rapport au taux sans risque. 
      Pour surperformer, le gérant pilote le risque du fonds (indicateurs de Volatilité et Tracking Error), et veille à ne pas prendre de risque excessif. En cas de sous-performance (5 ans pour le fonds actions B), il est ainsi plus prudent de stabiliser la performance avant de reprendre du risque par rapport à l’indice. C’est le cas du fonds actions B puisque la Tracking Error sur 5 ans est inférieure à celle constatée sur 1 et 3 ans.`,
    },
  },
};

export default module_09_02_blocQCMType2;
