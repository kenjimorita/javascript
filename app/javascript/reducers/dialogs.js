import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import ActionTypes from '../constants/actionTypes'

const initialState = fromJS({
  objectiveForm: { isOpen: false },
  keyResultForm: { isOpen: false, objective: {} },
  okrForm: { isOpen: false, objectiveId: null, keyResultId: null },
  image: { isOpen: false, data: null },
  error: { isOpen: false },
  confirm: { isOpen: false },
  option: { isOpen: false },
})

export default handleActions({
  [ActionTypes.OPEN_OBJECTIVE_MODAL]: (state, { payload }) => {
    return state.set('objectiveForm', fromJS({ isOpen: true, parentKeyResult: payload.parentKeyResult }))
  },
  [ActionTypes.CLOSE_OBJECTIVE_MODAL]: (state) => {
    return state.set('objectiveForm', fromJS({ isOpen: false }))
  },
  [ActionTypes.OPEN_KEY_RESULT_MODAL]: (state, { payload }) => {
    return state.set('keyResultForm', fromJS({ isOpen: true, objective: payload.objective }))
  },
  [ActionTypes.CLOSE_KEY_RESULT_MODAL]: (state) => {
    return state.set('keyResultForm', fromJS({ isOpen: false }))
  },
  [ActionTypes.OPENED_OKR_MODAL]: (state, { payload }) => {
    return state.set('okrForm', fromJS({ isOpen: true, objectiveId: payload.objectiveId, keyResultId: payload.keyResultId }))
  },
  [ActionTypes.CLOSE_OKR_MODAL]: (state) => {
    return state.set('okrForm', fromJS({ isOpen: false, objectiveId: null, keyResultId: null }))
  },
  [ActionTypes.REMOVED_OBJECTIVE]: (state, { payload }) => {
    const objectiveId = payload.get('result').first()
    return state.setIn(['okrForm', 'removedObjectiveId'], objectiveId)
  },
  [ActionTypes.REMOVED_KEY_RESULT]: (state, { payload }) => {
    const keyResultId = payload.get('result').first()
    return state.setIn(['okrForm', 'removedKeyResultId'], keyResultId)
  },
  [ActionTypes.OPEN_IMAGE_MODAL]: (state, { payload: { id, data, type } }) => {
    return state.set('image', fromJS({ isOpen: true, id, data, type }))
  },
  [ActionTypes.CLOSE_IMAGE_MODAL]: (state) => {
    return state.set('image', fromJS({ isOpen: false }))
  },
  [ActionTypes.OPEN_ERROR_MODAL]: (state, { payload }) => {
    return state.set('error', fromJS(payload.params).merge({ isOpen: true }))
  },
  [ActionTypes.CLOSE_ERROR_MODAL]: (state) => {
    return state.setIn(['error', 'isOpen'], false)
  },
  [ActionTypes.OPEN_CONFIRM_MODAL]: (state, { payload }) => {
    return state.set('confirm', fromJS(payload.params).merge({ isOpen: true }))
  },
  [ActionTypes.CLOSE_CONFIRM_MODAL]: (state) => {
    return state.setIn(['confirm', 'isOpen'], false)
  },
  [ActionTypes.OPEN_OPTION_MODAL]: state => {
    return state.setIn(['option', 'isOpen'], true)
  },
  [ActionTypes.CLOSE_OPTION_MODAL]: state => {
    return state.setIn(['option', 'isOpen'], false)
  },
}, initialState)
