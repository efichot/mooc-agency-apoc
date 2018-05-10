import module_01_blocVideo from './step3/module_01_blocVideo';
import module_02_blocSubmenu1 from './step3/module_02_blocSubmenu1';
import module_03_02_blocTextToFill from './step3/module_03_02_blocTextToFill';
import module_03_01_blocLink from './step3/module_03_01_blocLink';
import module_04_01_blocLink from './step3/module_04_01_blocLink';
import module_05_01_blocLink from './step3/module_05_01_blocLink';
import module_06_01_blocLink from './step3/module_06_01_blocLink';
import module_04_02_blocTextToFill from './step3/module_04_02_blocTextToFill';
import module_05_02_blocTextToFill from './step3/module_05_02_blocTextToFill';
import module_06_02_blocTextToFill from './step3/module_06_02_blocTextToFill';
import module_07_blocSynthese from './step3/module_07_blocSynthese';

const step3 = {
  linkStep: 3,
  title: 'Risque / Performance',
  module_01: module_01_blocVideo,
  module_02: module_02_blocSubmenu1,
  module_03: {
    module_03_02: module_03_02_blocTextToFill,
    module_03_01: module_03_01_blocLink
  },
  module_04: {
    module_04_01: module_04_01_blocLink,
    module_04_02: module_04_02_blocTextToFill
  },
  module_05: {
    module_05_01: module_05_01_blocLink,
    module_05_02: module_05_02_blocTextToFill
  },
  module_06: {
    module_06_01: module_06_01_blocLink,
    module_06_02: module_06_02_blocTextToFill
  },
  module_07: module_07_blocSynthese
};

export default step3;
