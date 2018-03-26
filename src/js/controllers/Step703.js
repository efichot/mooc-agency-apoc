import React from 'react';
import BlocDescription from '../views/BlocDescription';
import BlocEnSavoirPlusType1 from '../views/BlocEnSavoirPlusType1';
import BlocQCMType1 from '../views/BlocQCMType1';
import BlocVideo from '../views/BlocVideo';
import BlocDivider from '../views/BlocDivider';
import PropTypes from 'prop-types';

// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

export default class Step7_03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextModule: 0
    };

    this.handleShowNextModule = this.handleShowNextModule.bind(this);
  }

  handleShowNextModule() {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    this.props.endOfModules(true);
  }

  render() {
    const step7 = this.props.context.module_06;

    return (
      <React.Fragment>
        <BlocDescription description={step7.module_06_01.description} padding />
        <BlocEnSavoirPlusType1 context={step7.module_06_02} />
        <BlocDivider />
        <BlocQCMType1
          context={step7.module_06_03}
          gameIsFinished={this.handleShowNextModule}
        />
        {this.state.showNextModule > 0 && (
          <React.Fragment>
            <BlocDivider />
            <BlocVideo context={step7.module_06_04} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

Step7_03.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};
