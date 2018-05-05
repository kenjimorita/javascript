import ObjectiveModal from '../components/objectivemodal/ObjectiveModal';
import { connect } from 'react-redux';
import objectiveActions from '../actions/objectives';
import dialogActions from '../actions/dialogs';
import { getIsolatedObjectives } from '../utils/okr'
import { denormalizeObjectives, denormalizeKeyResults } from "../schemas"

const mapStateToProps = (state) => {
  const parentKeyResult = state.dialogs.getIn(['objectiveForm', 'parentKeyResult']);
  return {
    isOpen: state.dialogs.getIn(['objectiveForm', 'isOpen']),
    parentKeyResult,
    currentUserId: state.current.get('userId'),
    users: state.users.filter(user => !user.get('disabled')),
    okrPeriodId: state.current.get('okrPeriodId'),
    parentKeyResults: denormalizeKeyResults(state.keyResults.get('ids'), state.entities),
    isFetchedKeyResults: state.keyResults.get('isFetchedKeyResults'),
    objectives: getIsolatedObjectives(state),
    isFetchedObjectives: state.objectives.get('isFetchedObjectives'),
    previousObjectives: denormalizeObjectives(state.objectives.get('previousIds'), state.entities),
    isFetchedPreviousObjectives: state.objectives.get('isFetchedPreviousObjectives'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addObjective: (objective, viaHome, isCopy) => {
      dispatch(objectiveActions.addObjective(objective, viaHome, isCopy))
    },
    updateObjective: objective => {
      dispatch(objectiveActions.updateObjective(objective));
    },
    closeModal: () => {
      dispatch(dialogActions.closeObjectiveModal());
    },
    confirm: params => {
      dispatch(dialogActions.openConfirmModal(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ObjectiveModal);
