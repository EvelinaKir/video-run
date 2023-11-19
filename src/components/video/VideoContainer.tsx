import React, {useEffect, useRef} from 'react';
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import {useAppSelector} from "@/services/store/store";
import 'videojs-overlay'


const VideoContainer = () => {
    const videoRef = useRef<HTMLDivElement | null>(null);
    const playerRef = useRef<typeof videojs['players'] | null>(null);
    const {clickedEvent, eventsList} = useAppSelector((state) => state.events)


    const videoJsOptions: typeof videojs['options'] = {
        autoplay: false,
        controls: true,
        responsive: false,
        fluid: true,
        sources: [{
            src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            type: 'video/mp4'
        }]
    };
    const handlePlayerReady = (player: typeof videojs['players']) => {
        playerRef.current = player;
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });
        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };


    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            if (videoRef?.current)
                videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, videoJsOptions, () => {

                handlePlayerReady && handlePlayerReady(player);
            });

        } else {
            const player = playerRef.current;
            player.autoplay(videoJsOptions.autoplay);
            player.src(videoJsOptions.sources);
        }

    }, [videoJsOptions, videoRef]);

    useEffect(() => {
        const player = playerRef.current;

        if (player && clickedEvent) {
            const paused = player.paused()
            player.currentTime(clickedEvent)
            if (!paused) {
                player.play()
            }
        }
    }, [clickedEvent]);

    useEffect(() => {
        const player = playerRef.current;
        if (eventsList?.length && player) {
            const mappedList = eventsList.map(p => ({
                content: `<div style='width: ${p.zone.width * 100 / player.videoWidth()}%; height: ${p.zone.height * 100 / player.videoHeight()}%; top: ${p.zone.top * 100 / player.videoHeight()}%; left: ${p.zone.left * 100 / player.videoWidth()}%' class=" z-50  bg-green-500  absolute" ></div>`,
                start: p.timestamp,
                end: p.timestamp + p.duration,
                width: p.zone.width
            }))

            player.overlay({
                overlays: mappedList
            });
        }
    }, [eventsList]);


    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <div ref={videoRef} className={'relative'}/>
        </div>
    );
};

export default VideoContainer;