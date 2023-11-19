import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IEvent} from "@/services/types/eventsTypes";

interface EventsState {
    eventsList: IEvent.root[],
    clickedEvent: number | null,
}

const initialState: EventsState = {
    eventsList: [],
    clickedEvent: null,
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        fillEventsList: (state, {payload}: PayloadAction<IEvent.root[]>) => {
            state.eventsList = payload
        },
        setClickedEvent: (state, {payload}: PayloadAction<number | null>) => {
            state.clickedEvent = payload
        },
    },
})

export const GET_EVENTS = 'events/getEvents';
export const getEvents = createAction(GET_EVENTS)

export const {fillEventsList, setClickedEvent} = eventSlice.actions

const eventsReducer = eventSlice.reducer
export default eventsReducer