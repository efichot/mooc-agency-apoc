import React from 'react';
import BlocDragAndDrop1 from '../modules/BlocDragAndDrop1';
import BlocDescription from '../modules/BlocDescription';
import BlocDivider from '../modules/BlocDivider';
import BlocVideo from '../modules/BlocVideo';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
//import PropTypes from 'prop-types';

export default class Step7Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextModule: 0
    };

    this.handleGameIsFinished = this.handleGameIsFinished.bind(this);
  }

  handleGameIsFinished() {
    console.log('going to next module');
    this.setState({ showNextModule: this.state.showNextModule + 1 });
  }

  render() {
    return (
      <div className={`step step7-actions`}>
        <GlobalInfosContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                <BlocDescription
                  description={context.state.step7.module5.description}
                  padding
                />
                <BlocDragAndDrop1
                  context={context.state.step7.module6_actions_1}
                  gameIsFinished={this.handleGameIsFinished}
                />
                {this.state.showNextModule > 0 && <BlocDivider />}
                {this.state.showNextModule > 0 && (
                  <BlocDragAndDrop1
                    context={context.state.step7.module6_actions_2}
                    gameIsFinished={this.handleGameIsFinished}
                  />
                )}
                {this.state.showNextModule > 1 && <BlocDivider />}
                {this.state.showNextModule > 1 && (
                  <BlocVideo context={context.state.step7.module6_actions_3} />
                )}
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </div>
    );
  }
}

Step7Actions.propTypes = {};
