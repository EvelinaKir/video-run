import React from 'react';
import {useAppDispatch} from "@/services/store/store";
import timestampToString from "@/services/helpers/timestampToString";
import {setClickedEvent} from "@/services/reducers/eventsReducer";

const SwiperSlide = ({timestamp}: { timestamp: number }) => {
    const dispatch = useAppDispatch()
    return (
        <div onClick={() => dispatch(setClickedEvent(timestamp))}
             className={`swiper-slide  card w-min justify-center`}>
            {timestampToString(timestamp)}
        </div>
    );
};

export default SwiperSlide;