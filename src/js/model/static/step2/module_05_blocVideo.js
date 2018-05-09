import moduleTypes from '../moduleTypes';

const module_05_blocVideo = {
  position: 1,
  modulType: moduleTypes.blocVideo,
  name: `Mode d’emploi de la fiche de reporting`,
  firstDescription: {
    __html: `Contrairement au DICI, la fiche de reporting publiée par la société de gestion d'actifs qui gère le fonds, n’est pas standardisée et peut varier d’une société de gestion d'actifs à l’autre. 

    Les fonds en titres de l’entreprise étant constitués prioritairement d’actions ou d’obligations de la même entreprise, ils ne font pas l’objet d’une fiche de reporting mensuelle détaillée.

    Découvrez le contenu d’une fiche de reporting en visionnant la vidéo ci-dessous.`
  },
  videoUrl: 'https://player.vimeo.com/video/259835013',
  secondDescription: {
    __html: `À partir des données de reporting, comment analyser les fiches des différents fonds actions, obligataires, monétaires et de type mixte, et sur quels critères distinguer ces fonds ? `
  }
};

export default module_05_blocVideo;
