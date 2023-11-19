'use client'
import React from 'react';
import {IEvent} from "@/services/types/eventsTypes";
import Swiper from "swiper";
import SwiperSlide from "@/components/swiper/SwiperSlide";
import {Navigation, Pagination} from "swiper/modules";


const TimestampSwiper = ({list}: { list: IEvent.root[] }) => {

    new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        height: 250,
        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            enabled: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    return (
        <div className={'w-full relative'}>
            <div className="swiper mySwiper  w-[90%]">
                <div className="swiper-wrapper">
                    {list.map((ev, i) => <SwiperSlide timestamp={ev.timestamp}
                                                      key={i}/>)}
                </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default React.memo(TimestampSwiper);