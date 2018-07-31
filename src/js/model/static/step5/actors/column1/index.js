import SPIE from './SPIE';
import LAFARGE from './LAFARGE';
import HEIDELBERG from './HEIDELBERG';
import RICARD from './RICARD';
import BANCAMONTE from './BANCAMONTE';
import BANCOSANTANDER from './BANCOSANTANDER';
import CARREFOUR from './CARREFOUR';
import ALLEMAGNE from './ALLEMAGNE';
import ITALIE from './ITALIE';
import ENEL from './ENEL';
import CREDITAGRICOLE from './CREDITAGRICOLE';
import LCL from './LCL';

const name = 'Émetteurs';

const actorsObject = {
  SPIE,
  LAFARGE,
  HEIDELBERG,
  RICARD,
  BANCAMONTE,
  BANCOSANTANDER,
  CARREFOUR,
  ALLEMAGNE,
  ITALIE,
  ENEL,
  CREDITAGRICOLE,
  LCL,
};

const actorsArray = Object.keys(actorsObject).map(key => ({ ...actorsObject[key] }));

export default {
  name,
  actorsObject,
  actorsArray,
  actorsTitles: {
    SPIE: SPIE.title,
    LAFARGE: LAFARGE.title,
    HEIDELBERG: HEIDELBERG.title,
    RICARD: RICARD.title,
    BANCAMONTE: BANCAMONTE.title,
    BANCOSANTANDER: BANCOSANTANDER.title,
    CARREFOUR: CARREFOUR.title,
    ALLEMAGNE: ALLEMAGNE.title,
    ITALIE: ITALIE.title,
    ENEL: ENEL.title,
    CREDITAGRICOLE: CREDITAGRICOLE.title,
    LCL: LCL.title,
  },
};
