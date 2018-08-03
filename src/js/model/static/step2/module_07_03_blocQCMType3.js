import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_07_03_blocQCMType3.png';

const module_07_03_blocQCMType3 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: true,
  noPopup: true,
  chapter: `Questionnaire`,
  duration: 2,
  title: `Sur / sous-performance `,
  firstDescription: {
    __html: `Un fonds peut-il être performant tout en délivrant une performance négative&nbsp;? 

    À partir des données fournies ci-dessous, qualifiez les performances du fonds B en sélectionnant les bonnes réponses.

    <img src="${image}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Quelles années la performance de l’indice (marché obligataire euro crédit) est-elle négative ?`,
      selects: [
        {
          selectNumber: 11,
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
          selectNumber: 12,
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
          answer: 2015,
        },
      ],
    },
    {
      questionNumber: 2,
      title: `Quelles sont les 3 années successives où la performance relative du fonds est négative ?`,
      selects: [
        {
          selectNumber: 21,
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
          answer: 2006,
        },
        {
          selectNumber: 22,
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
          selectNumber: 23,
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
    },
    {
      questionNumber: 3,
      title: `Quelle année permet de rattraper cette sous-performance et de creuser l’écart par rapport à l’indice ?`,
      selects: [
        {
          selectNumber: 31,
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
          answer: 2009,
        },
      ],
    },
  ],
  synthese: {
    firstDescription: {
      __html: `La performance d’un fonds obligataire, comme celle du marché obligataire, peut être négative, en l’occurrence sur la période analysée : 2008 et 2015 pour le marché obligataire euro crédit (indice BARCLAYS EURO AGG CORPORATE) et, en absolu, 2007, 2008 et 2015 pour le fonds B.
      La performance relative du fonds B est négative trois années de suite, en 2006, 2007 et 2008, et c’est en 2009 que le fonds rattrape cette sous-performance et surperforme.
      La sur ou sous-performance du fonds par rapport à son indice de référence est ici matérialisée par l’écart. `,
    },
  },
};

export default module_07_03_blocQCMType3;
