'use client';
//Components
import { useState } from "react";
import SongItem from "./SongItem";

export default function SectionThree() {
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const songs = [ 
        '/music/Dirty_Little_Animals__From_the_series_Arcane_League_of_Legends_.mp3', 
        '/music/Dynasties___Dystopia__from_the_series_Arcane_League_of_Legends_.mp3', 
        '/music/Enemy - Imagine Dragons(PagalWorld).mp3', 
        '/music/Get_Jinxed.mp3' 
    ];

    return(
        <div className="w-full">
            <h3 className="uppercase text-[45px] font-semibold">Track list</h3>
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
}