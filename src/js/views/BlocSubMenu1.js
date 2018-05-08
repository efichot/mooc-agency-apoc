import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithArrow from './UI/ButtonWithArrow';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';

class BlocSubMenu1 extends React.Component {
  state = {};

  handleButtonClick = changeMarketToShow => {
    this.props.action(changeMarketToShow);
  };

  render() {
    const { modulType, description, buttons, noDescription } = this.props;

    return (
      <Fade classProps={`bloc-sub-menu-1 bloc`} in={this.props.in}>
        {!noDescription && (
          <BlocDescription
            modulType={modulType}
            classProps="bloc-sub-menu-1__description"
            description={description}
          />
        )}
        <div className="bloc-sub-menu-1__buttons">
          {buttons.map((button, i) => {
            return (
              <ButtonWithArrow
                key={button.action}
                button={button}
                onClick={this.handleButtonClick}
              />
            );
          })}
        </div>
      </Fade>
    );
  }
}

BlocSubMenu1.propTypes = {
  in: PropTypes.bool,
  action: PropTypes.func.isRequired,
  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired
    })
  ).isRequired,
  noDescription: PropTypes.bool
};

BlocSubMenu1.defaultProps = {
  in: false,
  noDescription: false
};

export default BlocSubMenu1;
