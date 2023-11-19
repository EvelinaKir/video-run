import {EventsController} from "@/services/controllers/eventsController";
import {put, PutEffect} from "redux-saga/effects";
import {fillEventsList} from "@/services/reducers/eventsReducer";
import {IEvent} from "@/services/types/eventsTypes";
import {AnyAction} from "redux";
import {AxiosResponse} from "axios";
import {compareAsc} from "date-fns";

export function* getEventsListSaga(): Generator<
    Promise<AxiosResponse<IEvent.root[]>> | PutEffect<AnyAction>,
    void,
    AxiosResponse<IEvent.root[]>
> {
    const payload = yield EventsController.getAll()
    const result = payload.data.sort((a, b) => compareAsc(new Date(a.timestamp), new Date(b.timestamp)))
    yield put(fillEventsList(result))
}