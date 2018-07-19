const actionTypes = {
  FETCH_OKRS: 'FETCH_OKRS',
  ADD_OBJECTIVE: 'ADD_OBJECTIVE',
  ADDED_OBJECTIVE: 'ADDED_OBJECTIVE',
  FETCH_OBJECTIVE: 'FETCH_OBJECTIVE',
  FETCH_OBJECTIVE_ASYNC: 'FETCH_OBJECTIVE_ASYNC',
  FETCHED_OBJECTIVE: 'FETCHED_OBJECTIVE',
  FETCHED_OBJECTIVE_ERROR: 'FETCHED_OBJECTIVE_ERROR',
  FETCH_OBJECTIVES: 'FETCH_OBJECTIVES',
  FETCHED_OBJECTIVES: 'FETCHED_OBJECTIVES',
  FETCH_PREVIOUS_OBJECTIVES: 'FETCH_PREVIOUS_OBJECTIVES',
  FETCHED_PREVIOUS_OBJECTIVES: 'FETCHED_PREVIOUS_OBJECTIVES',
  FETCHED_PREVIOUS_OBJECTIVES_ERROR: 'FETCHED_PREVIOUS_OBJECTIVES_ERROR',
  FETCH_OBJECTIVE_CANDIDATES: 'FETCH_OBJECTIVE_CANDIDATES',
  FETCHED_OBJECTIVE_CANDIDATES: 'FETCHED_OBJECTIVE_CANDIDATES',
  UPDATE_OBJECTIVE: 'UPDATE_OBJECTIVE',
  UPDATED_OBJECTIVE: 'UPDATED_OBJECTIVE',
  REMOVE_OBJECTIVE: 'REMOVE_OBJECTIVE',
  REMOVED_OBJECTIVE: 'REMOVED_OBJECTIVE',
  FETCH_KEY_RESULTS: 'FETCH_KEY_RESULTS',
  FETCHED_KEY_RESULTS: 'FETCHED_KEY_RESULTS',
  FETCH_KEY_RESULT_CANDIDATES: 'FETCH_KEY_RESULT_CANDIDATES',
  FETCHED_KEY_RESULT_CANDIDATES: 'FETCHED_KEY_RESULT_CANDIDATES',
  FETCH_TASK_KEY_RESULTS: 'FETCH_TASK_KEY_RESULTS',
  FETCHED_TASK_KEY_RESULTS: 'FETCHED_TASK_KEY_RESULTS',
  ADD_KEY_RESULT: 'ADD_KEY_RESULT',
  ADDED_KEY_RESULT: 'ADDED_KEY_RESULT',
  UPDATE_KEY_RESULT: 'UPDATE_KEY_RESULT',
  UPDATED_KEY_RESULT: 'UPDATED_KEY_RESULT',
  REMOVE_KEY_RESULT: 'REMOVE_KEY_RESULT',
  REMOVED_KEY_RESULT: 'REMOVED_KEY_RESULT',
  PROCESS_KEY_RESULT: 'PROCESS_KEY_RESULT',
  PROCESSED_KEY_RESULT: 'PROCESSED_KEY_RESULT',
  OPEN_KEY_RESULT_MODAL: 'OPEN_KEY_RESULT_MODAL',
  CLOSE_KEY_RESULT_MODAL: 'CLOSE_KEY_RESULT_MODAL',
  OPEN_OBJECTIVE_MODAL: 'OPEN_OBJECTIVE_MODAL',
  CLOSE_OBJECTIVE_MODAL: 'CLOSE_OBJECTIVE_MODAL',
  OPEN_OKR_MODAL: 'OPEN_OKR_MODAL',
  OPENED_OKR_MODAL: 'OPENED_OKR_MODAL',
  CLOSE_OKR_MODAL: 'CLOSE_OKR_MODAL',
  OPEN_AVATAR_MODAL: 'OPEN_AVATAR_MODAL',
  CLOSE_AVATAR_MODAL: 'CLOSE_AVATAR_MODAL',
  OPEN_LOGO_MODAL: 'OPEN_LOGO_MODAL',
  CLOSE_LOGO_MODAL: 'CLOSE_LOGO_MODAL',
  OPEN_ERROR_MODAL: 'OPEN_ERROR_MODAL',
  CLOSE_ERROR_MODAL: 'CLOSE_ERROR_MODAL',
  ADD_USER: 'ADD_USER',
  ADDED_USER: 'ADDED_USER',
  UPDATE_USER: 'UPDATE_USER',
  UPDATED_USER: 'UPDATED_USER',
  REMOVE_USER: 'REMOVE_USER',
  REMOVED_USER: 'REMOVED_USER',
  RESTORE_USER: 'RESTORE_USER',
  RESTORED_USER: 'RESTORED_USER',
  UPDATE_AVATAR: 'UPDATE_AVATAR',
  UPDATED_AVATAR: 'UPDATED_AVATAR',
  UPDATE_LOGO: 'UPDATE_LOGO',
  UPDATED_LOGO: 'UPDATED_LOGO',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATED_EMAIL: 'UPDATED_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  UPDATED_PASSWORD: 'UPDATED_PASSWORD',
  RESEND_EMAIL: 'RESEND_EMAIL',
  UPDATE_OBJECTIVE_ORDER: 'UPDATE_OBJECTIVE_ORDER',
  UPDATED_OBJECTIVE_ORDER: 'UPDATED_OBJECTIVE_ORDER',
  UPDATE_USER_SETTING: 'UPDATE_USER_SETTING',
  UPDATED_USER_SETTING: 'UPDATED_USER_SETTING',
  FETCH_ORGANIZATION: 'FETCH_ORGANIZATION',
  FETCHED_ORGANIZATION: 'FETCHED_ORGANIZATION',
  ADD_ORGANIZATION: 'ADD_ORGANIZATION',
  ADDED_ORGANIZATION: 'ADDED_ORGANIZATION',
  UPDATE_ORGANIZATION: 'UPDATE_ORGANIZATION',
  UPDATED_ORGANIZATION: 'UPDATED_ORGANIZATION',
  UPDATE_ORGANIZATION_OWNER: 'UPDATE_ORGANIZATION_OWNER',
  UPDATED_ORGANIZATION_OWNER: 'UPDATED_ORGANIZATION_OWNER',
  UPDATE_CURRENT_ORGANIZATION_ID: 'UPDATE_CURRENT_ORGANIZATION_ID',
  UPDATED_CURRENT_ORGANIZATION_ID: 'UPDATED_CURRENT_ORGANIZATION_ID',
  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_PASSWORD_COMPLETED: 'RESET_PASSWORD_COMPLETED',
  SET_PASSWORD: 'SET_PASSWORD',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  OPEN_LOADING: 'OPEN_LOADING',
  CLOSE_LOADING: 'CLOSE_LOADING',
  FORCE_CLOSE_LOADING_ON: 'FORCE_CLOSE_LOADING_ON',
  FORCE_CLOSE_LOADING_OFF: 'FORCE_CLOSE_LOADING_OFF',
  OPEN_CONFIRM_MODAL: 'OPEN_CONFIRM_MODAL',
  CLOSE_CONFIRM_MODAL: 'CLOSE_CONFIRM_MODAL',
  OPEN_OPTION_MODAL: 'OPEN_OPTION_MODAL',
  CLOSE_OPTION_MODAL: 'CLOSE_OPTION_MODAL',
  ADD_OKR_PERIOD: 'ADD_OKR_PERIOD',
  ADDED_OKR_PERIOD: 'ADDED_OKR_PERIOD',
  UPDATE_OKR_PERIOD: 'UPDATE_OKR_PERIOD',
  UPDATED_OKR_PERIOD: 'UPDATED_OKR_PERIOD',
  REMOVE_OKR_PERIOD: 'REMOVE_OKR_PERIOD',
  REMOVED_OKR_PERIOD: 'REMOVED_OKR_PERIOD',
  SELECT_OKR_PERIOD: 'SELECT_OKR_PERIOD',
  SELECTED_OKR_PERIOD: 'SELECTED_OKR_PERIOD',
  SELECT_USER: 'SELECT_USER',
  SELECTED_USER: 'SELECTED_USER',
  SELECT_TAB: 'SELECT_TAB',
  HIGHLIGHT_OKR: 'HIGHLIGHT_OKR',
  UNHIGHLIGHT_OKR: 'UNHIGHLIGHT_OKR',
  SELECT_OKR: 'SELECT_OKR',
  SELECTED_OKR: 'SELECTED_OKR',
  SELECT_MAP_OKR: 'SELECT_MAP_OKR',
  SELECTED_MAP_OKR: 'SELECTED_MAP_OKR',
  CLEAR_MAP_OKR: 'CLEAR_MAP_OKR',
  EXPAND_OBJECTIVE: 'EXPAND_OBJECTIVE',
  EXPANDED_OBJECTIVE: 'EXPANDED_OBJECTIVE',
  COLLAPSE_OBJECTIVE: 'COLLAPSE_OBJECTIVE',
  EXPAND_KEY_RESULT: 'EXPAND_KEY_RESULT',
  EXPANDED_KEY_RESULT: 'EXPANDED_KEY_RESULT',
  COLLAPSE_KEY_RESULT: 'COLLAPSE_KEY_RESULT',
  SHOW_TOAST: 'SHOW_TOAST',
  CLEAR_TOAST: 'CLEAR_TOAST',
};
export default actionTypes;
