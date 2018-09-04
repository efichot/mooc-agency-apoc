import moduleTypes from '../moduleTypes';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';
import button_up_left from '../../../../assets/img/icons/button-up-left.png';

const module_04_blocPicChartPlay = {
  /*position: 4,*/
  modulType: moduleTypes.blocPicChartPlay,
  /*noChapter: false,*/
  iconType: 'horloge',
  duration: 3,
  chapter: 'Jeu des diagrammes',
  name: `Composition d'un fonds`,
  description: {
    __html: `Composez votre fonds selon l’allocation d’actifs qui vous a été indiquée précédemment ou telle que vous l’imaginez, à l’aide des boutons  <div class="button-in-description left" style="background-image: url(${button_up_left})"></div><div class="button-in-description right" style="background-image: url(${button_down_right})"></div>. 

    Au-delà des classes d’actifs « actions », « obligataire » et « monétaire » abordées précédemment, un nouveau type d’actif vous est proposé : les titres de l’entreprise. 
    Il s’agit des actions ou des obligations de votre entreprise que vous pouvez acquérir dans le cadre d’opérations d’actionnariat salarié qui seraient mises en place. 

    Vous pouvez composer votre fonds d’un ou plusieurs types d’actifs à votre convenance. 
    Le pourcentage de 0 à 100% et par tranche de 10% que vous affecterez à chacun, sera considéré comme la proportion que vous souhaitez lui donner dans le fonds.`,
  },
  buttons: [
    {
      position: 1,
      type: 'ButtonPrimary',
      name: 'actions',
      color: 'var(--action)',
      value: 10,
    },
    {
      position: 2,
      type: 'ButtonPrimary',
      name: 'obligations',
      color: 'var(--obligation)',
      value: 0,
    },
    {
      position: 3,
      type: 'ButtonPrimary',
      name: 'monétaire',
      color: 'var(--monetaire)',
      value: 0,
    },
    {
      position: 4,
      type: 'ButtonPrimary',
      name: `Titres de l'entreprise`,
      color: 'var(--titre)',
      value: 0,
    },
  ],
};

export default module_04_blocPicChartPlay;
