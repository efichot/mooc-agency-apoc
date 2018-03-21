import moduleTypes from './moduleTypes';

const step7 = {
  linkStep: 7,
  title: 'Principes',
  module1: {
    position: 1,
    modulType: moduleTypes.blocVideo,
    name: `Vidéo Introductive`,
    firstDescription: {
      __html: `Découvrez l'étape 7 en visionnant la vidéo ci-dessous.`
    },
    videoUrl: 'https://player.vimeo.com/video/185672502',
    secondDescription: {
      __html: `L’ensemble des transactions sur lesquelles vous avez travaillé aux étapes 5 et 6, ont toutes eu lieu en 2009 et 2010:
                  - d’avril 2009 à septembre 2009 pour les actions, 
                  - de janvier 2010 à octobre 2010 pour les obligations, 
                  - et en mai 2009 pour les titres de créance négociables. 

                  Nous vous proposons de quitter 2009-2010 pour faire un bond de 2 ans à 2 ans et demi dans le temps et vous projeter en octobre 2011.`
    }
  },
  module2: {
    position: 2,
    modulType: moduleTypes.blocDivider
  },
  module3: {
    position: 3,
    modulType: moduleTypes.blocVideo,
    name: `Contexte économique`,
    firstDescription: {
      __html: `Découvrez ce qui s’est passé dans le monde et sur les marchés financiers durant cette période en visionnant 
                la vidéo ci-dessous. Soyez attentif à la façon dont les différentes zones géographiques réagissent aux événements. 
                Cette vidéo vous permettra d'évaluer le risque des différents titres dans les séquences suivantes. `
    },
    videoUrl: 'https://player.vimeo.com/video/185882827',
    secondDescription: {
      __html: `Dans ce contexte économique décrit dans la vidéo ci-dessus, qu’est-il advenu des titres qui ont été échangés
                en 2009 et 2010 ?`
    }
  },
  module4: {
    position: 4,
    modulType: moduleTypes.blocSubMenu1,
    description: `Choisissez le marché financier (actions, obligations, monétaire) sur lequel vous souhaitez d’abord travailler :`,
    buttons: [
      {
        position: 1,
        type: 'ButtonPrimary',
        name: 'Entrer sur le marché actions',
        color: 'rgba(255,97,35,1.00)',
        action: 'showMarketActions'
      },
      {
        position: 2,
        type: 'ButtonPrimary',
        name: 'Entrer sur le marché obligataire',
        color: 'rgba(131,0,125,1.00)',
        action: 'showMarketObligatary'
      },
      {
        position: 3,
        type: 'ButtonPrimary',
        name: 'Entrer sur le marché monétaire',
        color: 'rgba(0,156,44,1.00)',
        action: 'showMarketMonetary'
      }
    ]
  },
  module5: {
    position: 5,
    modulType: moduleTypes.blocDragAndDrop1,
    linkWithBlocSubMenu1ButtonPosition: 1,
    description: `Parmi les actions qui ont été échangées en 2009, lesquelles vous semblent les plus risquées à la lumière de ce qui s’est passé jusqu’en octobre 2011 ? Quels émetteurs sont à votre avis les plus exposés, en terme géographique et en terme de secteur d'activité, aux événements retracés dans la vidéo ci-dessus ? `,
    cards: [
      {
        color: 'blue',
        startPosition: 4,
        endPosition: 3,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 1
        }
      },
      {
        color: 'red',
        startPosition: 1,
        endPosition: 4,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 2
        }
      },
      {
        color: 'yellow',
        startPosition: 3,
        endPosition: 2,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 3
        }
      },
      {
        color: 'black',
        startPosition: 2,
        endPosition: 1,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 4
        }
      },
      {
        color: 'brown',
        startPosition: 5,
        endPosition: 5,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 5
        }
      }
    ]
  }
};

export default step7;
