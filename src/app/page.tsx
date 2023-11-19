'use client'
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/services/store/store";
import {getEvents} from "@/services/reducers/eventsReducer";
import TimestampSwiper from "@/components/swiper/TimestampSwiper";
import VideoContainer from "@/components/video/VideoContainer";

const Page = () => {
    const dispatch = useAppDispatch()
    const {eventsList} = useAppSelector((state) => state.events)


    useEffect(() => {
        dispatch(getEvents())
    }, []);

    return (
        <div className={'flex flex-col w-full'}>
            <VideoContainer/>
            <TimestampSwiper list={eventsList}/>
        </div>
    );
};

export default Page;