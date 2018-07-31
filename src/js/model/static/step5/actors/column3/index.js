import AMUNDI from './AMUNDI';
import AXA from './AXA';
import BNP from './BNP';
import ERAFP from './ERAFP';
import HSBC from './HSBC';
import MARTIN from './MARTIN';
import SG from './SG';

const name = 'Investisseurs';
const actorsObject = {
  ERAFP,
  AXA,
  HSBC,
  BNP,
  MARTIN,
  SG,
  AMUNDI,
};

const actorsArray = Object.keys(actorsObject).map(key => ({ ...actorsObject[key] }));

export default {
  name,
  actorsObject,
  actorsArray,
  actorsTitles: {
    AMUNDI: AMUNDI.title,
    AXA: AXA.title,
    BNP: BNP.title,
    ERAFP: ERAFP.title,
    HSBC: HSBC.title,
    MARTIN: MARTIN.title,
    SG: SG.title,
  },
};
