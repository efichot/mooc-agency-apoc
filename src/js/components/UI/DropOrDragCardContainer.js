import React from 'react';
import DragCard from './DragCard';
import DropCard from './DropCard';
import PropTypes from 'prop-types';

class DropOrDragCardContainer extends React.Component {
  state = {};

  render() {
    const { dragStartOrEnd, dragPosition, connectDropTarget, isOver } = this.props;

    return (
      <div className="drop-card__container">
        <DropCard className={`drop-card`}>{this.props.children}</DropCard>
      </div>
    );
  }
}

DropOrDragCardContainer.propTypes = {
  dragStartOrEnd: PropTypes.number.isRequired,
  dragPosition: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
};

DropOrDragCardContainer.defaultProps = {};

export default DropOrDragCardContainer;
