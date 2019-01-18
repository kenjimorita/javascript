import { all, put, take, takeLatest, select } from "redux-saga/effects";
import call, { callInSilent } from "../utils/call";
import API from "../utils/api";
import objectiveActions from "../actions/objectives";
import keyResultActions from "../actions/keyResults";
import dialogActions from "../actions/dialogs";
import currentActions from "../actions/current";
import actionTypes from "../constants/actionTypes";
import withLoading from "../utils/withLoading";
import toastActions from "../actions/toasts";
import {
  isChildObjectiveById,
  isMemberKeyResultById,
  getObjectiveByKeyResultId,
  getEnabledObjectiveIds,
  getEnabledKeyResultIds,
} from "../utils/okr";
import { OkrTypes } from "../utils/okr";

function* fetchOkrs({
  payload: { okrPeriodId, userId, isOkrPeriodChanged, isInitialOkrSelected },
}) {
  const loginUserId = yield select(state => state.loginUser.get("id"));
  if (isOkrPeriodChanged) {
    yield put(keyResultActions.fetchTaskKeyResults(okrPeriodId, loginUserId)); // with loading
    yield take(actionTypes.FETCHED_TASK_KEY_RESULTS);
  }
  if (!isInitialOkrSelected && loginUserId === userId) {
    isInitialOkrSelected = yield selectInitialTaskKeyResult();
  }
  yield put(objectiveActions.fetchObjectives(okrPeriodId, userId)); // with loading
  yield take(actionTypes.FETCHED_OBJECTIVES);
  if (!isInitialOkrSelected) {
    isInitialOkrSelected = yield selectInitialObjective();
  }
  yield put(keyResultActions.fetchKeyResults(okrPeriodId, userId)); // without loading
  yield take(actionTypes.FETCHED_KEY_RESULTS);
  if (!isInitialOkrSelected) {
    yield selectInitialKeyResult();
  }
  if (isOkrPeriodChanged) {
    // 前期 OKR の fetch
    const okrPeriods = yield select(state => state.okrPeriods);
    const okrPeriodIndex = okrPeriods.findIndex(
      okrPeriod => okrPeriod.get("id") === okrPeriodId,
    );
    if (okrPeriodIndex > 0) {
      const previousOkrPeriodId = okrPeriods.getIn([okrPeriodIndex - 1, "id"]);
      yield put(
        objectiveActions.fetchPreviousObjectives(
          previousOkrPeriodId,
          loginUserId,
        ),
      ); // without loading
      yield take(actionTypes.FETCHED_PREVIOUS_OBJECTIVES);
    } else {
      yield put(objectiveActions.fetchedPreviousObjectivesError());
    }
    // 上位 KR や紐付く Objective の紐付け変更用に O/KR 候補一覧を取得する
    const isAdmin = yield select(state => state.loginUser.get("isAdmin"));
    // Objective に紐付く上位 KR の変更のほうがよく行われるとの推測から先に KR を fetch する
    yield put(
      keyResultActions.fetchKeyResultCandidates(
        okrPeriodId,
        isAdmin ? undefined : loginUserId,
      ),
    ); // without loading
    yield take(actionTypes.FETCHED_KEY_RESULT_CANDIDATES);
    yield put(
      objectiveActions.fetchObjectiveCandidates(
        okrPeriodId,
        isAdmin ? undefined : loginUserId,
      ),
    ); // without loading
    yield take(actionTypes.FETCHED_OBJECTIVE_CANDIDATES);
  }
}

function* selectInitialTaskKeyResult() {
  return yield selectInitialKeyResult("taskIds", OkrTypes.TASK, false);
}

function* selectInitialObjective() {
  const objectiveId = yield select(state => {
    const showDisabledOkrs = state.loginUser.getIn([
      "userSetting",
      "showDisabledOkrs",
    ]);
    const objectives = getEnabledObjectiveIds(
      state.objectives.get("ids"),
      showDisabledOkrs,
      state.entities,
    );
    const ownerId = state.current.get("userId");
    const showChildObjectives = state.loginUser.getIn([
      "userSetting",
      "showChildObjectives",
    ]);
    return showChildObjectives
      ? objectives.first()
      : objectives.find(
          objectiveId =>
            !isChildObjectiveById(objectiveId, ownerId, state.entities),
        );
  });
  if (objectiveId) {
    yield put(currentActions.selectOkr(objectiveId));
    yield put(currentActions.selectTab(OkrTypes.OBJECTIVE));
    return true;
  }
  return false;
}

function* selectInitialKeyResult(
  ids = "ids",
  type = OkrTypes.KEY_RESULT,
  selectAnyway = true,
) {
  const keyResultId = yield select(state => {
    const showDisabledOkrs = state.loginUser.getIn([
      "userSetting",
      "showDisabledOkrs",
    ]);
    const keyResults = getEnabledKeyResultIds(
      state.keyResults.get(ids),
      showDisabledOkrs,
      state.entities,
    );
    const ownerId = state.current.get("userId");
    const showMemberKeyResults = state.loginUser.getIn([
      "userSetting",
      "showMemberKeyResults",
    ]);
    return showMemberKeyResults
      ? keyResults.first()
      : keyResults.find(
          keyResultId =>
            !isMemberKeyResultById(keyResultId, ownerId, state.entities),
        );
  });
  if (keyResultId) {
    const keyResult = yield select(state =>
      state.entities.keyResults.get(keyResultId),
    );
    yield put(
      currentActions.selectOkr(keyResult.get("objectiveId"), keyResultId),
    );
    yield put(currentActions.selectTab(type));
    return true;
  }
  if (selectAnyway) {
    yield put(currentActions.clearSelectedOkr());
    yield put(currentActions.selectTab(OkrTypes.OBJECTIVE));
    return true;
  }
  return false;
}

function* fetchObjective({ payload }) {
  const result = yield callFetchObjective(
    payload.objectiveId,
    payload.keyResultId,
  );
  if (result.error) {
    yield put(objectiveActions.fetchedObjectiveError());
  } else {
    yield put(objectiveActions.fetchedObjective(result.get("objective")));
  }
}

function* fetchObjectiveAsync({ payload }) {
  const result = yield callFetchObjective(
    payload.objectiveId,
    payload.keyResultId,
  );
  yield put(objectiveActions.fetchedObjective(result.get("objective")));
}

function* callFetchObjective(objectiveId, keyResultId) {
  return yield callInSilent(
    API.get,
    objectiveId
      ? `/objectives/${objectiveId}`
      : `/key_results/${keyResultId}/objective`,
  );
}

function* fetchObjectives({ payload }) {
  const result = yield callFetchObjectives(payload.okrPeriodId, payload.userId);
  yield put(objectiveActions.fetchedObjectives(result.get("objectives")));
}

function* fetchPreviousObjectives({ payload }) {
  const result = yield callFetchObjectives(payload.okrPeriodId, payload.userId);
  yield put(
    objectiveActions.fetchedPreviousObjectives(result.get("objectives")),
  );
}

function* callFetchObjectives(okrPeriodId, userId) {
  return yield call(API.get, "/objectives", { okrPeriodId, userId });
}

function* fetchObjectiveCandidates({ payload }) {
  const result = yield call(API.get, "/objectives/candidates", {
    okrPeriodId: payload.okrPeriodId,
    userId: payload.userId,
  });
  yield put(objectiveActions.fetchedObjectiveCandidates(result));
}

function* addObjective({ payload }) {
  const url = payload.isCopy
    ? `/objectives/${payload.objective.id}/copy`
    : "/objectives";
  const result = yield call(API.post, url, { objective: payload.objective });
  const currentUserId = yield select(state => state.current.get("userId"));
  const objective = result.get("objective");
  yield put(objectiveActions.addedObjective(objective, currentUserId));
  yield selectOrExpandMapOkr(objective);
  yield put(dialogActions.closeObjectiveModal());
  yield put(toastActions.showToast("Objective を作成しました"));
}

function* selectOrExpandMapOkr(objective) {
  const parentKeyResultId = objective.get("parentKeyResultId");
  if (parentKeyResultId) {
    const [entities, mapOkr] = yield select(state => [
      state.entities,
      state.current.get("mapOkr"),
    ]);
    const parentObjective = getObjectiveByKeyResultId(
      parentKeyResultId,
      entities,
    );
    const parentObjectiveId = parentObjective.get("id");
    const grandParentKeyResultId = parentObjective.get("parentKeyResultId");
    const isMapped = mapOkr.some(
      (krIds, oId) =>
        oId === parentObjectiveId || krIds.includes(grandParentKeyResultId),
    );
    if (isMapped) {
      // 下位 O 追加時は OKR マップ上で常に下位 O を表示する (上位 KR を強制的に展開する)
      yield put(
        currentActions.expandKeyResult(
          parentObjectiveId,
          parentKeyResultId,
          grandParentKeyResultId,
        ),
      );
      return;
    }
  }
  yield put(currentActions.selectMapOkr(objective.get("id")));
}

function* updateObjective({ payload }) {
  const result = yield call(
    API.put,
    `/objectives/${payload.objective.id}`,
    payload,
  );
  const currentUserId = yield select(state => state.current.get("userId"));
  yield put(
    objectiveActions.updatedObjective(result.get("objective"), currentUserId),
  );
  const isOpenObjectiveModal = yield select(state =>
    state.dialogs.getIn(["objectiveForm", "isOpen"]),
  );
  if (isOpenObjectiveModal) {
    yield put(dialogActions.closeObjectiveModal());
  }
  if (payload.isToast) {
    yield put(toastActions.showToast("Objective を更新しました"));
  }
}

function* removeObjective({ payload }) {
  const keyResultIds = yield select(state =>
    state.entities.objectives.getIn([payload.id, "keyResultIds"]),
  );
  const result = yield call(API.delete, `/objectives/${payload.id}`);
  yield put(objectiveActions.removedObjective(result.get("objective")));
  if (!keyResultIds.isEmpty()) {
    yield put(objectiveActions.removedObjectiveKeyResults(keyResultIds));
  }
  yield put(toastActions.showToast("Objective を削除しました"));
}

function* disableObjective({ payload: { id, toDisable } }) {
  const result = yield call(API.put, `/objectives/${id}/disable`, {
    disabled: toDisable,
  });
  yield put(objectiveActions.disabledObjective(result.get("objective")));
  yield put(
    toastActions.showToast(
      `Objective を${toDisable ? "無効化" : "有効化"}しました`,
    ),
  );
}

function* fetchObjectiveHistory({ payload }) {
  const result = yield call(API.get, `/objectives/${payload.id}/histories`);
  yield put(objectiveActions.fetchedObjectiveHistory(payload.id, result.get("histories")));
}

export function* objectiveSagas() {
  yield all([
    takeLatest(actionTypes.FETCH_OKRS, fetchOkrs),
    takeLatest(actionTypes.FETCH_OBJECTIVE, withLoading(fetchObjective)),
    takeLatest(actionTypes.FETCH_OBJECTIVE_ASYNC, fetchObjectiveAsync),
    takeLatest(actionTypes.FETCH_OBJECTIVES, withLoading(fetchObjectives)),
    takeLatest(actionTypes.FETCH_PREVIOUS_OBJECTIVES, fetchPreviousObjectives),
    takeLatest(
      actionTypes.FETCH_OBJECTIVE_CANDIDATES,
      fetchObjectiveCandidates,
    ),
    takeLatest(actionTypes.ADD_OBJECTIVE, withLoading(addObjective)),
    takeLatest(actionTypes.UPDATE_OBJECTIVE, withLoading(updateObjective)),
    takeLatest(actionTypes.REMOVE_OBJECTIVE, withLoading(removeObjective)),
    takeLatest(actionTypes.DISABLE_OBJECTIVE, withLoading(disableObjective)),
    takeLatest(actionTypes.FETCH_OBJECTIVE_HISTORY, withLoading(fetchObjectiveHistory)),
  ]);
}
