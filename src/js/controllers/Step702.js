import React from 'react';
import PropTypes from 'prop-types';

import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
import BlocDescription from '../views/BlocDescription';
import BlocDivider from '../views/BlocDivider';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocVideo from '../views/BlocVideo';
import BlocUpAndDownType1 from '../views/BlocUpAndDownType1';
import Fade from '../transitions/Fade';

import moduleTypes from '../model/static/moduleTypes';

class Step7_02 extends React.Component {
  state = {
    showNextModule: 0,
  };

  handleShowNextModule = module => {
    if (module === `${moduleTypes.blocDragAndDrop1}-1`) {
      this.setState({ showNextModule: 1 });
    } else if (module === `${moduleTypes.blocDragAndDrop1}-2`) {
      this.setState({ showNextModule: 2 });
    } else if (module === `${moduleTypes.blocUpAndDownType1}-1`) {
      this.setState({ showNextModule: 3 });
    } else if (module === `${moduleTypes.blocUpAndDownType1}-2`) {
      this.setState({ showNextModule: 4 });
      this.props.endOfModules(true);
    }
  };

  render() {
    const step7 = this.props.context.module_05;

    // const stepInStep0 = this.state.showNextModule === 1;
    // const stepInStep1 = this.state.showNextModule === 2;
    const stepInStep2 = this.state.showNextModule === 3;

    return (
      <Fade in={this.props.in}>
        <BlocDescription
          in={this.props.in}
          scrollIntoView={this.props.in}
          modulType={step7.module_05_01.modulType}
          description={step7.module_05_01.description}
          padding={20}
        />
        <BlocEnSavoirPlusType1 in {...step7.module_05_02} />
        <BlocDragAndDropType1
          in={this.props.in}
          {...step7.module_05_03}
          gameIsFinished={this.handleShowNextModule}
          margins
          modulType={`${moduleTypes.blocDragAndDrop1}-1`}
        />
        {/*<BlocDivider in={stepInStep0} />*/}
        <BlocDragAndDropType1
          in={this.props.in}
          // scrollIntoView={stepInStep0}
          {...step7.module_05_04}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocDragAndDrop1}-2`}
        />
        <BlocDivider in={this.props.in} />
        <BlocVideo in={this.props.in} /*scrollIntoView={stepInStep1}*/ {...step7.module_05_05} />
        <BlocUpAndDownType1
          in={this.props.in}
          {...step7.module_05_06}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocUpAndDownType1}-1`}
          margins
        />
        <BlocUpAndDownType1
          in={this.props.in}
          scrollIntoView={stepInStep2}
          {...step7.module_05_07}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocUpAndDownType1}-2`}
          noHeader
        />
      </Fade>
    );
  }
}

Step7_02.propTypes = {
  in: PropTypes.bool,
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step7_02.defaultProps = {
  in: false,
};

export default Step7_02;
