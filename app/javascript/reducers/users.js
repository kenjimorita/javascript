import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import ActionTypes from '../constants/actionTypes';

export default handleActions({
    [ActionTypes.FETCHED_ORGANIZATION]: (state, { payload }) => {
      return payload.organization.get('members');
    },
    [ActionTypes.FETCHED_USER]: (state, { payload }) => {
      return payload.user;
    },
    [ActionTypes.FETCHED_USERS]: (state, { payload }) => {
      return state.merge(payload.users);
    },
    [ActionTypes.ADDED_USER]: (state, { payload }) => (
      state.push(payload.user)
    ),
    [ActionTypes.UPDATED_USER]: (state, { payload }) => {
      return state.set(state.findIndex((user) => {
        return user.get('id') === payload.user.get('id');
      }), payload.user);
    },
    [ActionTypes.UPDATED_AVATAR]: (state, { payload }) => {
      return state.set(state.findIndex((user) => {
        return user.get('id') === payload.user.get('id');
      }), payload.user);
    },
    [ActionTypes.REMOVED_USER]: (state, { payload }) => {
      return state.set(state.findIndex((user) => {
        return user.get('id') === payload.user.get('id');
      }), payload.user);
    },
    [ActionTypes.RESTORED_USER]: (state, { payload }) => {
      return state.set(state.findIndex((user) => {
        return user.get('id') === payload.user.get('id');
      }), payload.user).sortBy(user => user.get('id'));
    },
    [ActionTypes.UPDATED_PASSWORD]: (state, { payload }) => {
      return state.set(state.findIndex((user) => {
        return user.get('id') === payload.user.get('id');
      }), payload.user);
    },
  },
  fromJS([])
);
