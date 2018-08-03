import moduleTypes from '../moduleTypes';

const module_06_02_blocEnSavoirPlusType1 = {
  /*position: 11,*/
  modulType: moduleTypes.blocEnSavoirPlusType1,
  linkWithBlocSubMenu1ButtonPosition: 3,
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: `Agences de Notation`,
  firstDescription: {
    __html: `Pour plus de détail, passez la souris sur les différents termes et consultez le TABLEAU DES NOTATIONS ci-dessous.

              TABLEAU DES NOTATIONS 
              <a href="/notations _ long_terme.pdf">Notations à long terme </a>
              Fichier pdf`,
  },
  cards: [
    {
      color: 'rgba(0,145,0,1.00)',
      hoverColor: 'rgba(119,190,119,1.00)',
      startPosition: 1,
      arrowFollowing: true,
      cardTitle: 'Agences de Notation',
      cardContent: `Elles évaluent la capacité d’un emprunteur (État, collectivité locale ou entreprise) à rembourser le capital et les intérêts de ses dettes à un instant et sur une période donnés. Pour les obligations (dettes à plus d’un an), elles émettent des notes de crédit à long terme de A à D selon leur propre échelle. Une note composée d’un ou plusieurs A indique un risque de non-remboursement plus faible qu’une note composée d’un ou plusieurs C&nbsp;; elle évolue en fonction de l’augmentation ou la diminution du risque de crédit.`,
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,145,0,1.00)',
      hoverColor: 'rgba(0,145,0,1.00)',
      startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Fitch',
      cardContent: `Fondée par John Knowles Fitch en 1913 à New York, elle appartient au groupe américain Hearst Corporation (80%) et au groupe français Fimalac (20%).`,
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,145,0,1.00)',
      hoverColor: 'rgba(0,145,0,1.00)',
      startPosition: 3,
      arrowFollowing: false,
      cardTitle: `Standard and Poor's (S&P)`,
      cardContent: ` Elle est issue de la fusion de deux agences créées en 1916 et 1922 et appartient au groupe McGraw-Hill spécialisé dans les publications scientifiques et financières.`,
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,145,0,1.00)',
      hoverColor: 'rgba(0,145,0,1.00)',
      startPosition: 4,
      arrowFollowing: false,
      cardTitle: `Moody's`,
      cardContent: `Créée en 1909 par John Moody, journaliste financier reconverti, elle a pour principal actionnaire la société Berkshire Hathaway, holding du milliardaire américain Warren Buffet.`,
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,145,0,1.00)',
      hoverColor: 'rgba(0,145,0,1.00)',
      startPosition: 4,
      arrowFollowing: false,
      cardTitle: `Dagong`,
      cardContent: ` Agence de notation chinoise fondée en 1994, elle est aujourd’hui moins influente que ses aînées.`,
      cardSubTitle: `cf. Glossaire`,
    },
  ],
};

export default module_06_02_blocEnSavoirPlusType1;
