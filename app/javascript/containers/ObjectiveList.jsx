import ObjectiveList from '../components/dashboard/ObjectiveList';
import { connect } from 'react-redux';
import objectiveActions from '../actions/objectives';
import objectiveOrderActions from '../actions/objectiveOrders';
import { canMoveObjective } from "../utils/okr";

const mapStateToProps = (state) => {
  return {
    selectedObjectiveId: state.objectives.getIn(['selectedOkr', 'objectiveId']),
    objectiveOrder: state.objectives.get('ids'),
    canMoveObjective: canMoveObjective(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectOkr: objectiveId => {
      dispatch(objectiveActions.selectOkr(objectiveId));
    },
    updateObjectiveOrder: list => {
      dispatch(objectiveOrderActions.updateObjectiveOrder(list))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ObjectiveList);
