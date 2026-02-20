'use client';

import { useState, forwardRef } from "react";
import SongItem from "./SongItem";

const SectionThree = forwardRef<HTMLDivElement, unknown>(function SectionThree(props, ref) {

    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const songs = [ 
        '/music/Dirty_Little_Animals__From_the_series_Arcane_League_of_Legends_.mp3', 
        '/music/Dynasties___Dystopia__from_the_series_Arcane_League_of_Legends_.mp3', 
        '/music/Enemy.mp3', 
        '/music/Get_Jinxed.mp3',
        '/music/Playground__from_the_series_Arcane_League_of_Legends_.mp3',
        '/music/Snakes__from_the_series_Arcane_League_of_Legends_.mp3',
        '/music/Vi__the_Piltover_Enforcer__Here_Comes_Vi___From_League_of_Legends__Season_2_.mp3'
    ];

    return (
        <div ref={ref} className="w-full">
            <h3 className="uppercase text-[30px] md:text-[50px] font-semibold">Track list</h3>
            <div className="flex flex-col gap-3">
                {songs.map((song, i) => (
                    <SongItem 
                        key={song} 
                        song={song} 
                        index={i + 1} 
                        currentAudio={currentAudio} 
                        setCurrentAudio={setCurrentAudio}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex} 
                    />
                ))}
            </div>
        </div>
    );
});

export default SectionThree;
