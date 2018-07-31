import CACIB from './CACIB';
import ODDO from './ODDO';
import CFT from './CFT';
import CACHEVREUX from './CACHEVREUX';

const name = 'Intermédiaires';
const actorsObject = {
  CACIB,
  ODDO,
  CFT,
  CACHEVREUX,
};

const actorsArray = Object.keys(actorsObject).map(key => ({ ...actorsObject[key] }));

export default {
  name,
  actorsObject,
  actorsArray,
  actorsTitles: {
    CACIB: CACIB.title,
    ODDO: ODDO.title,
    CFT: CFT.title,
    CACHEVREUX: CACHEVREUX.title,
  },
};
