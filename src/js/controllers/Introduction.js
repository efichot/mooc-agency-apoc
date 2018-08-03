import React from 'react';
import PropTypes from 'prop-types';

import UserGameInfos from '../views/UserGameInfos';
import ChapterPresentation from '../views/ChapterPresentation';
import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';

class Introduction extends React.Component {
  state = {};

  componentDidMount() {
    this.props.tellAppIAmIntro(true);
  }

  render() {
    const { showPart1 } = this.props;

    return (
      <Fade in={this.props.in} classProps={`introduction`}>
        <UserGameInfos classProps={`introduction`} big part={showPart1 ? 'part1' : 'part2'} />
        <div className="actualities">
          <div className="white-div" />
          <div className="actualities__content">
            <div className="title">Actualité</div>
            <div className="content">
              Découvrir les coulisses de votre épargne salariale vous tente ? Pour faire partie des 6 lauréats qui
              passeront une ½ journée avec les gérants d’Amundi, lancez-vous sans plus tarder !
            </div>
          </div>
        </div>

        <GlobalInfosContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                {Object.keys(context.state.stepNavigation)
                  .filter(key => context.state.stepNavigation[`${key}`].visible)
                  .filter(
                    key =>
                      context.state.stepNavigation[`${key}`].part === (showPart1 ? 1 : 2) ||
                      context.state.stepNavigation[`${key}`].part === 'all',
                  )
                  .map((key, i) => (
                    <ChapterPresentation
                      in
                      key={i}
                      classProps={`introduction`}
                      secondClass={context.state.stepNavigation[`${key}`].secondClass}
                      zIndex={20 + i}
                      step={context.state.stepNavigation[`${key}`].stepLink}
                      name={context.state.stepNavigation[`${key}`].name}
                      videoUrl={context.state.stepNavigation[`${key}`].videoUrl}
                      description={
                        context.state.stepNavigation[`${key}`].description &&
                        context.state.stepNavigation[`${key}`].description
                      }
                      button={
                        context.state.stepNavigation[`${key}`].buttonName && {
                          link: `step${context.state.stepNavigation[`${key}`].stepLink}`,
                          name: `${context.state.stepNavigation[`${key}`].buttonName}`,
                          classes: '',
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
  showPart1: PropTypes.bool,
};

Introduction.defaultProps = {
  in: false,
  showPart1: false,
};

export default Introduction;
