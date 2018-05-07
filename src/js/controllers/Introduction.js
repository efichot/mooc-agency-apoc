import React from 'react';
import PropTypes from 'prop-types';

import UserGameInfos from '../views/UserGameInfos';
import ChapterPresentation from '../views/ChapterPresentation';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';

class Introduction extends React.Component {
  state = {};

  render() {
    return (
      <Fade in={this.props.in} classProps={`introduction`}>
        <UserGameInfos classProps={`introduction`} big />

        <GlobalInfosContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                {Object.keys(context.state.stepNavigation)
                  .filter(key => context.state.stepNavigation[`${key}`].visible)
                  .filter(
                    key =>
                      context.state.stepNavigation[`${key}`].part ===
                        (this.props.showPart1 ? 1 : 2) ||
                      context.state.stepNavigation[`${key}`].part === 'all'
                  )
                  .map((key, i) => (
                    <ChapterPresentation
                      in
                      key={i}
                      classProps={`introduction`}
                      name={context.state.stepNavigation[`${key}`].name}
                      videoUrl={context.state.stepNavigation[`${key}`].videoUrl}
                      description={
                        context.state.stepNavigation[`${key}`].description &&
                        context.state.stepNavigation[`${key}`].description
                      }
                      button={
                        context.state.stepNavigation[`${key}`].buttonName && {
                          link: `step${
                            context.state.stepNavigation[`${key}`].stepLink
                          }`,
                          name: `${
                            context.state.stepNavigation[`${key}`].buttonName
                          }`,
                          classes: ''
                        }
                      }
                    />
                  ))}
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Introduction.propTypes = {
  in: PropTypes.bool,
  showPart1: PropTypes.bool
};

Introduction.defaultProps = {
  in: false,
  showPart1: false
};

export default Introduction;
