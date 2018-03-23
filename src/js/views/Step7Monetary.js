import React from 'react';
import BlocDescription from '../modules/BlocDescription';
import BlocEnSavoirPlusType1 from '../modules/BlocEnSavoirPlusType1';
import BlocQCMType1 from '../modules/BlocQCMType1';
import BlocVideo from '../modules/BlocVideo';
import BlocDivider from '../modules/BlocDivider';
import ButtonPrimary from '../UI/ButtonPrimary';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
//import PropTypes from 'prop-types';

export default class Step7Monetary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextModule: false
    };

    this.handleShowNextModule = this.handleShowNextModule.bind(this);
  }

  handleShowNextModule(e) {
    this.setState({ showNextModule: true });
  }

  render() {
    return (
      <div className={`step step7-obligations`}>
        <GlobalInfosContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                <BlocDescription
                  description={context.state.step7.module10.description}
                  padding
                />
                <BlocEnSavoirPlusType1 context={context.state.step7.module11} />
                <BlocDivider context={context.state.step7.module12} />
                <BlocQCMType1
                  context={context.state.step7.module13}
                  gameIsFinished={this.handleShowNextModule}
                />
                {this.state.showNextModule && (
                  <BlocDivider context={context.state.step7.module14} />
                )}
                {this.state.showNextModule && (
                  <BlocVideo context={context.state.step7.module15} />
                )}
                {this.state.showNextModule && (
                  <ButtonPrimary name="Poursuivre vers la vidéo des 3 marchés et le quiz de fin d'étape" />
                )}
                {this.state.showNextModule && (
                  <ButtonPrimary name="Entrer sur le forum" />
                )}
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step7Monetary.propTypes = {};
