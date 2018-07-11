import OkrPath from '../components/map/OkrPath'
import { connect } from 'react-redux'
import { isMembersObjectiveById } from '../utils/okr'

const mapStateToProps = (state, { toObjectiveId }) => {
  return {
    isMember: isMembersObjectiveById(toObjectiveId, state.entities),
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OkrPath)
