'use client'
//Components
import { parseBlob } from "music-metadata";
import { useEffect, useState, useRef } from "react";
//Icons
import { IoPlayOutline } from "react-icons/io5";
import { PiPauseLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
//Types
import type { IAudioMetadata } from "music-metadata";

interface SongItemProps {
    song: string;
    index: number;
    currentAudio: HTMLAudioElement | null;
    setCurrentAudio: (audio: HTMLAudioElement | null) => void;
    currentIndex: number | null;
    setCurrentIndex: (currentIndex: number | null) => void;
}

export default function SongItem({ 
                                    song, index, currentAudio, currentIndex,
                                    setCurrentAudio, setCurrentIndex
                                }: SongItemProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [info, setInfo] = useState<IAudioMetadata | null>(null);
    const isPlaying = currentIndex === index;

    //Load metadata
    useEffect(() => {
        async function load() {
            const res = await fetch(song);
            const blob = await res.blob();
            const metadata = await parseBlob(blob);
            setInfo(metadata);
        }
        load();
    }, [song]);

    //Play / Pause
    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        // Stop previously playing audio
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause()
            currentAudio.currentTime = 0
        }

        if (audio.paused) {
            audio.play()
            setCurrentAudio(audio)
            setCurrentIndex(index)   // <-- tell parent which song is playing
        } else {
            audio.pause()
            setCurrentIndex(null)    // <-- no song is playing
        }
    };

    return(
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <h4>{index}</h4>
                <button 
                    type="button"
                    title="play"
                    onClick={togglePlay}
                >
                    {isPlaying ? <PiPauseLight size={35} /> : <IoPlayOutline size={35} />}
                </button>
                <div className="flex flex-col">
                    <h5>{info?.common?.title || "Unknown Title"}</h5>
                    <h5>{info?.common?.artist || "Unknown Artist"}</h5>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <h5>
                    {info?.format?.duration
                        ? new Date(info.format.duration * 1000).toISOString().substring(14, 19)
                        : "--:--"
                    }
                </h5>
                <button 
                    type="button" 
                    title="share"
                >
                    <IoShareSocialOutline size={25} />
                </button>
            </div>
            <audio ref={audioRef} src={song} />
        </div>
    );
}