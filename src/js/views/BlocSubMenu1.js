import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithArrow from './UI/ButtonWithArrow';
import BlocDescription from './BlocDescription';
import Fade from '../transitions/Fade';

class BlocSubMenu1 extends React.Component {
  state = {};

  render() {
    const { modulType, description, buttons, noDescription, scrollIntoView, action } = this.props;

    return (
      <Fade
        classProps={`bloc-sub-menu-1 bloc`}
        in={this.props.in}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noDescription && (
          <BlocDescription modulType={modulType} classProps="bloc-sub-menu-1__description" description={description} />
        )}
        <div className="bloc-sub-menu-1__buttons game">
          {buttons.map((button, i) => {
            return (
              <ButtonWithArrow
                classOrigin="bloc-sub-menu-1"
                key={button.action}
                button={button}
                onClick={value => action(value)}
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
  description: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
    }),
  ).isRequired,
  noDescription: PropTypes.bool,
};

BlocSubMenu1.defaultProps = {
  in: false,
  scrollIntoView: false,
  noDescription: false,
};

export default BlocSubMenu1;
