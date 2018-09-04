import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_07_02_blocQCMType2.png';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const module_07_02_blocQCMType2 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: true,
  noPopup: true,
  chapter: `Questionnaire`,
  duration: 2,
  title: `Performance absolue / relative`,
  firstDescription: {
    __html: `Un fonds peut-il être performant tout en délivrant une performance négative&nbsp;? 

    À partir des données fournies ci-dessous, qualifiez les performances du fonds B en sélectionnant les bonnes réponses grâce au bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div>.

    <img src="${image}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Quelle année la performance absolue est-elle ?`,
      answer: 'no-question',
    },
    {
      questionNumber: 2,
      title: `La meilleure`,
      choices: [
        {
          value: 2015,
          label: 2015,
        },
        {
          value: 2014,
          label: 2014,
        },
        {
          value: 2013,
          label: 2013,
        },
        {
          value: 2012,
          label: 2012,
        },
        {
          value: 2011,
          label: 2011,
        },
        {
          value: 2010,
          label: 2010,
        },
        {
          value: 2009,
          label: 2009,
        },
        {
          value: 2008,
          label: 2008,
        },
        {
          value: 2007,
          label: 2007,
        },
        {
          value: 2006,
          label: 2006,
        },
      ],
      answer: 2013,
    },
    {
      questionNumber: 3,
      title: `La moins bonne`,
      choices: [
        {
          value: 2015,
          label: 2015,
        },
        {
          value: 2014,
          label: 2014,
        },
        {
          value: 2013,
          label: 2013,
        },
        {
          value: 2012,
          label: 2012,
        },
        {
          value: 2011,
          label: 2011,
        },
        {
          value: 2010,
          label: 2010,
        },
        {
          value: 2009,
          label: 2009,
        },
        {
          value: 2008,
          label: 2008,
        },
        {
          value: 2007,
          label: 2007,
        },
        {
          value: 2006,
          label: 2006,
        },
      ],
      answer: 2008,
    },
    {
      questionNumber: 4,
      title: `Quelle année la performance relative est-elle ?`,
      answer: 'no-question',
    },
    {
      questionNumber: 5,
      title: `La meilleure`,
      choices: [
        {
          value: 2015,
          label: 2015,
        },
        {
          value: 2014,
          label: 2014,
        },
        {
          value: 2013,
          label: 2013,
        },
        {
          value: 2012,
          label: 2012,
        },
        {
          value: 2011,
          label: 2011,
        },
        {
          value: 2010,
          label: 2010,
        },
        {
          value: 2009,
          label: 2009,
        },
        {
          value: 2008,
          label: 2008,
        },
        {
          value: 2007,
          label: 2007,
        },
        {
          value: 2006,
          label: 2006,
        },
      ],
      answer: 2008,
    },
    {
      questionNumber: 6,
      title: `La moins bonne`,
      choices: [
        {
          value: 2015,
          label: 2015,
        },
        {
          value: 2014,
          label: 2014,
        },
        {
          value: 2013,
          label: 2013,
        },
        {
          value: 2012,
          label: 2012,
        },
        {
          value: 2011,
          label: 2011,
        },
        {
          value: 2010,
          label: 2010,
        },
        {
          value: 2009,
          label: 2009,
        },
        {
          value: 2008,
          label: 2008,
        },
        {
          value: 2007,
          label: 2007,
        },
        {
          value: 2006,
          label: 2006,
        },
      ],
      answer: 2007,
    },
    {
      questionNumber: 7,
      title: `Quelle année la performance absolue est-elle négative en dépit d’une performance relative positive ?`,
      choices: [
        {
          value: 2015,
          label: 2015,
        },
        {
          value: 2014,
          label: 2014,
        },
        {
          value: 2013,
          label: 2013,
        },
        {
          value: 2012,
          label: 2012,
        },
        {
          value: 2011,
          label: 2011,
        },
        {
          value: 2010,
          label: 2010,
        },
        {
          value: 2009,
          label: 2009,
        },
        {
          value: 2008,
          label: 2008,
        },
        {
          value: 2007,
          label: 2007,
        },
        {
          value: 2006,
          label: 2006,
        },
      ],
      answer: 2008,
    },
  ],
  synthese: {
    firstDescription: {
      __html: `Sur la période analysée, 2008 est l’année où la performance du fonds B est à la fois la moins bonne en absolu (-36,95%) et la meilleure en relatif (+7,14%). 2013 enregistre la meilleure performance absolue (+24,45%) et 2007 la moins bonne performance relative (-2,66%).
      En 2008 les bons choix de gestion faits par le gérant n’ont pu compenser la baisse de l’ensemble du marché. `,
    },
  },
};

export default module_07_02_blocQCMType2;
