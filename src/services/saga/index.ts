import {takeEvery} from "redux-saga/effects";
import {GET_EVENTS} from "@/services/reducers/eventsReducer";
import {getEventsListSaga} from "@/services/saga/eventsSaga";

function* sagas() {
    yield takeEvery(GET_EVENTS, getEventsListSaga)
}

export default sagas