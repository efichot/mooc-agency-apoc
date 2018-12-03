import moduleTypes from '../moduleTypes';

const module_01_blocVideo = {
  position: 1,
  modulType: moduleTypes.blocVideo,
  name: `Vidéo Introductive`,
  firstDescription: {
    __html: `Découvrez le contenu de ce module en visionnant la vidéo ci-dessous.`,
  },
  videoUrl: 'https://player.vimeo.com/video/245753008',
  secondDescription: {
    __html: `Deux grands types de documents existent pour rendre compte de la gestion des fonds aux épargnants&nbsp;:

-&nbsp;le document d’information clé pour l’investisseur (DICI) ou Key Information Document en anglais (KID),
-&nbsp;la fiche de reporting publiée par la société de gestion.

Ils contiennent un certain nombre d’indicateurs qui permettent à l’épargnant de vérifier si la gestion du fonds remplit bien les objectifs affichés, et de juger de la qualité des performances réalisées en fonction notamment du profil de risque et de l’approche de gestion du fonds décrite dans la politique et l’objectif d’investissement.

Ces performances peuvent être évaluées par rapport à l’évolution des marchés financiers sur lesquels le fonds est investi, grâce aux indices de référence.`,
  },
};

export default module_01_blocVideo;
