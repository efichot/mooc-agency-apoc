import module_01_blocVideo from './step7/module_01_blocVideo';
import module_02_blocVideo from './step7/module_02_blocVideo';
import module_03_blocSubmenu1 from './step7/module_03_blocSubmenu1';
import module_07_blocSynthese from './step7/module_07_blocSynthese';
import module_08_blocVideo from './step7/module_08_blocVideo';
import module_09_blocQuiz from './step7/module_09_blocQuiz';

import module_04_01_blocDescription from './step7/module_04_01_blocDescription';
import module_04_02_blocDragAndDropType1 from './step7/module_04_02_blocDragAndDropType1';
import module_04_03_blocDragAndDropType1 from './step7/module_04_03_blocDragAndDropType1';
import module_04_04_blocVideo from './step7/module_04_04_blocVideo';
import module_04_05_blocUpAndDownType1 from './step7/module_04_05_blocUpAndDownType1';
import module_04_06_blocUpAndDownType1 from './step7/module_04_06_blocUpAndDownType1';

import module_05_01_blocDescription from './step7/module_05_01_blocDescription';
import module_05_02_blocEnSavoirPlusType1 from './step7/module_05_02_blocEnSavoirPlusType1';
import module_05_03_blocDragAndDrop1 from './step7/module_05_03_blocDragAndDrop1';
import module_05_04_blocDragAndDrop1 from './step7/module_05_04_blocDragAndDrop1';
import module_05_05_blocVideo from './step7/module_05_05_blocVideo';
import module_05_06_blocUpAndDownType1 from './step7/module_05_06_blocUpAndDownType1';
import module_05_07_blocUpAndDownType1 from './step7/module_05_07_blocUpAndDownType1';

import module_06_01_blocDescription from './step7/module_06_01_blocDescription';
import module_06_02_blocEnSavoirPlusType1 from './step7/module_06_02_blocEnSavoirPlusType1';
import module_06_03_blocQCMType1 from './step7/module_06_03_blocQCMType1';
import module_06_04_blocVideo from './step7/module_06_04_blocVideo';

const step7 = {
  linkStep: 7,
  title: 'Principes',
  module_01: module_01_blocVideo,
  module_02: module_02_blocVideo,
  module_03: module_03_blocSubmenu1,
  module_04: {
    module_04_01: module_04_01_blocDescription,
    module_04_02: module_04_02_blocDragAndDropType1,
    module_04_03: module_04_03_blocDragAndDropType1,
    module_04_04: module_04_04_blocVideo,
    module_04_05: module_04_05_blocUpAndDownType1,
    module_04_06: module_04_06_blocUpAndDownType1
  },
  module_05: {
    module_05_01: module_05_01_blocDescription,
    module_05_02: module_05_02_blocEnSavoirPlusType1,
    module_05_03: module_05_03_blocDragAndDrop1,
    module_05_04: module_05_04_blocDragAndDrop1,
    module_05_05: module_05_05_blocVideo,
    module_05_06: module_05_06_blocUpAndDownType1,
    module_05_07: module_05_07_blocUpAndDownType1
  },
  module_06: {
    module_06_01: module_06_01_blocDescription,
    module_06_02: module_06_02_blocEnSavoirPlusType1,
    module_06_03: module_06_03_blocQCMType1,
    module_06_04: module_06_04_blocVideo
  },
  module_07: module_07_blocSynthese,
  module_08: module_08_blocVideo,
  module_09: module_09_blocQuiz
};

export default step7;
