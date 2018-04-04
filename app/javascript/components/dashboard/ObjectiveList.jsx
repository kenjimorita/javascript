import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Objective from './Objective';

class ObjectiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectiveOrder: props.objectiveOrder,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.objectiveOrder.equals(this.props.objectiveOrder)) {
      this.setState({ objectiveOrder: nextProps.objectiveOrder });
    }
  }

  moveObjective = (fromIndex, toIndex) => {
    if (0 <= toIndex && toIndex < this.state.objectiveOrder.size) {
      this.setState({ objectiveOrder: this.getNewObjectiveOrder(fromIndex, toIndex) });
    }
  }

  updateObjectiveOrder = (fromIndex, toIndex) => {
    const newObjectiveOrder = this.getNewObjectiveOrder(fromIndex, toIndex);
    if (!newObjectiveOrder.equals(this.props.objectiveOrder)) {
      this.props.updateObjectiveOrder({
        id: this.props.userId,
        objectiveOrder: JSON.stringify(newObjectiveOrder),
      });
    }
  }

  getNewObjectiveOrder = (fromIndex, toIndex) => {
    if (fromIndex >= 0 && toIndex >= 0) {
      const fromId = this.state.objectiveOrder.get(fromIndex);
      return this.state.objectiveOrder.delete(fromIndex).insert(toIndex, fromId);
    } else {
      return this.state.objectiveOrder;
    }
  }

  selectObjective = objective => {
    this.props.setMapObjective(objective);
    this.props.changeCurrentOkr(objective.get('id'));
  }

  render() {
    return (
      <div className='objective-list'>
        {this.props.objectives
          .sortBy(objective => this.state.objectiveOrder.indexOf(objective.get('id')))
          .map((objective, index) => {
            const objectiveId = objective.get('id');
            const isSelected = objectiveId === this.props.currentObjectiveId;
            return <Objective
              key={objectiveId}
              index={index}
              objective={objective}
              isSelected={isSelected}
              moveObjective={this.moveObjective}
              updateObjectiveOrder={this.updateObjectiveOrder}
              canMoveObjective={this.props.canMoveObjective}
              selectObjective={this.selectObjective.bind(this)} />
          })}
      </div>
    );
  }
}

ObjectiveList.propTypes = {
  objectives: PropTypes.object.isRequired,
  canMoveObjective: PropTypes.bool.isRequired,
  setMapObjective: PropTypes.func.isRequired,
  objectiveOrder: PropTypes.object.isRequired,
  updateObjectiveOrder: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

const isTouchSupport = 'ontouchstart' in window;
const backend = isTouchSupport ? TouchBackend : HTML5Backend;

export default DragDropContext(backend)(ObjectiveList);
