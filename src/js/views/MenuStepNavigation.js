import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ButtonPrimary from './UI/ButtonPrimary';
import UserGameInfos from './UserGameInfos';
import stepNavigation from '../model/static/stepNavigation';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class MenuStepNavigation extends React.Component {
  state = {
    score: 0.75,
    progression: 0.87,
    rank: 53
  };

  handleClick = e => {
    this.props.changeShownPart(e);
  };

  render() {
    const { showPart1 } = this.props;

    return (
      <div className="menu-step-navigation">
        <div className="menu-step-navigation__frame">
          <div className="menu-step-navigation__title">
            <span>
              {showPart1
                ? stepNavigation.toggleParts.part1
                : stepNavigation.toggleParts.part2}
            </span>
          </div>
          <UserGameInfos classProps={`menu-step-navigation`} />
          {Object.keys(stepNavigation)
            .filter(
              key => stepNavigation[`${key}`].part === (showPart1 ? 1 : 2)
            )
            .map((key, i, stepsFiltered) => {
              return (
                <Link
                  key={stepNavigation[`${key}`].name}
                  to={`step${stepNavigation[`${key}`].stepLink}`}
                  className={`menu-step-navigation__step`}
                >
                  <div className="menu-step-navigation__step--bullet">
                    <FontAwesomeIcon icon={['fas', 'check-circle']} />
                  </div>
                  <div
                    className={`menu-step-navigation__step--content ${
                      i === stepsFiltered.length - 1 ? 'last-step' : ''
                    }`}
                  >
                    <div className="menu-step-navigation__step--name">
                      <span>{stepNavigation[`${key}`].name}</span>
                    </div>
                    <div className="menu-step-navigation__step--durations">
                      <span>
                        Détail min: {stepNavigation[`${key}`].detailsMin}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <Link to="/">
          <ButtonPrimary
            classProps={`menu-step-navigation__button`}
            name={
              showPart1
                ? `Poursuivre vers ${stepNavigation.toggleParts.part2}`
                : `Revenir à ${stepNavigation.toggleParts.part1}`
            }
            onClick={this.handleClick}
          />
        </Link>
      </div>
    );
  }
}

MenuStepNavigation.propTypes = {
  showPart1: PropTypes.bool.isRequired,
  changeShownPart: PropTypes.func.isRequired
};

MenuStepNavigation.defaultProps = {};

export default MenuStepNavigation;
