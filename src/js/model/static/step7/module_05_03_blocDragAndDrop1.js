import moduleTypes from '../moduleTypes';
import button_finger from '../../../../assets/img/icons/button-finger.png';

const module_05_03_blocDragAndDrop1 = {
  /*position: 9,*/
  modulType: moduleTypes.blocDragAndDrop1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  firstDescription: {
    __html: `Classez sur l’axe horizontal, « de moins à plus de risque », les obligations d’État ci-dessous à l’aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div> en fonction de plusieurs paramètres&nbsp;: 
    - la visibilité est-elle meilleure à 5 ou 10 ans&nbsp;? 
    - quel État est le mieux noté et le plus solide dans le contexte économique décrit&nbsp;? 

    Puis validez. En cas de doute, visionnez à nouveau la 2ième partie de la vidéo intitulée CONTEXTE ÉCONOMIQUE.`,
  },
  noChapter: false,
  chapter: 'Échelle de risque',
  duration: 3,
  title: `Risque des obligations d'état`,
  cards: [
    {
      color: 'white',
      startPosition: 1,
      /*endPosition: 3,*/
      content: {
        isDraggable: false,
        cardTitle: `état allemand`,
        /*cardSubTitle: `BTP - non coté`,*/
        list: [
          `Noté en 2010 AAA par les agences Fitch et S&P, Aa2 par Moody’s`,
          `Après la chute d’activité de fin 2008-début 2009, rebond de l’économie dans un contexte de politique monétaire et fiscale accommodante, de reconstitution des stocks et de reprise des exportations notamment vers l’Asie `,
          `Aggravation du déficit de 0 à 3,3% du PIB en 2009 sous l’effet des mesures de soutien à l’économie (infrastructures, santé)`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `obligation état allemand`,
        cardSubTitle: `5 ans - 3,75%`,
        list: [
          `Émise en janvier 2010 et remboursée en janvier 2015`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 1 €)`,
          `Montant total de 23 milliards d’€ pour couvrir les besoins de financement à moyen terme de l’État allemand`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 3,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `obligation état allemand`,
        cardSubTitle: `10 ans - 3,75%`,
        list: [
          `Émise en janvier 2010 et remboursée en janvier 2020`,
          `Montant total de 24 milliards d’€ pour couvrir les besoins de financement à long terme de l’État allemand`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 4,
      /*endPosition: 3,*/
      content: {
        isDraggable: false,
        cardTitle: `état italien`,
        /*cardSubTitle: `BTP - non coté`,*/
        list: [
          `Noté en 2010 AA-, A+ et Aa2 par les agences Fitch, S&P et Moody’s`,
          `Chute de 5% du PIB en 2009 en raison de la baisse des exportations (-19% en volume), très orientées vers la zone euro (44% vs 2% vers la Chine), et de la demande intérieure (-12% en volume pour les investissements)`,
          `Fort impact sur le déficit qui passe de 2,7 à 5,3% du PIB en 2009 sous l’effet des mesures de soutien à l’économie (infrastructures, santé)`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 5,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `obligation état italien`,
        cardSubTitle: `5 ANS - 4,25%`,
        list: [
          `Émise en février 2010 et remboursée en février 2015`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 1 000 €)`,
          `Montant total de 21,35 milliards d’€ pour couvrir les besoins de financement à moyen terme de l’État italien`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 6,
      endPosition: 4,
      content: {
        isDraggable: true,
        cardTitle: `obligation état italien`,
        cardSubTitle: `10 ANS - 4,5%`,
        list: [
          `Émise en février 2010 et remboursée en février 2020`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 1 000 €)`,
          `Montant total de 22,66 milliards d’€ pour couvrir les besoins de financement à moyen terme de l’État italien`,
        ],
        legend: [],
      },
    },
  ],
};

export default module_05_03_blocDragAndDrop1;
