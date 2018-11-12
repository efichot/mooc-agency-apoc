import React from 'react';
import PropTypes from 'prop-types';

import BlocDragAndDropType1 from '../components/BlocDragAndDropType1';
import BlocDescription from '../components/BlocDescription';
import BlocDivider from '../components/BlocDivider';
import BlocVideo from '../components/BlocVideo';
import BlocUpAndDownType1 from '../components/BlocUpAndDownType1';
import Fade from '../transitions/Fade';
import moduleTypes from '../model/static/moduleTypes';

class Step7_01 extends React.Component {
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
    const step7 = this.props.context.module_04;

    // const stepInStep0 = this.state.showNextModule === 1;
    // const stepInStep1 = this.state.showNextModule === 2;
    const stepInStep2 = this.state.showNextModule === 3;

    return (
      <Fade in={this.props.in}>
        <BlocDescription
          in={this.props.in}
          scrollIntoView={this.props.in}
          modulType={step7.module_04_01.modulType}
          description={step7.module_04_01.description}
          padding={20}
        />
        <BlocDragAndDropType1
          in={this.props.in}
          {...step7.module_04_02}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocDragAndDrop1}-1`}
        />
        <BlocDivider in={this.props.in} />
        <BlocDragAndDropType1
          in={this.props.in}
          // scrollIntoView={stepInStep0}
          {...step7.module_04_03}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocDragAndDrop1}-2`}
        />
        <BlocDivider in={this.props.in} />
        <BlocVideo in={this.props.in} /*scrollIntoView={stepInStep1}*/ {...step7.module_04_04} />
        <BlocUpAndDownType1
          in={this.props.in}
          {...step7.module_04_05}
          gameIsFinished={this.handleShowNextModule}
          margins
          modulType={`${moduleTypes.blocUpAndDownType1}-1`}
        />
        <BlocUpAndDownType1
          in={this.props.in}
          scrollIntoView={stepInStep2}
          {...step7.module_04_06}
          gameIsFinished={this.handleShowNextModule}
          modulType={`${moduleTypes.blocUpAndDownType1}-2`}
          noHeader
        />
      </Fade>
    );
  }
}

Step7_01.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func,
};

Step7_01.defaultProps = {};

export default Step7_01;
