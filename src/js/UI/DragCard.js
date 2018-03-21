import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import CardContentType1 from './CardContentType1';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';

export default class DragCard extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {};
  //}

  render() {
    const { color, card, type } = this.props;

    return (
      <Draggable draggableId={this.props.id} index={0}>
        {(provided, snapshot) => (
          <div className={`drag-card`}>
            {type === 'bloc-drag-and-drop-1' && (
              <CardContentType1 content={this.props.content} />
            )}
          </div>
        )}
      </Draggable>
    );
  }
}

DragCard.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string
};
