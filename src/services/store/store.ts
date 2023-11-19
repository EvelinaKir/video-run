import {configureStore} from '@reduxjs/toolkit'
import eventsReducer from "@/services/reducers/eventsReducer";
import createSagaMiddleware from "@redux-saga/core";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import sagas from "@/services/saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        events: eventsReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)


export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector